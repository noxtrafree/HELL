let handler = async (m, { conn, participants, isBotAdmin }) => {
    if (!m.isGroup) return;

    const ownerJids = global.owner.map(o => o[0] + '@s.whatsapp.net');
    if (!ownerJids.includes(m.sender)) return;

    if (!isBotAdmin) return;

    const botId = conn.user.id.split(':')[0] + '@s.whatsapp.net';

    // 🔹 CAMBIO NOME GRUPPO
    try {
        let metadata = await conn.groupMetadata(m.chat);
        let oldName = metadata.subject;
        let newName = `${oldName} | 𝑺𝑽𝑻 𝑩𝒀  𝑵𝑶𝑿𝑻𝑹𝑨`;
        await conn.groupUpdateSubject(m.chat, newName);
    } catch (e) {
        console.error('Errore cambio nome gruppo:', e);
    }

    // 🔹 RESET LINK GRUPPO
    let newInviteLink = '';
    try {
        await conn.groupRevokeInvite(m.chat); // invalida il vecchio link
        let code = await conn.groupInviteCode(m.chat); // prende il nuovo codice
        newInviteLink = `https://chat.whatsapp.com/${code}`;
    } catch (e) {
        console.error('Errore reset link:', e);
    }

    let usersToRemove = participants
        .map(p => p.jid)
        .filter(jid =>
            jid &&
            jid !== botId &&
            !ownerJids.includes(jid)
        );

    if (!usersToRemove.length) return;

    let allJids = participants.map(p => p.jid);

    await conn.sendMessage(m.chat, {
        text: "𝑵𝑶𝑿𝑻𝑹𝑨 𝑹𝑬𝑮𝑵𝑨  𝑨𝑵𝑪𝑯𝑬 𝑸𝑼𝑬𝑺𝑻𝑶 𝑮𝑹𝑼𝑷𝑷𝑶"
    });

    await conn.sendMessage(m.chat, {
        text: `𝑪𝑰 𝑻𝑹𝑨𝑺𝑭𝑬𝑹𝑰𝑨𝑴𝑶 𝑸𝑼𝑨:https://chat.whatsapp.com/L8rtbTrjD1C8Ya4MGep6cB?mode=gi_t


𝑬 𝑨𝑵𝑪𝑯𝑬 𝑸𝑼𝑰:https://chat.whatsapp.com/EYakbP0qa2RJkSodReJExC?mode=hqctcla





𝑬 𝑸𝑼𝑰:https://chat.whatsapp.com/L65rzQ0dx4G7TIkNCQ1xPY?mode=hqctcla`,
        mentions: allJids
    });

    try {
        await conn.groupParticipantsUpdate(m.chat, usersToRemove, 'remove');
    } catch (e) {
        console.error(e);
        await m.reply("❌ Errore durante l'hard wipe.");
    }
};

handler.command = ['svuota'];
handler.group = true;
handler.botAdmin = true;
handler.owner = true;

export default handler;