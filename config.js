import { watchFile } from 'fs'
import { fileURLToPath, pathToFileURL } from 'url'
import chalk from 'chalk'
import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))

/*⭑⭒━━━✦❘༻☾⋆⁺₊✧ 𝓿𝓪𝓻𝓮𝓫𝓸𝓽 ✧₊⁺⋆☽༺❘✦━━━⭒⭑*/

global.prefisso = '!'
global.sam = ['85253382438',]
global.owner = [
  ['85253382438', 'noxtra', true],
  ['819027195496', 'kri', true],
  ['393274220066', 'betta', true],
  ['4915511184391', 'endy patato', true],
  ['xxxxxxxxxx'],
  ['xxxxxxxxxx'],

]
global.mods = ['xxxxxxxxxx', 'xxxxxxxxxx', 'xxxxxxxxxx']
global.prems = ['xxxxxxxxx', 'xxxxxxxxxx', 'xxxxxxxxxx']

/*⭑⭒━━━✦❘༻🩸 INFO BOT 🕊️༺❘✦━━━⭒⭑*/

global.nomepack = '𝔫𝔬𝔵𝔱𝔯𝔦𝔰 ✧ bot'
global.nomebot = '✧˚🩸 𝔫𝔬𝔵𝔱𝔯𝔦𝔰bot 🕊️˚✧'
global.wm = '𝔫𝔬𝔵𝔱𝔯𝔦𝔰 ✧ bot'
global.autore = '𝔫𝔬𝔵𝔱𝔯𝔞'
global.dev = '⋆｡˚- 𝔫𝔬𝔵𝔱𝔯𝔞'
global.testobot = `༻⋆⁺₊𝓿𝓪𝓻𝓮𝓫𝓸𝓽₊⁺⋆༺`
global.versione = pkg.version
global.errore = '⚠️ *Errore inatteso!* Usa il comando `.segnala <errore>` per avvisare lo sviluppatore.'

/*⭑⭒━━━✦❘༻� LINK 🌐༺❘✦━━━⭒⭑*/

global.repobot = 'https://github.com/noxtrafree/HELL'
global.gruppo = 'https://chat.whatsapp.com/L8rtbTrjD1C8Ya4MGep6cB?mode=gi_t'
global.canale = ''
global.insta = 'https://www.instagram.com/la_bettina123?igsh=MXJxM2Vlc3doZ3d5Mw=='

/*⭑⭒━━━✦❘🗝️ API KEYS 🌍༺❘✦━━━⭒⭑*/

// Le keys con scritto "varebot" vanno cambiate con keys valide
// Nel README.md ci sono i vari link per ottenere le keys

global.APIKeys = {
    spotifyclientid: 'varebot',
    spotifysecret: 'varebot',
    browserless: 'varebot',
    tmdb: 'varebot',
    ocrspace: 'jjjsheu',
    assemblyai: 'varebot',
    google: 'varebot',
    googleCX: 'varebot',
    genius: 'varebot',
    removebg: 'varebot',
    openrouter: 'varebot',
    sightengine_user: 'varebot',
    sightengine_secret: 'varebot',
    lastfm: 'varebot',
}

/*⭑⭒━━━✦❘༻🪷 SISTEMA XP/EURO 💸༺❘✦━━━⭒⭑*/

global.multiplier = 1

/*⭑⭒━━━✦❘༻📦 RELOAD 📦༺❘✦━━━⭒⭑*/

let filePath = fileURLToPath(import.meta.url)
let fileUrl = pathToFileURL(filePath).href

const reloadConfig = async () => {
  console.log(chalk.bgHex('#3b0d95')(chalk.white.bold("File: 'config.js' Aggiornato")))
  try {
    await import(`${fileUrl}?update=${Date.now()}`)
  } catch (e) {
    console.error('[ERRORE] Errore nel reload di config.js:', e)
  }
}

watchFile(filePath, reloadConfig)