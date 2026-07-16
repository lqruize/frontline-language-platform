export type KitchenModuleId =
  | "communication"
  | "shift_pay"
  | "food_safety"
  | "kitchen_cleaning"
  | "front_counter"
  | "delivery_complaints"
  | "emergency_safety"
  | "daily_life";

export type SafetyLevel = "normal" | "caution" | "safety" | "emergency";

export type KitchenCourseModule = {
  id: KitchenModuleId;
  title: string;
  description: string;
  targetCount: number;
  publishedCount: number;
};

export type KitchenCourseItem = {
  id: string;
  moduleId: KitchenModuleId;
  moduleTitle: string;
  scenarioId: string;
  scenarioTitle: string;
  sequence: number;
  english: string;
  chinese: string;
  scenario: string;
  importance: string;
  role: string;
  roleZh: string;
  audioNormal: string | null;
  audioSlow: string | null;
  isFree: boolean;
  safetyLevel: SafetyLevel;
  reviewRequired: boolean;
  tags: string[];
  active: boolean;
  speakerRole: string;
  speakerRoleZh: string;
  difficulty: "Level 1" | "Level 2" | "Level 3";
  variants: string[];
  recommendedResponses: string[];
  dialogue: Array<{ speakerRole: string; speakerRoleZh: string; english: string; chinese: string; }>;
  vocabularyNotes: Array<{ term: string; chinese: string; pronunciation: string; note: string; example: string; }>;
  listenRepeatCount: number;
  speakRepeatCount: number;
};

export type KitchenCourseStats = {
  libraryCount: number;
  publishedCount: number;
  moduleCount: number;
  scenarioCount: number;
  freeScenarioCount: number;
  reusedFromPreviousCourses: number;
  newlyAdded: number;
  dedupedOrPolished: number;
  enrichedPublishedCount: number;
  level1Count: number;
  level2Count: number;
  level3Count: number;
  variantsCount: number;
  recommendedResponsesCount: number;
  dialogueScenarioCount: number;
  vocabularyNotesCount: number;
};

import communicationItems from "./kitchen-survival-v1/communication.json";
import shift_payItems from "./kitchen-survival-v1/shift_pay.json";
import food_safetyItems from "./kitchen-survival-v1/food_safety.json";
import kitchen_cleaningItems from "./kitchen-survival-v1/kitchen_cleaning.json";
import front_counterItems from "./kitchen-survival-v1/front_counter.json";
import delivery_complaintsItems from "./kitchen-survival-v1/delivery_complaints.json";
import emergency_safetyItems from "./kitchen-survival-v1/emergency_safety.json";
import daily_lifeItems from "./kitchen-survival-v1/daily_life.json";

const allKitchenSurvivalItems = [
  ...communicationItems,
  ...shift_payItems,
  ...food_safetyItems,
  ...kitchen_cleaningItems,
  ...front_counterItems,
  ...delivery_complaintsItems,
  ...emergency_safetyItems,
  ...daily_lifeItems
] as KitchenCourseItem[];

export const kitchenSurvivalCourse = {
  id: "kitchen-survival-v1",
  title: "北美餐厅生活与工作生存英语",
  subtitle: "Kitchen Survival English",
  priceLabel: "$4.99 一次性购买",
  sourceLanguage: "zh-CN",
  targetLanguage: "en-US",
  modules: [
    {
      "id": "communication",
      "title": "基础沟通",
      "description": "报到、听不懂、确认任务和同事配合。",
      "targetCount": 50,
      "publishedCount": 20
    },
    {
      "id": "shift_pay",
      "title": "排班工资",
      "description": "排班、迟到、请假、打卡、工资和交接班。",
      "targetCount": 40,
      "publishedCount": 15
    },
    {
      "id": "food_safety",
      "title": "食品卫生",
      "description": "洗手、手套、发网、食品安全、日期和存放。",
      "targetCount": 50,
      "publishedCount": 30
    },
    {
      "id": "kitchen_cleaning",
      "title": "后厨工作",
      "description": "备菜、炸炉、洗碗、三槽水池、清洁和关店。",
      "targetCount": 110,
      "publishedCount": 37
    },
    {
      "id": "front_counter",
      "title": "前台收银",
      "description": "迎客、点餐、套餐、收银、小费和取餐。",
      "targetCount": 100,
      "publishedCount": 38
    },
    {
      "id": "delivery_complaints",
      "title": "外卖投诉",
      "description": "电话订单、外卖取餐、少餐错餐、投诉和找经理。",
      "targetCount": 60,
      "publishedCount": 24
    },
    {
      "id": "emergency_safety",
      "title": "安全急救",
      "description": "热油刀具、受伤、火灾、911和紧急情况。",
      "targetCount": 50,
      "publishedCount": 18
    },
    {
      "id": "daily_life",
      "title": "生活英语",
      "description": "公交、银行、手机、租房、药店、医生和预约。",
      "targetCount": 60,
      "publishedCount": 56
    }
  ],
  freeScenarioIds: [
    "communication_repeat_confirm",
    "communication_first_day",
    "food_safety_handwashing_gloves",
    "front_counter_general",
    "front_counter_payment_card_cash",
    "delivery_complaints_missing_wrong_order"
  ],
  stats: {
    "libraryCount": 520,
    "publishedCount": 238,
    "moduleCount": 8,
    "scenarioCount": 36,
    "freeScenarioCount": 6,
    "reusedFromPreviousCourses": 350,
    "newlyAdded": 170,
    "dedupedOrPolished": 282,
    "enrichedPublishedCount": 238,
    "level1Count": 156,
    "level2Count": 70,
    "level3Count": 12,
    "variantsCount": 238,
    "recommendedResponsesCount": 238,
    "dialogueScenarioCount": 36,
    "vocabularyNotesCount": 238
  },
  items: allKitchenSurvivalItems
} as const satisfies {
  id: string; title: string; subtitle: string; priceLabel: string; sourceLanguage: string; targetLanguage: string;
  modules: KitchenCourseModule[]; freeScenarioIds: string[]; stats: KitchenCourseStats; items: KitchenCourseItem[];
};

export const freeKitchenScenarioIds = new Set(kitchenSurvivalCourse.freeScenarioIds);
