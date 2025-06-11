export const saveSessionId = (id) => {
  localStorage.setItem("sessionId", id);
};

export const getSessionId = () => {
  return localStorage.getItem("sessionId");
};

export const clearSessionId = () => {
  localStorage.removeItem("sessionId");
};

export const generateSessionId = () => {
  return 'sess_' + Math.random().toString(36).substr(2, 9);
};


export const saveIsCompletedFlag = () => {
   localStorage.setItem("isCompletedFlag", "true");
};

export const getIsCompletedFlag = () =>{
  return localStorage.getItem("isCompletedFlag");
}

export const clearIsCompletedFlag = () =>{
    localStorage.removeItem("isCompletedFlag") ;
}