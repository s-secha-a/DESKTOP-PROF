export function linktg() {
    async function openWebsite() {
        await window.electronAPI.openExternal('https://t.me/secha_a');
    };
    openWebsite();
}