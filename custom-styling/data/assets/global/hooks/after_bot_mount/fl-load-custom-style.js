/**
 * Make sure to set the path to your custom CSS file
 */
const chatOptions = {
  hideWidget: true,
  config: {
    enableReset: true,
    enableTranscriptDownload: true,
    extraStylesheet: '/assets/modules/channel-web/fl-style.css'
  }
}

const params = {
  m: 'channel-web',
  v: 'Fullscreen',
  options: JSON.stringify(chatOptions)
}

setTimeout(() => {
  try {
    bp.http.deleteShortLink(botId)
  } catch (e) {}

  // Bot will be available at $EXTERNAL_URL/s/$BOT_NAME
  bp.http.createShortLink(botId, `${process.EXTERNAL_URL}/lite/${botId}/`, params)
}, 500)
