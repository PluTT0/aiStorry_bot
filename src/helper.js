const logStart = () => {
  console.log("Bot has been started ...")
};


const getChatId = (msg) => {
  return msg.chat.id
};


export {
  logStart,
  getChatId,
}