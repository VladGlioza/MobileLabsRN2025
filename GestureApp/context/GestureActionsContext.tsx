import React, {
    createContext,
    useReducer,
    useContext,
    ReactNode,
    Dispatch,
} from "react";
import { tasks, TaskType } from "../mocks/data";

type TaskProgress = Record<string, number>;

interface GameState {
    score: number;
    progress: TaskProgress;
}

type GameAction =
    | { type: "ADD_SCORE"; value: number }
    | { type: "UPDATE_PROGRESS"; taskId: string; progress: number };

interface GameContextProps {
    gameState: GameState;
    addPoints: (points: number) => void;
    trackTask: (type: TaskType, points: number) => void;
}

const defaultProgress: TaskProgress = Object.fromEntries(
    tasks.map((task) => [task.id, 0])
);

const defaultState: GameState = {
    score: 0,
    progress: defaultProgress,
};

const Context = createContext<GameContextProps | null>(null);

const gameReducer = (state: GameState, action: GameAction): GameState => {
    switch (action.type) {
        case "ADD_SCORE": {
            const updatedScore = state.score + action.value;
            const scoreTask = tasks.find((task) => task.type === "score");
            const updatedProgress = { ...state.progress };
            if (scoreTask) {
                updatedProgress[scoreTask.id] = updatedScore;
            }
            return { ...state, score: updatedScore, progress: updatedProgress };
        }
        case "UPDATE_PROGRESS": {
            return {
                ...state,
                progress: {
                    ...state.progress,
                    [action.taskId]: action.progress,
                },
            };
        }
        default:
            return state;
    }
};

export const GameProvider = ({ children }: { children: ReactNode }) => {
    const [gameState, dispatch] = useReducer(gameReducer, defaultState);

    const addPoints = (points: number) => {
        dispatch({ type: "ADD_SCORE", value: points });
    };

    const trackTask = (taskType: TaskType, points: number) => {
        dispatch({ type: "ADD_SCORE", value: points });
        const foundTask = tasks.find((task) => task.type === taskType);
        if (foundTask) {
            const previousProgress = gameState.progress[foundTask.id] ?? 0;
            dispatch({
                type: "UPDATE_PROGRESS",
                taskId: foundTask.id,
                progress: previousProgress + 1,
            });
        }
    };

    return (
        <Context.Provider value={{ gameState, addPoints, trackTask }}>
            {children}
        </Context.Provider>
    );
};

export const useGestureActionsContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error(
            "useGestureActionsContext must be used within a GameProvider"
        );
    }
    return context;
};
