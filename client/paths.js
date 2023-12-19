export const paths = {
  home: "/",
  dashboard: {
    index: "/dashboard",
    question: "/dashboard/questionTable",
  },
  chat: {
    index: "/chat",
    doctor: "/chat/coworker/doctor",
    group: "/chat/coworker/group",
    nurse: "/chat/coworker/nurse",
    patient: (id) => `/chat/patient/${id}`,
  },
  login: "/login",
  record: {
    cooperation: (id) => `/record/cooperation/${id}`,
    input: (id) => `/record/input/${id}`,
    output: (id) => `/record/output/${id}`,
    interview: (id) => `record/interview/${id}`,
    history: (id) => `record/history/${id}`,
    cooperation: (id) => `record/cooperation/${id}`,
  },
};
