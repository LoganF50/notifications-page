const markAllMessagesAsRead = () => {
  //reset number unread to 0
  document.getElementById("number-unread-messages").textContent = "0";

  //remove all notification--unread classes
  const classToRemove = "notification--unread";
  const unread = document.getElementsByClassName(classToRemove);
  Array.from(unread).forEach((notification) =>
    notification.classList.remove(classToRemove)
  );
};

window.onload = () => {
  const button = document.getElementById("mark-as-read");
  button.addEventListener("click", markAllMessagesAsRead);
};
