// The founder-side clock. Change START and everything on the page follows.
const DAY = 86_400_000;

// Day 1 is June 30, 2026, 00:00 in Lagos (UTC+1). The run ends three years later.
const START = Date.UTC(2026, 5, 29, 23, 0, 0);
const END = Date.UTC(2029, 5, 29, 23, 0, 0);

export const GOAL_LABEL = "$1 billion in three years";

export type GoalStatus = {
  total: number;
  day: number;
  remaining: number;
  percent: number;
};

export function goalStatus(now: Date = new Date()): GoalStatus {
  const total = Math.round((END - START) / DAY);
  const raw = Math.floor((now.getTime() - START) / DAY) + 1;
  const day = Math.min(Math.max(raw, 0), total);
  return {
    total,
    day,
    remaining: total - day,
    percent: Math.round((day / total) * 1000) / 10,
  };
}