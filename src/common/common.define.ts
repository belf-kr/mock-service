/**
 * 공통 전역 변수 파일
 */

export let APP_PORT = 3000; // default : 3000
if (!process.env.STAGES) {
  process.env.STAGES = "LOCAL";
  APP_PORT = 3001;
}
export const SERVICE_UPDATE_TIMING = 1000 * 1; // default : 1000 * 1
