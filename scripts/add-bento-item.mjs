import fs from 'fs';
import readline from 'readline';
import path from 'path';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise(resolve => rl.question(query, resolve));

async function main() {
  console.log("\n🍱 === Ajouter un élément au BentoGrid === 🍱\n");

  const sectionId = await question("▶ Dans quelle section (ex: networks, projects) ? : ");
  if (!sectionId) {
    console.log("❌ Une section est requise.");
    process.exit(1);
  }

  const itemId = await question("▶ ID unique de l'élément (ex: my-project) : ");
  if (!itemId) {
    console.log("❌ Un ID unique est requis.");
    process.exit(1);
  }

  const text = await question("▶ Texte affiché sur la carte (ex: Github Repo) : ");
  if (!text) {
    console.log("❌ Un texte est requis.");
    process.exit(1);
  }

  const href = await question("▶ URL du lien (optionnel, Entrée pour ignorer) : ");
  const size = await question("▶ Taille (default, sm, md-w, md-h, xl) [optionnel] : ");
  const iconId = await question("▶ ID de l'icône (ex: SiGithub) [optionnel] : ");
  const imageId = await question("▶ ID de l'image (ex: youbookMarseilleImg) [optionnel] : ");
  const buttonText = await question("▶ Texte du bouton (ex: Discover) [optionnel] : ");

  const newItem = { id: itemId };
  if (href) newItem.href = href;
  if (size) newItem.size = size;
  if (iconId) newItem.iconId = iconId;
  if (imageId) newItem.imageId = imageId;
  if (buttonText) newItem.buttonText = buttonText;
  newItem.children = text;

  const dataDir = path.join(process.cwd(), 'src', 'data');
  const filePath = path.join(dataDir, `${sectionId}.json`);

  let data;
  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } else {
    console.log(`\n⚠️ La section '${sectionId}' n'existe pas encore.`);
    const title = await question("▶ Quel est le titre de cette NOUVELLE section ? : ");
    data = { id: sectionId, title, items: [] };
  }

  data.items.push(newItem);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  console.log(`\n✅ L'élément '${itemId}' a été ajouté avec succès dans src/data/${sectionId}.json !`);

  if (iconId || imageId) {
    console.log("\n🔔 RAPPEL IMPORTANT :");
    if (iconId) console.log(`👉 N'oublie pas d'ajouter l'icône '${iconId}' dans src/lib/iconMap.tsx`);
    if (imageId) console.log(`👉 N'oublie pas d'importer et d'ajouter l'image '${imageId}' dans src/lib/imageMap.ts`);
  }

  const isNewSection = !fs.existsSync(filePath);
  if (isNewSection) {
    console.log(`👉 Comme c'est une nouvelle section, pense à importer '${sectionId}.json' et ajouter <BentoSection data={...} /> dans src/features/bento-grid/BentoGrid.tsx`);
  }

  rl.close();
}

main();

