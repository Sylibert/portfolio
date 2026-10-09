import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '50mb' }));

// Initialize Google GenAI with telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Endpoint: AI Creative & Portfolio Assistant (Gemini 3.8 Flash)
app.post('/api/gemini/analyze', async (req, res) => {
  try {
    const { action, prompt, context } = req.body;

    let systemInstruction = `Tu es un directeur de création, producteur exécutif vidéo de renom et expert en conversion web pour les vidéastes et réalisateurs indépendants haut de gamme.
Tu t'adresses directement à Sylvain Libert (vidéaste spécialisé en Corporate & Finance, Publicité et Mode/Lookbook avec des clients comme Opale Capital, Homunity, SOL'S, Next Management, Dîme Tribe, FDCF, ASK).
Sois percutant, concret, élégant, chaleureux et orienté business/ROI. Utilise le formatage Markdown soigné avec puces et emphase.`;

    let userPrompt = prompt;

    if (action === 'audit') {
      userPrompt = `Effectue une analyse experte approfondie du portfolio de Sylvain Libert.
Voici les informations du portfolio actuel :
- Style visuel : Dark Chocolate (#130602), Brand Beige (#F3ECE7), typographie 'Special Gothic Expanded One' & 'Hind Mysuru', glassmorphism, orbes liquides.
- Réalisations : Opale Capital (Corporate/Finance PE), Homunity (Crowdfunding immo), FDCF (Fédération Détaillants Chaussures), SOL'S (Mode urbaine), Dîme Tribe (BTS Mode), Next Management (Portrait agence mannequins), ASK (Mode & Musique).
- Services : Films Corporate, Spots Publicitaires, Mode & Fashion.
- Contact : Boutons e-mail (sylvainlibertpro@gmail.com) et téléphone (06 44 38 71 78).
- Question spécifique ou focus demandé par Sylvain : "${prompt || 'Audit global : forces, faiblesses, taux de conversion et 5 actions prioritaires'}".

Structure ta réponse avec :
1. Diagnostic Global & Impact Visuel (ce qui marche fort)
2. Les 3 Gros Freins à la Conversion (ce qui fait fuir ou hésiter un client corporate/luxe)
3. Améliorations Concrètes du Copywriting & Structure (ex: accroche hero, preuve sociale/chiffres, grille tarifaire ou méthodologie)
4. Stratégie d'Offre recommandée pour doubler le panier moyen de production vidéo
5. Plan d'Action Immédiat en 3 Étapes`;
    } else if (action === 'pitch') {
      userPrompt = `Rédige un pitch commercial percutant ou un email de prospection froid haut de gamme pour Sylvain Libert.
Détails de la cible / demande : ${prompt}
Ton objectif : positionner Sylvain comme le partenaire vidéo stratégique incontournable, valoriser son esthétique cinéma et inciter à un call de 15 minutes.`;
    } else if (action === 'proposal') {
      userPrompt = `Rédige une proposition commerciale détaillée & estimation de devis pour un projet vidéo :
Paramètres du projet : ${prompt}
Inclus :
- Intitulé du projet & Objectif stratégique
- Méthodologie en 3 phases (Pré-production, Tournage, Post-production)
- Liste détaillée des livrables (formats 16:9, cuts 9:16 pour Reels/TikTok/LinkedIn, sous-titres, étalonnage)
- Fourchette budgétaire conseillée (avec justification de la valeur)
- Conditions & Délais de réalisation`;
    } else if (action === 'storyboard') {
      userPrompt = `Conçois un découpage technique / script et intentions de storyboard pour ce concept de vidéo :
Concept : ${prompt}
Présente le script sous forme de tableau ou de liste séquentielle détaillée (Plan, Timing, Visuel/Action caméra, Audio/Voix off ou Sound Design, Ambiance & Éclairage).`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ result: response.text });
  } catch (error: any) {
    console.error('Gemini analyze error:', error);
    res.status(500).json({ error: error.message || 'Erreur lors de l’analyse IA' });
  }
});

// Endpoint: Audio Transcription (Gemini 3.5 Transcribe)
app.post('/api/gemini/transcribe', async (req, res) => {
  try {
    const { audioBase64, mimeType, projectType } = req.body;

    if (!audioBase64) {
      return res.status(400).json({ error: 'Aucun flux audio fourni' });
    }

    const audioPart = {
      inlineData: {
        mimeType: mimeType || 'audio/webm',
        data: audioBase64,
      },
    };

    const textPart = {
      text: `Transcris fidèlement cet enregistrement audio en français.
Ensuite, transforme cette note vocale en un Brief Vidéo structuré professionnel pour Sylvain Libert (Vidéaste/Réalisateur) :
- Type de projet détecté ou suggéré (${projectType || 'Corporate / Mode / Pub'})
- Objectifs & Message clé
- Contraintes, timing ou livrables mentionnés
- Recommandation technique & créative de Sylvain pour ce projet.

Donne d'abord la [Transcription brute] puis le [Brief de Production Structuré].`,
    };

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-transcribe',
      contents: { parts: [audioPart, textPart] },
    });

    res.json({ result: response.text });
  } catch (error: any) {
    console.error('Gemini transcribe error:', error);
    res.status(500).json({ error: error.message || 'Erreur lors de la transcription audio' });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
