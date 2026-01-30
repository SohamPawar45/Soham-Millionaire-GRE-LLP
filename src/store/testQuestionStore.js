import { create } from "zustand";
import { useQuestionsStore } from "./questionsStore";

export const useTestQuestionStore = create((set, get) => ({
  testQuestions: [],

  // Add question to testQuestions by ID from question bank
  addTestQuestion: (id) => {
    const { questions } = useQuestionsStore.getState();
    const question = questions.find((q) => q.id === id);

    if (!question) return; // if not found in question bank, do nothing

    // Prevent duplicates
    const exists = get().testQuestions.find((q) => q.id === id);
    if (exists) return;

    set((state) => ({
      testQuestions: [...state.testQuestions, question],
    }));
  },

  // Remove question from testQuestions
  deleteTestQuestion: (id) =>
    set((state) => ({
      testQuestions: state.testQuestions.filter((q) => q.id !== id),
    })),

  // Check if question is already added
  isQuestionAdded: (id) => {
    return get().testQuestions.some((q) => q.id === id);
  },

  // Reset testQuestions (for after creating test)
  setTestQuestions: (questions) => set({ testQuestions: questions }),
  clearQuestions: () => set({ testQuestions: [] }),
}));
