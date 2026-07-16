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

export const kitchenSurvivalCourse = {
  id: "kitchen-survival-v1",
  title: "北美餐厅生活与工作生存英语",
  subtitle: "Kitchen Survival English",
  priceLabel: "$4.99 一次性购买",
  sourceLanguage: "zh-CN",
  targetLanguage: "en-US",
  modules: [
    {
      id: "communication",
      title: "基础沟通",
      description: "报到、听不懂、确认任务和同事配合。",
      targetCount: 50,
      publishedCount: 20
    },
    {
      id: "shift_pay",
      title: "排班工资",
      description: "排班、迟到、请假、打卡、工资和交接班。",
      targetCount: 40,
      publishedCount: 15
    },
    {
      id: "food_safety",
      title: "食品卫生",
      description: "洗手、手套、发网、食品安全、日期和存放。",
      targetCount: 50,
      publishedCount: 30
    },
    {
      id: "kitchen_cleaning",
      title: "后厨工作",
      description: "备菜、炸炉、洗碗、三槽水池、清洁和关店。",
      targetCount: 110,
      publishedCount: 37
    },
    {
      id: "front_counter",
      title: "前台收银",
      description: "迎客、点餐、套餐、收银、小费和取餐。",
      targetCount: 100,
      publishedCount: 38
    },
    {
      id: "delivery_complaints",
      title: "外卖投诉",
      description: "电话订单、外卖取餐、少餐错餐、投诉和找经理。",
      targetCount: 60,
      publishedCount: 24
    },
    {
      id: "emergency_safety",
      title: "安全急救",
      description: "热油刀具、受伤、火灾、911和紧急情况。",
      targetCount: 50,
      publishedCount: 18
    },
    {
      id: "daily_life",
      title: "生活英语",
      description: "公交、银行、手机、租房、药店、医生和预约。",
      targetCount: 60,
      publishedCount: 56
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
    libraryCount: 520,
    publishedCount: 238,
    moduleCount: 8,
    scenarioCount: 36,
    freeScenarioCount: 6,
    reusedFromPreviousCourses: 350,
    newlyAdded: 170,
    dedupedOrPolished: 282,
    enrichedPublishedCount: 238,
    level1Count: 156,
    level2Count: 70,
    level3Count: 12,
    variantsCount: 238,
    recommendedResponsesCount: 238,
    dialogueScenarioCount: 36,
    vocabularyNotesCount: 238
  },
  items: [
    {
      id: "communication_001",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 3,
      english: "Please start with this task.",
      chinese: "请先做这项工作。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_001-normal.mp3",
      audioSlow: "/audio/en-US/communication_001-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please do this first.",
        "Start with this one."
      ],
      recommendedResponses: [
        "Okay, I’ll start now.",
        "Sure. What should I do after this?",
        "Can you show me how to do it?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Please start with this task.",
          chinese: "请先做这项工作。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll start now.",
          chinese: "好的，我现在开始。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "What should I do after this?",
          chinese: "这项做完以后我做什么？"
        }
      ],
      vocabularyNotes: [
        {
          term: "start with",
          chinese: "从……开始；先做……",
          pronunciation: "start-with",
          note: "主管用它告诉员工先做哪一项工作。",
          example: "Start with the onions."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_002",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "听不懂和请对方重复",
      sequence: 5,
      english: "Which task should I do first?",
      chinese: "我应该先做哪项工作？",
      scenario: "没听清时请对方再说一遍、写下来或示范。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_002-normal.mp3",
      audioSlow: "/audio/en-US/communication_002-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "What should I do first?",
        "Which one comes first?",
        "Where should I start?"
      ],
      recommendedResponses: [
        "Start with the onions.",
        "Please clean the table first.",
        "Do the delivery order first."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Which task should I do first?",
          chinese: "我应该先做哪项工作？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Start with the onions.",
          chinese: "先从洋葱开始。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll start there.",
          chinese: "好的，我先做那个。"
        }
      ],
      vocabularyNotes: [
        {
          term: "which task",
          chinese: "哪一项工作",
          pronunciation: "which-task",
          note: "用来确认多个任务里应该先做哪一个。",
          example: "Which task is next?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_003",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 3,
      english: "This needs to be done by noon.",
      chinese: "这项工作需要在中午之前完成。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_003-normal.mp3",
      audioSlow: "/audio/en-US/communication_003-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Finish this before noon.",
        "Please have this ready by noon."
      ],
      recommendedResponses: [
        "Got it.",
        "I’ll finish it before noon.",
        "Should I stop my current task first?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "This needs to be done by noon.",
          chinese: "这项工作需要在中午之前完成。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "needs to be done",
          chinese: "需要完成",
          pronunciation: "needs to be done",
          note: "表示这件事必须完成。",
          example: "This needs to be done today."
        },
        {
          term: "by noon",
          chinese: "中午前",
          pronunciation: "by noon",
          note: "by 表示截止时间。",
          example: "Finish it by noon."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_004",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "听不懂和请对方重复",
      sequence: 3,
      english: "I understand the task.",
      chinese: "我明白这项工作。",
      scenario: "没听清时请对方再说一遍、写下来或示范。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_004-normal.mp3",
      audioSlow: "/audio/en-US/communication_004-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I understand what to do."
      ],
      recommendedResponses: [
        "Good. Please start now.",
        "Great. Ask me if you get stuck."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "I understand the task.",
          chinese: "我明白这项工作。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Good. Please start now.",
          chinese: "好，请现在开始。"
        }
      ],
      vocabularyNotes: [
        {
          term: "understand",
          chinese: "明白；听懂",
          pronunciation: "un-der-STAND",
          note: "表示你已经听懂任务或说明。",
          example: "I understand now."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_005",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "听不懂和请对方重复",
      sequence: 9,
      english: "Please repeat the instructions back to me.",
      chinese: "请把指令复述一遍。",
      scenario: "没听清时请对方再说一遍、写下来或示范。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_005-normal.mp3",
      audioSlow: "/audio/en-US/communication_005-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Say the instructions back to me.",
        "Tell me the steps again."
      ],
      recommendedResponses: [
        "Sure. I’ll say it back.",
        "I want to make sure I understand."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Please repeat the instructions back to me.",
          chinese: "请把指令复述一遍。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Sure. First I wash, then I label it.",
          chinese: "好的。先清洗，然后贴标签。"
        }
      ],
      vocabularyNotes: [
        {
          term: "repeat",
          chinese: "重复；再说一遍",
          pronunciation: "ri-PEET",
          note: "没听清时请对方再说一次。",
          example: "Please repeat that."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_006",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "听不懂和请对方重复",
      sequence: 1,
      english: "Can you show me an example?",
      chinese: "可以给我看一个示例吗？",
      scenario: "没听清时请对方再说一遍、写下来或示范。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_006-normal.mp3",
      audioSlow: "/audio/en-US/communication_006-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you show me an example?",
        "Can you please show me an example?"
      ],
      recommendedResponses: [
        "Yes, I’ll watch first.",
        "Can you show me one more time?",
        "Okay, I’ll try after you show me."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can you show me an example?",
          chinese: "可以给我看一个示例吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, I’ll watch first.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "show me",
          chinese: "给我看；示范给我",
          pronunciation: "show-mee",
          note: "不会做时请对方演示。",
          example: "Can you show me?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_007",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 7,
      english: "Watch me first, then you can try.",
      chinese: "先看我操作，然后你再试。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Trainer",
      roleZh: "培训人员可能会说",
      audioNormal: "/audio/en-US/communication_007-normal.mp3",
      audioSlow: "/audio/en-US/communication_007-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Trainer",
      speakerRoleZh: "培训人员可能会说",
      variants: [
        "Watch me first, then you can try."
      ],
      recommendedResponses: [
        "Yes, I’ll watch first.",
        "Can you show me one more time?",
        "Okay, I’ll try after you show me."
      ],
      dialogue: [
        {
          speakerRole: "Trainer",
          speakerRoleZh: "培训人员",
          english: "Watch me first, then you can try.",
          chinese: "先看我操作，然后你再试。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Yes, I’ll watch first.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Watch me",
          chinese: "重点词组",
          pronunciation: "Watch me",
          note: "这句话里的工作关键词。",
          example: "Watch me first, then you can try."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_008",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 8,
      english: "Stop and ask if anything is unclear.",
      chinese: "有任何不清楚的地方就停下来问。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_008-normal.mp3",
      audioSlow: "/audio/en-US/communication_008-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Stop and ask if anything is unclear."
      ],
      recommendedResponses: [
        "Can you say that again?",
        "Can you write it down?",
        "Let me confirm first."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Stop and ask if anything is unclear.",
          chinese: "有任何不清楚的地方就停下来问。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can you say that again?",
          chinese: "你可以再说一遍吗？"
        }
      ],
      vocabularyNotes: [
        {
          term: "Stop and",
          chinese: "重点词组",
          pronunciation: "Stop and",
          note: "这句话里的工作关键词。",
          example: "Stop and ask if anything is unclear."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_009",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 9,
      english: "I have not been trained for this task.",
      chinese: "我没有接受过这项工作的培训。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_009-normal.mp3",
      audioSlow: "/audio/en-US/communication_009-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I have not been trained for this task."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I have not been trained for this task.",
          chinese: "我没有接受过这项工作的培训。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "have not",
          chinese: "重点词组",
          pronunciation: "have not",
          note: "这句话里的工作关键词。",
          example: "I have not been trained for this task."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_010",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 10,
      english: "Do not do that task. You are not trained for it.",
      chinese: "不要做那项工作。你还没有受过培训。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_010-normal.mp3",
      audioSlow: "/audio/en-US/communication_010-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Do not do work you are not trained for.",
        "Ask before doing that task."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Do not do that task. You are not trained for it.",
          chinese: "不要做那项工作。你还没有受过培训。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "trained for",
          chinese: "接受过培训",
          pronunciation: "trained for",
          note: "表示已经被教过并允许做某项工作。",
          example: "I am not trained for this machine."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_011",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 1,
      english: "I need help with this task.",
      chinese: "这项工作我需要帮助。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_011-normal.mp3",
      audioSlow: "/audio/en-US/communication_011-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get help with this task.",
        "I have to get help with this task."
      ],
      recommendedResponses: [
        "I want to make sure I understand.",
        "Can you explain it again?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need help with this task.",
          chinese: "这项工作我需要帮助。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need help",
          chinese: "需要帮助",
          pronunciation: "need-help",
          note: "任务不会做或做不过来时求助。",
          example: "I need help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_012",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 12,
      english: "Tell me as soon as you know there will be a delay.",
      chinese: "一发现可能延误就马上告诉我。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_012-normal.mp3",
      audioSlow: "/audio/en-US/communication_012-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Tell me as soon as you know there will be a delay."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Tell me as soon as you know there will be a delay.",
          chinese: "一发现可能延误就马上告诉我。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Tell me",
          chinese: "重点词组",
          pronunciation: "Tell me",
          note: "这句话里的工作关键词。",
          example: "Tell me as soon as you know there will be a delay."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_013",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 13,
      english: "The equipment problem is slowing us down.",
      chinese: "设备问题正在影响工作进度。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_013-normal.mp3",
      audioSlow: "/audio/en-US/communication_013-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The equipment problem is slowing us down."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "The equipment problem is slowing us down.",
          chinese: "设备问题正在影响工作进度。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "equipment problem",
          chinese: "重点词组",
          pronunciation: "equipment problem",
          note: "这句话里的工作关键词。",
          example: "The equipment problem is slowing us down."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_014",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 6,
      english: "Do not keep using damaged equipment.",
      chinese: "不要继续使用损坏的设备。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_014-normal.mp3",
      audioSlow: "/audio/en-US/communication_014-slow.mp3",
      isFree: true,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please don’t keep using damaged equipment."
      ],
      recommendedResponses: [
        "Okay, I’ll stop using it.",
        "I’ll tell you if I see a problem."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Do not keep using damaged equipment.",
          chinese: "不要继续使用损坏的设备。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll stop and tell you.",
          chinese: "好的，我会停下来并告诉你。"
        }
      ],
      vocabularyNotes: [
        {
          term: "damaged equipment",
          chinese: "损坏的设备",
          pronunciation: "DAM-ijd ee-KWIP-ment",
          note: "指坏掉或不安全的机器、工具。",
          example: "Report damaged equipment."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_015",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 15,
      english: "Use only the approved tools for this job.",
      chinese: "这项工作只能使用批准的工具。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_015-normal.mp3",
      audioSlow: "/audio/en-US/communication_015-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Use only the approved tools for this job."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Use only the approved tools for this job.",
          chinese: "这项工作只能使用批准的工具。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Use only",
          chinese: "重点词组",
          pronunciation: "Use only",
          note: "这句话里的工作关键词。",
          example: "Use only the approved tools for this job."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_016",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 7,
      english: "The approved tool is not available.",
      chinese: "批准使用的工具现在没有。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_016-normal.mp3",
      audioSlow: "/audio/en-US/communication_016-slow.mp3",
      isFree: true,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This approved tool is not available.",
        "There is a problem with this."
      ],
      recommendedResponses: [
        "Use the backup tool for now.",
        "Tell me before you continue."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "The approved tool is not available.",
          chinese: "批准使用的工具现在没有。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Use the backup tool for now.",
          chinese: "先用备用工具。"
        }
      ],
      vocabularyNotes: [
        {
          term: "approved tool",
          chinese: "批准使用的工具",
          pronunciation: "uh-PROOVD tool",
          note: "指店里允许使用的正确工具。",
          example: "Use the approved tool."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_017",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 5,
      english: "Please correct this before continuing.",
      chinese: "继续之前请先把这个问题改正。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_017-normal.mp3",
      audioSlow: "/audio/en-US/communication_017-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Fix this before you continue.",
        "Make this right first."
      ],
      recommendedResponses: [
        "Okay, I’ll fix it now.",
        "Can you show me which part is wrong?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Please correct this before continuing.",
          chinese: "继续之前请先把这个问题改正。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay. Which part should I fix?",
          chinese: "好的。我应该改哪一部分？"
        }
      ],
      vocabularyNotes: [
        {
          term: "correct this",
          chinese: "把这个改正确",
          pronunciation: "kuh-REKT this",
          note: "主管要求你先修正错误再继续。",
          example: "Correct this first."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_018",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 2,
      english: "Please redo this part.",
      chinese: "请把这一部分重做。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_018-normal.mp3",
      audioSlow: "/audio/en-US/communication_018-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Do this part again.",
        "Redo this section."
      ],
      recommendedResponses: [
        "Okay, I’ll redo that part.",
        "Can you show me the correct way?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Please redo this part.",
          chinese: "请把这一部分重做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll redo it now.",
          chinese: "好的，我现在重做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "redo",
          chinese: "重做",
          pronunciation: "ree-DOO",
          note: "某部分不合格，需要再做一次。",
          example: "Redo this part."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_019",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 19,
      english: "Please slow down and focus on accuracy.",
      chinese: "请放慢速度，注意准确性。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_019-normal.mp3",
      audioSlow: "/audio/en-US/communication_019-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Can you slow down and focus on accuracy?",
        "Could you please slow down and focus on accuracy?"
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Please slow down and focus on accuracy.",
          chinese: "请放慢速度，注意准确性。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "slow down",
          chinese: "重点词组",
          pronunciation: "slow down",
          note: "这句话里的工作关键词。",
          example: "Please slow down and focus on accuracy."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_020",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 20,
      english: "Stop work if there is an immediate danger.",
      chinese: "如果存在即时危险，立即停止工作。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_020-normal.mp3",
      audioSlow: "/audio/en-US/communication_020-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Stop work if there is an immediate danger."
      ],
      recommendedResponses: [
        "Step aside.",
        "I’ll be careful.",
        "I’ll tell the manager right now."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Stop work if there is an immediate danger.",
          chinese: "如果存在即时危险，立即停止工作。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Step aside.",
          chinese: "让到一边。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Stop work",
          chinese: "重点词组",
          pronunciation: "Stop work",
          note: "这句话里的工作关键词。",
          example: "Stop work if there is an immediate danger."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_021",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 21,
      english: "Report mistakes immediately so we can correct them.",
      chinese: "发现错误要立即报告，以便及时纠正。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_021-normal.mp3",
      audioSlow: "/audio/en-US/communication_021-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Report mistakes immediately so we can correct them."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Report mistakes immediately so we can correct them.",
          chinese: "发现错误要立即报告，以便及时纠正。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Report mistakes",
          chinese: "重点词组",
          pronunciation: "Report mistakes",
          note: "这句话里的工作关键词。",
          example: "Report mistakes immediately so we can correct them."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_022",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 22,
      english: "Follow the attendance policy when reporting an absence.",
      chinese: "请按照公司的出勤政策报告缺勤。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_022-normal.mp3",
      audioSlow: "/audio/en-US/communication_022-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Follow the attendance policy when reporting an absence."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Follow the attendance policy when reporting an absence.",
          chinese: "请按照公司的出勤政策报告缺勤。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Follow attendance",
          chinese: "重点词组",
          pronunciation: "Follow attendance",
          note: "这句话里的工作关键词。",
          example: "Follow the attendance policy when reporting an absence."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_023",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 8,
      english: "You were absent without notifying anyone.",
      chinese: "你缺勤但没有通知任何人。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_023-normal.mp3",
      audioSlow: "/audio/en-US/communication_023-slow.mp3",
      isFree: true,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "You missed your shift and did not call.",
        "No one was notified about your absence."
      ],
      recommendedResponses: [
        "I understand. Who should I notify next time?",
        "Can I explain what happened?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "You were absent without notifying anyone.",
          chinese: "你缺勤了，而且没有通知任何人。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "I’m sorry. Who should I call next time?",
          chinese: "对不起。下次我应该打给谁？"
        }
      ],
      vocabularyNotes: [
        {
          term: "absent",
          chinese: "缺勤；没来上班",
          pronunciation: "AB-sent",
          note: "排班中指该上班但没有到。",
          example: "He was absent today."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_024",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 4,
      english: "Please review the attendance policy.",
      chinese: "请查看公司的出勤政策。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "HR",
      roleZh: "人事人员可能会说",
      audioNormal: "/audio/en-US/communication_024-normal.mp3",
      audioSlow: "/audio/en-US/communication_024-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "HR",
      speakerRoleZh: "人事人员可能会说",
      variants: [
        "Read the attendance rules again.",
        "Go over the attendance policy."
      ],
      recommendedResponses: [
        "I can help with that.",
        "Let me check the attendance policy.",
        "I will confirm it first."
      ],
      dialogue: [
        {
          speakerRole: "HR",
          speakerRoleZh: "人事人员",
          english: "Please review the attendance policy.",
          chinese: "请查看公司的出勤政策。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "attendance policy",
          chinese: "出勤规定",
          pronunciation: "uh-TEN-dens PAH-li-see",
          note: "关于迟到、请假、缺勤的店内规则。",
          example: "Review the policy."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_025",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 25,
      english: "I need to speak with you privately.",
      chinese: "我需要单独和你谈一下。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_025-normal.mp3",
      audioSlow: "/audio/en-US/communication_025-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "I need to get to speak with you privately.",
        "I have to get to speak with you privately."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "I need to speak with you privately.",
          chinese: "我需要单独和你谈一下。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need speak",
          chinese: "重点词组",
          pronunciation: "need speak",
          note: "这句话里的工作关键词。",
          example: "I need to speak with you privately."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_026",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 9,
      english: "This is a documented coaching conversation.",
      chinese: "这是一次有记录的辅导谈话。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_026-normal.mp3",
      audioSlow: "/audio/en-US/communication_026-slow.mp3",
      isFree: true,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "This conversation will be written down.",
        "We are making a record of this coaching talk."
      ],
      recommendedResponses: [
        "I understand. Can I ask a question?",
        "Can I get a copy of this note?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "This is a documented coaching conversation.",
          chinese: "这是一次有记录的辅导谈话。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "I understand. Can I get a copy?",
          chinese: "我明白。我可以拿一份副本吗？"
        }
      ],
      vocabularyNotes: [
        {
          term: "documented coaching",
          chinese: "有记录的辅导谈话",
          pronunciation: "DOK-yoo-men-tid KOH-ching",
          note: "工作表现谈话会被记录下来。",
          example: "This is documented."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_027",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 27,
      english: "These are the expectations for the next two weeks.",
      chinese: "这是未来两周的工作要求。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_027-normal.mp3",
      audioSlow: "/audio/en-US/communication_027-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "These are the expectations for the next two weeks."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "These are the expectations for the next two weeks.",
          chinese: "这是未来两周的工作要求。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "These expectations",
          chinese: "重点词组",
          pronunciation: "These expectations",
          note: "这句话里的工作关键词。",
          example: "These are the expectations for the next two weeks."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_028",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 28,
      english: "Can I have a copy of the written expectations?",
      chinese: "我可以拿一份书面要求吗？",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_028-normal.mp3",
      audioSlow: "/audio/en-US/communication_028-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I have a copy of the written expectations, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can I have a copy of the written expectations?",
          chinese: "我可以拿一份书面要求吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "have copy",
          chinese: "重点词组",
          pronunciation: "have copy",
          note: "这句话里的工作关键词。",
          example: "Can I have a copy of the written expectations?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_029",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 29,
      english: "I would like time to review this document.",
      chinese: "我想花一点时间看一下这份文件。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_029-normal.mp3",
      audioSlow: "/audio/en-US/communication_029-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I would like time to review this document."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I would like time to review this document.",
          chinese: "我想花一点时间看一下这份文件。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "like time",
          chinese: "重点词组",
          pronunciation: "like time",
          note: "这句话里的工作关键词。",
          example: "I would like time to review this document."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_030",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 30,
      english: "The next worker has not arrived yet.",
      chinese: "接班员工还没有到。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_030-normal.mp3",
      audioSlow: "/audio/en-US/communication_030-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The next worker has not arrived yet."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "The next worker has not arrived yet.",
          chinese: "接班员工还没有到。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "next worker",
          chinese: "重点词组",
          pronunciation: "next worker",
          note: "这句话里的工作关键词。",
          example: "The next worker has not arrived yet."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_031",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "听不懂和请对方重复",
      sequence: 31,
      english: "Can you check my work before I leave?",
      chinese: "我离开前可以帮我检查一下工作吗？",
      scenario: "没听清时请对方再说一遍、写下来或示范。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_031-normal.mp3",
      audioSlow: "/audio/en-US/communication_031-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you check my work before I leave?",
        "Can you please check my work before I leave?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can you check my work before I leave?",
          chinese: "我离开前可以帮我检查一下工作吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "check my",
          chinese: "重点词组",
          pronunciation: "check my",
          note: "这句话里的工作关键词。",
          example: "Can you check my work before I leave?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_032",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 32,
      english: "Thank you for reporting the problem early.",
      chinese: "谢谢你及时报告这个问题。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_032-normal.mp3",
      audioSlow: "/audio/en-US/communication_032-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Thank you for reporting the problem early."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Thank you for reporting the problem early.",
          chinese: "谢谢你及时报告这个问题。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Thank for",
          chinese: "重点词组",
          pronunciation: "Thank for",
          note: "这句话里的工作关键词。",
          example: "Thank you for reporting the problem early."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_033",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 10,
      english: "Good job following the procedure.",
      chinese: "你按照流程完成得很好。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_033-normal.mp3",
      audioSlow: "/audio/en-US/communication_033-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "You followed the steps well.",
        "Nice work using the correct procedure."
      ],
      recommendedResponses: [
        "Thank you. I’ll keep doing it that way.",
        "Thanks. I’ll follow the same steps next time."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Good job following the procedure.",
          chinese: "你按流程做得很好。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Thank you. I’ll keep doing it that way.",
          chinese: "谢谢。我会继续这样做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "procedure",
          chinese: "流程；规定步骤",
          pronunciation: "proh-SEE-jer",
          note: "餐厅工作中必须按步骤做的流程。",
          example: "Follow the procedure."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_034",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 34,
      english: "Is there anything I can improve?",
      chinese: "我还有什么可以改进的吗？",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_034-normal.mp3",
      audioSlow: "/audio/en-US/communication_034-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Is this there anything I can improve?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Is there anything I can improve?",
          chinese: "我还有什么可以改进的吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "there anything",
          chinese: "重点词组",
          pronunciation: "there anything",
          note: "这句话里的工作关键词。",
          example: "Is there anything I can improve?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_035",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "听不懂和请对方重复",
      sequence: 7,
      english: "Can you repeat the last part?",
      chinese: "你可以重复最后一部分吗？",
      scenario: "没听清时请对方再说一遍、写下来或示范。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_035-normal.mp3",
      audioSlow: "/audio/en-US/communication_035-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you repeat the last part?",
        "Can you please repeat the last part?"
      ],
      recommendedResponses: [
        "Sure. The last part was about cleaning the table.",
        "Yes. I said to label it first."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can you repeat the last part?",
          chinese: "你可以重复最后一部分吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Sure. Label it before you store it.",
          chinese: "可以。存放前先贴标签。"
        }
      ],
      vocabularyNotes: [
        {
          term: "repeat",
          chinese: "重复；再说一遍",
          pronunciation: "ri-PEET",
          note: "没听清时请对方再说一次。",
          example: "Please repeat that."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_036",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "听不懂和请对方重复",
      sequence: 36,
      english: "Do you mean this tray or that tray?",
      chinese: "你是说这个托盘还是那个托盘？",
      scenario: "没听清时请对方再说一遍、写下来或示范。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_036-normal.mp3",
      audioSlow: "/audio/en-US/communication_036-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_037",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 37,
      english: "Should I ask the manager first?",
      chinese: "我应该先问经理吗？",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_037-normal.mp3",
      audioSlow: "/audio/en-US/communication_037-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_038",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_coworker_help",
      scenarioTitle: "同事协作和求助",
      sequence: 38,
      english: "I can help after I finish this order.",
      chinese: "我做完这个订单后可以帮忙。",
      scenario: "同事请你帮忙，但你手上还有任务。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_038-normal.mp3",
      audioSlow: "/audio/en-US/communication_038-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_039",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 39,
      english: "I am new here, so I may need you to show me once.",
      chinese: "我是新来的，可能需要你示范一次。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_039-normal.mp3",
      audioSlow: "/audio/en-US/communication_039-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_040",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_general",
      scenarioTitle: "听不清、没理解、找主管、和同事配合。",
      sequence: 40,
      english: "Can you write it on the ticket?",
      chinese: "你可以写在订单票上吗？",
      scenario: "口头要求容易忘，需要写下来。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_040-normal.mp3",
      audioSlow: "/audio/en-US/communication_040-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_041",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_general",
      scenarioTitle: "听不清、没理解、找主管、和同事配合。",
      sequence: 41,
      english: "Which one should I use?",
      chinese: "我应该用哪一个？",
      scenario: "工具、容器或清洁剂有多个选择。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_041-normal.mp3",
      audioSlow: "/audio/en-US/communication_041-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_042",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "听不懂和请对方重复",
      sequence: 6,
      english: "Is this the right container?",
      chinese: "这是正确的容器吗？",
      scenario: "没听清时请对方再说一遍、写下来或示范。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_042-normal.mp3",
      audioSlow: "/audio/en-US/communication_042-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "Is this the correct container?",
        "Should I use this container?"
      ],
      recommendedResponses: [
        "Yes, use that one.",
        "No, use the clear one.",
        "Let me check with the supervisor."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "right container",
          chinese: "正确的容器",
          pronunciation: "rait kuhn-TAY-ner",
          note: "right 在这里是“正确的”，不是方向右边。",
          example: "Use the right container."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_043",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_general",
      scenarioTitle: "听不清、没理解、找主管、和同事配合。",
      sequence: 43,
      english: "Do you want me in the front or in the back?",
      chinese: "你要我在前面还是后面？",
      scenario: "不知道被安排去前台还是后厨。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_043-normal.mp3",
      audioSlow: "/audio/en-US/communication_043-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_044",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "听不懂和请对方重复",
      sequence: 8,
      english: "I heard “fries.” Is that correct?",
      chinese: "我听到的是“薯条”，对吗？",
      scenario: "没听清时请对方再说一遍、写下来或示范。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_044-normal.mp3",
      audioSlow: "/audio/en-US/communication_044-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [
        "Did you say fries?",
        "I heard fries. Is that right?"
      ],
      recommendedResponses: [
        "Yes, fries.",
        "No, I said rice.",
        "Check the ticket again."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "I heard",
          chinese: "我听到的是",
          pronunciation: "ai hurd",
          note: "用于确认自己刚才听到的内容。",
          example: "I heard chicken."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_045",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_general",
      scenarioTitle: "听不清、没理解、找主管、和同事配合。",
      sequence: 45,
      english: "Can you point to it?",
      chinese: "你可以指给我看吗？",
      scenario: "不知道对方说的是哪个物品或位置。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_045-normal.mp3",
      audioSlow: "/audio/en-US/communication_045-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_046",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_task_priority",
      scenarioTitle: "任务顺序和优先级",
      sequence: 46,
      english: "Is this urgent?",
      chinese: "这个急吗？",
      scenario: "同时有多个任务，需要判断优先级。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_046-normal.mp3",
      audioSlow: "/audio/en-US/communication_046-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_047",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "听不懂和请对方重复",
      sequence: 10,
      english: "Should I stop what I am doing?",
      chinese: "我要先停下手上的事吗？",
      scenario: "没听清时请对方再说一遍、写下来或示范。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_047-normal.mp3",
      audioSlow: "/audio/en-US/communication_047-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [
        "Should I stop this first?",
        "Do you want me to stop now?"
      ],
      recommendedResponses: [
        "Yes, stop for now.",
        "No, finish that first.",
        "Finish this, then switch."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "stop what I am doing",
          chinese: "停下手上的事",
          pronunciation: "stop wuht ai am DOO-ing",
          note: "用于确认是否要暂停当前任务。",
          example: "Stop what you are doing."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_048",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "听不懂和请对方重复",
      sequence: 4,
      english: "I can do that, but I need gloves first.",
      chinese: "我可以做，但我需要先戴手套。",
      scenario: "没听清时请对方再说一遍、写下来或示范。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_048-normal.mp3",
      audioSlow: "/audio/en-US/communication_048-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "I can do it, but I need gloves.",
        "I need gloves before I do that."
      ],
      recommendedResponses: [
        "Get gloves first.",
        "They are by the sink.",
        "Good. Put on gloves first."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "gloves first",
          chinese: "先戴手套",
          pronunciation: "gluvz furst",
          note: "first 表示先做这件事。",
          example: "Wash hands first."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_049",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "听不懂和请对方重复",
      sequence: 2,
      english: "Can you say the order number again?",
      chinese: "你可以再说一次订单号吗？",
      scenario: "没听清时请对方再说一遍、写下来或示范。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_049-normal.mp3",
      audioSlow: "/audio/en-US/communication_049-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "Can you repeat the order number?",
        "What is the order number again?"
      ],
      recommendedResponses: [
        "It is order 24.",
        "Sure, it is 138.",
        "Check the screen for the number."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "order number",
          chinese: "订单号",
          pronunciation: "OR-der NUM-ber",
          note: "外卖、前台和厨房常用来核对订单。",
          example: "What is the order number?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "communication_050",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "听不懂和请对方重复",
      sequence: 50,
      english: "Do you want this now or later?",
      chinese: "你要我现在做还是晚点做？",
      scenario: "没听清时请对方再说一遍、写下来或示范。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_050-normal.mp3",
      audioSlow: "/audio/en-US/communication_050-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_001",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_pay_overtime",
      scenarioTitle: "打卡、工资和加班",
      sequence: 1,
      english: "Let me confirm the quantity, pickup time, and payment requirements with you.",
      chinese: "我和您确认一下数量、取餐时间和付款要求。",
      scenario: "确认打卡、工时、加班和工资到账。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/shift_pay_001-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_001-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Let me confirm the order details with you."
      ],
      recommendedResponses: [
        "I will confirm my shift.",
        "I will tell you before I leave.",
        "I will ask for approval first."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Let me confirm the quantity, pickup time, and payment requirements with you.",
          chinese: "我和您确认一下数量、取餐时间和付款要求。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Sure. The pickup time is six o’clock.",
          chinese: "好的。取餐时间是六点。"
        }
      ],
      vocabularyNotes: [
        {
          term: "quantity",
          chinese: "数量",
          pronunciation: "KWON-ti-tee",
          note: "点餐、备菜和盘点时确认多少个。",
          example: "Check the quantity."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_002",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_general",
      scenarioTitle: "班次、打卡、工资、请假、交接班。",
      sequence: 2,
      english: "Finish this before your break.",
      chinese: "休息前把这项工作完成。",
      scenario: "主管根据工作进度安排员工完成一项短任务后休息。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/shift_pay_002-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_002-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "workplace",
        "supervisor",
        "communication",
        "employee"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Finish this before your break."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Finish this before your break.",
          chinese: "休息前把这项工作完成。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Finish before",
          chinese: "重点词组",
          pronunciation: "Finish before",
          note: "这句话里的工作关键词。",
          example: "Finish this before your break."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_003",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_handoff",
      scenarioTitle: "交接班",
      sequence: 3,
      english: "Please notify me before leaving your work area.",
      chinese: "离开工作区域前请先通知我。",
      scenario: "把没做完的工作交代给下一班。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/shift_pay_003-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_003-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "shift_pay",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Tell me before you leave your station.",
        "Let me know before you step away."
      ],
      recommendedResponses: [
        "I will confirm my shift.",
        "I will tell you before I leave.",
        "I will ask for approval first."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Please notify me before leaving your work area.",
          chinese: "离开工作区域前请先通知我。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I will tell you before I leave.",
          chinese: "好的，我离开前会先告诉你。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Thank you. I need to know where you are.",
          chinese: "谢谢。我需要知道你在哪里。"
        }
      ],
      vocabularyNotes: [
        {
          term: "notify",
          chinese: "通知",
          pronunciation: "NOH-ti-fy",
          note: "迟到、请假或离岗前告诉主管。",
          example: "Notify the manager."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_004",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 4,
      english: "I am going to be late for my shift.",
      chinese: "我上班会迟到。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_004-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_004-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I am going to be late for my shift."
      ],
      recommendedResponses: [
        "Thanks for checking.",
        "Can you help me fix it?",
        "Who should I talk to?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I am going to be late for my shift.",
          chinese: "我上班会迟到。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Thanks for checking.",
          chinese: "谢谢你帮我查。"
        }
      ],
      vocabularyNotes: [
        {
          term: "am going",
          chinese: "重点词组",
          pronunciation: "am going",
          note: "这句话里的工作关键词。",
          example: "I am going to be late for my shift."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_005",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_time_off",
      scenarioTitle: "请假和病假",
      sequence: 1,
      english: "I am sick and cannot come to work today.",
      chinese: "我生病了，今天不能来上班。",
      scenario: "身体不舒服或有事时，用简单英文请假。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_005-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_005-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I am sick and cannot work today."
      ],
      recommendedResponses: [
        "I will check with the manager.",
        "Please write the time down for me."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "I am sick and cannot come to work today.",
          chinese: "我生病了，今天不能来上班。"
        },
        {
          speakerRole: "Manager",
          speakerRoleZh: "经理可能会说",
          english: "Sure. What is the problem?",
          chinese: "可以。有什么问题？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "This shift looks wrong.",
          chinese: "这个班次看起来不对。"
        },
        {
          speakerRole: "Manager",
          speakerRoleZh: "经理可能会说",
          english: "Let me check it now.",
          chinese: "我现在查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "sick",
          chinese: "生病",
          pronunciation: "sik",
          note: "请假或说明不能上班时使用。",
          example: "I am sick today."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_006",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 8,
      english: "My schedule shows the wrong shift.",
      chinese: "我的排班显示错了。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_006-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_006-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "My shift looks wrong on the schedule."
      ],
      recommendedResponses: [
        "I will check the schedule.",
        "Please note the schedule.",
        "I will ask the manager about schedule."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "My schedule shows the wrong shift.",
          chinese: "我的排班显示错了。"
        },
        {
          speakerRole: "Manager",
          speakerRoleZh: "经理可能会说",
          english: "Sure. What is the problem?",
          chinese: "可以。有什么问题？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "This shift looks wrong.",
          chinese: "这个班次看起来不对。"
        },
        {
          speakerRole: "Manager",
          speakerRoleZh: "经理可能会说",
          english: "Let me check it now.",
          chinese: "我现在查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "schedule",
          chinese: "排班表；时间表",
          pronunciation: "SKE-jool",
          note: "餐厅安排你上班的日期和时间。",
          example: "Check your schedule."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_007",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 9,
      english: "Do not swap shifts without approval.",
      chinese: "未经批准不要私自换班。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/shift_pay_007-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_007-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please don’t swap shifts without approval."
      ],
      recommendedResponses: [
        "I will confirm my shift.",
        "I will tell you before I leave.",
        "I will ask for approval first."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Do not swap shifts without approval.",
          chinese: "未经批准不要私自换班。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Thanks for checking.",
          chinese: "谢谢你帮我查。"
        }
      ],
      vocabularyNotes: [
        {
          term: "swap shifts",
          chinese: "换班",
          pronunciation: "swop-shifts",
          note: "和同事交换上班时间。",
          example: "Can we swap shifts?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_008",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 8,
      english: "Can I switch shifts with my coworker?",
      chinese: "我可以和同事换班吗？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_008-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_008-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I switch shifts with my coworker, please?"
      ],
      recommendedResponses: [
        "Thanks for checking.",
        "Can you help me fix it?",
        "Who should I talk to?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can I switch shifts with my coworker?",
          chinese: "我可以和同事换班吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Thanks for checking.",
          chinese: "谢谢你帮我查。"
        }
      ],
      vocabularyNotes: [
        {
          term: "switch shifts",
          chinese: "重点词组",
          pronunciation: "switch shifts",
          note: "这句话里的工作关键词。",
          example: "Can I switch shifts with my coworker?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_009",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_handoff",
      scenarioTitle: "交接班",
      sequence: 2,
      english: "Please complete the handoff before you leave.",
      chinese: "离开前请完成交接。",
      scenario: "把没做完的工作交代给下一班。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/shift_pay_009-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_009-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Finish the handoff before leaving.",
        "Complete the shift handoff first."
      ],
      recommendedResponses: [
        "I will confirm my shift.",
        "I will tell you before I leave.",
        "I will ask for approval first."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Please complete the handoff before you leave.",
          chinese: "离开前请完成交接。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "complete handoff",
          chinese: "排班工资表达",
          pronunciation: "SKE-jool pay",
          note: "用于请假、换班、打卡或工资问题。 这里重点看 “complete handoff” 在句子里的用法。",
          example: "Check the schedule."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_010",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_handoff",
      scenarioTitle: "交接班",
      sequence: 1,
      english: "This task is not finished yet.",
      chinese: "这项工作还没有完成。",
      scenario: "把没做完的工作交代给下一班。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_010-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_010-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This job is not done yet.",
        "This task still needs work."
      ],
      recommendedResponses: [
        "I will check with the manager.",
        "Please write the time down for me."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "This task is not finished yet.",
          chinese: "这项工作还没有完成。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "task",
          chinese: "任务",
          pronunciation: "task-word",
          note: "主管安排给你的工作。",
          example: "Finish the task."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_011",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 11,
      english: "Record the issue in the shift log.",
      chinese: "把这个问题记录在班次日志里。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/shift_pay_011-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_011-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Record the issue in the shift log."
      ],
      recommendedResponses: [
        "Thanks for checking.",
        "Can you help me fix it?",
        "Who should I talk to?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Record the issue in the shift log.",
          chinese: "把这个问题记录在班次日志里。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Thanks for checking.",
          chinese: "谢谢你帮我查。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Record issue",
          chinese: "重点词组",
          pronunciation: "Record issue",
          note: "这句话里的工作关键词。",
          example: "Record the issue in the shift log."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_012",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 1,
      english: "Who is closing tonight?",
      chinese: "今晚谁关店？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_012-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_012-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Who is closing tonight, please?"
      ],
      recommendedResponses: [
        "I will check the closing.",
        "Please note the closing.",
        "I will ask the manager about closing."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Who is closing tonight?",
          chinese: "今晚谁关店？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "closing",
          chinese: "关店",
          pronunciation: "KLOH-zing",
          note: "营业结束后的清洁和检查流程。",
          example: "Finish closing."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_013",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 2,
      english: "Who is opening tomorrow?",
      chinese: "明天谁开店？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_013-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_013-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Who is opening tomorrow, please?"
      ],
      recommendedResponses: [
        "I will check with the manager.",
        "Please write the time down for me."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Who is opening tomorrow?",
          chinese: "明天谁开店？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "opening tomorrow",
          chinese: "排班工资表达",
          pronunciation: "SKE-jool pay",
          note: "用于请假、换班、打卡或工资问题。 这里重点看 “opening tomorrow” 在句子里的用法。",
          example: "Check the schedule."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_014",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 10,
      english: "Can I switch shifts with Kevin?",
      chinese: "我可以和 Kevin 换班吗？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_014-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_014-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I switch shifts with Kevin, please?"
      ],
      recommendedResponses: [
        "I will check with the manager.",
        "Please write the time down for me."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can I switch shifts with Kevin?",
          chinese: "我可以和 Kevin 换班吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Thanks for checking.",
          chinese: "谢谢你帮我查。"
        }
      ],
      vocabularyNotes: [
        {
          term: "shift",
          chinese: "班次",
          pronunciation: "shift-word",
          note: "你被安排上班的时间段。",
          example: "Check your shift."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_015",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 15,
      english: "I can stay thirty minutes longer.",
      chinese: "我可以多留三十分钟。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_015-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_015-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I can stay thirty minutes longer."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I can stay thirty minutes longer.",
          chinese: "我可以多留三十分钟。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "stay thirty",
          chinese: "重点词组",
          pronunciation: "stay thirty",
          note: "这句话里的工作关键词。",
          example: "I can stay thirty minutes longer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_016",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 16,
      english: "I need to leave on time today.",
      chinese: "我今天需要准时下班。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_016-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_016-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get to leave on time today.",
        "I have to get to leave on time today."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need to leave on time today.",
          chinese: "我今天需要准时下班。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need leave",
          chinese: "重点词组",
          pronunciation: "need leave",
          note: "这句话里的工作关键词。",
          example: "I need to leave on time today."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_017",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 3,
      english: "Was my break recorded?",
      chinese: "我的休息时间记录了吗？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_017-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_017-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Was my break recorded, please?"
      ],
      recommendedResponses: [
        "I will check the break recorded.",
        "Please note the break recorded.",
        "I will ask the manager about break recorded."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Was my break recorded?",
          chinese: "我的休息时间记录了吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "break recorded",
          chinese: "排班工资表达",
          pronunciation: "SKE-jool pay",
          note: "用于请假、换班、打卡或工资问题。 这里重点看 “break recorded” 在句子里的用法。",
          example: "Check the schedule."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_018",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 18,
      english: "I worked from ten to four.",
      chinese: "我是从十点工作到四点。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_018-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_018-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I worked from ten to four."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I worked from ten to four.",
          chinese: "我是从十点工作到四点。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "worked from",
          chinese: "重点词组",
          pronunciation: "worked from",
          note: "这句话里的工作关键词。",
          example: "I worked from ten to four."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_019",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 19,
      english: "My direct deposit has not arrived yet.",
      chinese: "我的工资直接存款还没到账。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_019-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_019-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "My direct deposit has not arrived yet."
      ],
      recommendedResponses: [
        "Thanks for checking.",
        "Can you help me fix it?",
        "Who should I talk to?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "My direct deposit has not arrived yet.",
          chinese: "我的工资直接存款还没到账。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Thanks for checking.",
          chinese: "谢谢你帮我查。"
        }
      ],
      vocabularyNotes: [
        {
          term: "My direct",
          chinese: "重点词组",
          pronunciation: "My direct",
          note: "这句话里的工作关键词。",
          example: "My direct deposit has not arrived yet."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_020",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 20,
      english: "Can you check my time sheet?",
      chinese: "你可以帮我查一下工时表吗？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_020-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_020-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you check my time sheet?",
        "Can you please check my time sheet?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can you check my time sheet?",
          chinese: "你可以帮我查一下工时表吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "check my",
          chinese: "重点词组",
          pronunciation: "check my",
          note: "这句话里的工作关键词。",
          example: "Can you check my time sheet?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_021",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 21,
      english: "I need to call in sick today.",
      chinese: "我今天需要请病假。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_021-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_021-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get to call in sick today.",
        "I have to get to call in sick today."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need to call in sick today.",
          chinese: "我今天需要请病假。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need call",
          chinese: "重点词组",
          pronunciation: "need call",
          note: "这句话里的工作关键词。",
          example: "I need to call in sick today."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_022",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 22,
      english: "Can I take my break now?",
      chinese: "我现在可以休息吗？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_022-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_022-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I take my break now, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can I take my break now?",
          chinese: "我现在可以休息吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "take my",
          chinese: "重点词组",
          pronunciation: "take my",
          note: "这句话里的工作关键词。",
          example: "Can I take my break now?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_023",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 23,
      english: "What time should I come in tomorrow?",
      chinese: "我明天几点来上班？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_023-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_023-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "What exactly time should I come in tomorrow?",
        "What time should I come in tomorrow, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "What time should I come in tomorrow?",
          chinese: "我明天几点来上班？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "What time",
          chinese: "重点词组",
          pronunciation: "What time",
          note: "这句话里的工作关键词。",
          example: "What time should I come in tomorrow?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_024",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 24,
      english: "Can you send me the new schedule?",
      chinese: "你可以把新排班发给我吗？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_024-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_024-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you send me the new schedule?",
        "Can you please send me the new schedule?"
      ],
      recommendedResponses: [
        "Thanks for checking.",
        "Can you help me fix it?",
        "Who should I talk to?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can you send me the new schedule?",
          chinese: "你可以把新排班发给我吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Thanks for checking.",
          chinese: "谢谢你帮我查。"
        }
      ],
      vocabularyNotes: [
        {
          term: "send me",
          chinese: "重点词组",
          pronunciation: "send me",
          note: "这句话里的工作关键词。",
          example: "Can you send me the new schedule?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_025",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 25,
      english: "I think my overtime is missing.",
      chinese: "我觉得我的加班时间少算了。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_025-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_025-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I think my overtime is missing."
      ],
      recommendedResponses: [
        "Thanks for checking.",
        "Can you help me fix it?",
        "Who should I talk to?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I think my overtime is missing.",
          chinese: "我觉得我的加班时间少算了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Thanks for checking.",
          chinese: "谢谢你帮我查。"
        }
      ],
      vocabularyNotes: [
        {
          term: "think my",
          chinese: "重点词组",
          pronunciation: "think my",
          note: "这句话里的工作关键词。",
          example: "I think my overtime is missing."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_026",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 26,
      english: "Who should I give the handoff note to?",
      chinese: "我应该把交接说明给谁？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_026-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_026-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Who should I give the handoff note to, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Who should I give the handoff note to?",
          chinese: "我应该把交接说明给谁？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Who should",
          chinese: "重点词组",
          pronunciation: "Who should",
          note: "这句话里的工作关键词。",
          example: "Who should I give the handoff note to?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_027",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 27,
      english: "The next shift is not here yet.",
      chinese: "下一班的人还没来。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_027-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_027-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The next shift is not here yet."
      ],
      recommendedResponses: [
        "Thanks for checking.",
        "Can you help me fix it?",
        "Who should I talk to?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "The next shift is not here yet.",
          chinese: "下一班的人还没来。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Thanks for checking.",
          chinese: "谢谢你帮我查。"
        }
      ],
      vocabularyNotes: [
        {
          term: "next shift",
          chinese: "重点词组",
          pronunciation: "next shift",
          note: "这句话里的工作关键词。",
          example: "The next shift is not here yet."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_028",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 28,
      english: "I can cover the first hour.",
      chinese: "我可以先顶第一个小时。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_028-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_028-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I can cover the first hour."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I can cover the first hour.",
          chinese: "我可以先顶第一个小时。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "cover first",
          chinese: "重点词组",
          pronunciation: "cover first",
          note: "这句话里的工作关键词。",
          example: "I can cover the first hour."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_029",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 5,
      english: "I cannot work that day.",
      chinese: "那天我不能上班。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_029-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_029-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I am not available that day."
      ],
      recommendedResponses: [
        "I will check the cannot work.",
        "Please note the cannot work.",
        "I will ask the manager about cannot work."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I cannot work that day.",
          chinese: "那天我不能上班。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "cannot work",
          chinese: "排班工资表达",
          pronunciation: "SKE-jool pay",
          note: "用于请假、换班、打卡或工资问题。 这里重点看 “cannot work” 在句子里的用法。",
          example: "Check the schedule."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_030",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 6,
      english: "Can I update my availability?",
      chinese: "我可以更新我的可上班时间吗？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_030-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_030-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I update my availability, please?"
      ],
      recommendedResponses: [
        "I will check the update availability.",
        "Please note the update availability.",
        "I will ask the manager about update availability."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can I update my availability?",
          chinese: "我可以更新我的可上班时间吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "I’ll wash my hands now.",
          chinese: "我现在去洗手。"
        }
      ],
      vocabularyNotes: [
        {
          term: "update availability",
          chinese: "排班工资表达",
          pronunciation: "SKE-jool pay",
          note: "用于请假、换班、打卡或工资问题。 这里重点看 “update availability” 在句子里的用法。",
          example: "Check the schedule."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_031",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 31,
      english: "I need this day off for an appointment.",
      chinese: "我这天需要请假去预约。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_031-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_031-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get this day off for an appointment.",
        "I have to get this day off for an appointment."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need this day off for an appointment.",
          chinese: "我这天需要请假去预约。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need day",
          chinese: "重点词组",
          pronunciation: "need day",
          note: "这句话里的工作关键词。",
          example: "I need this day off for an appointment."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_032",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 32,
      english: "Can I come in earlier tomorrow?",
      chinese: "我明天可以早点来上班吗？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_032-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_032-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I come in earlier tomorrow, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can I come in earlier tomorrow?",
          chinese: "我明天可以早点来上班吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "come in",
          chinese: "重点词组",
          pronunciation: "come in",
          note: "这句话里的工作关键词。",
          example: "Can I come in earlier tomorrow?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_033",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 33,
      english: "Can I leave early if it is slow?",
      chinese: "如果不忙，我可以早点走吗？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_033-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_033-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I leave early if it is slow, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can I leave early if it is slow?",
          chinese: "如果不忙，我可以早点走吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "leave early",
          chinese: "重点词组",
          pronunciation: "leave early",
          note: "这句话里的工作关键词。",
          example: "Can I leave early if it is slow?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_034",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 4,
      english: "Who approves time-off requests?",
      chinese: "谁批准请假申请？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_034-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_034-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Who approves time-off requests, please?"
      ],
      recommendedResponses: [
        "I will check the approves time-off.",
        "Please note the approves time-off.",
        "I will ask the manager about approves time-off."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Who approves time-off requests?",
          chinese: "谁批准请假申请？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "approves time-off",
          chinese: "排班工资表达",
          pronunciation: "SKE-jool pay",
          note: "用于请假、换班、打卡或工资问题。 这里重点看 “approves time-off” 在句子里的用法。",
          example: "Check the schedule."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_035",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 35,
      english: "I submitted my availability last week.",
      chinese: "我上周已经提交了可上班时间。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_035-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_035-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I submitted my availability last week."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I submitted my availability last week.",
          chinese: "我上周已经提交了可上班时间。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "submitted my",
          chinese: "重点词组",
          pronunciation: "submitted my",
          note: "这句话里的工作关键词。",
          example: "I submitted my availability last week."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_036",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 36,
      english: "I am scheduled for the wrong day.",
      chinese: "我被排到了错误的日期。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_036-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_036-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_037",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 37,
      english: "Can you fix my clock-in time?",
      chinese: "你可以帮我修正上班打卡时间吗？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_037-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_037-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_038",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 38,
      english: "Can you fix my clock-out time?",
      chinese: "你可以帮我修正下班打卡时间吗？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_038-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_038-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_039",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 7,
      english: "I covered a shift yesterday.",
      chinese: "我昨天帮别人顶班了。",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_039-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_039-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "I worked someone else’s shift yesterday.",
        "I picked up a shift yesterday."
      ],
      recommendedResponses: [
        "I will check the covered a shift.",
        "Please note the covered a shift.",
        "I will ask the manager about covered a shift."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "covered a shift",
          chinese: "顶班",
          pronunciation: "KUH-verd uh shift",
          note: "表示替别人上了一个班。",
          example: "I covered her shift."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "shift_pay_040",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班、迟到和换班",
      sequence: 40,
      english: "Should I write this in the handoff book?",
      chinese: "我要把这个写在交接本里吗？",
      scenario: "查看排班、说明迟到、确认换班和下一次上班时间。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/shift_pay_040-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_040-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_001",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 3,
      english: "What comes with the combo?",
      chinese: "套餐里包括什么？",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/food_safety_001-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_001-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "What is included in the combo?",
        "What does the combo include?"
      ],
      recommendedResponses: [
        "It comes with fries and a drink.",
        "It includes one side and one drink.",
        "You can upgrade the drink if you want."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "What comes with the combo?",
          chinese: "套餐里包括什么？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "It comes with fries and a drink.",
          chinese: "包括薯条和一杯饮料。"
        },
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "Okay, I’ll take the combo.",
          chinese: "好的，我要套餐。"
        }
      ],
      vocabularyNotes: [
        {
          term: "combo",
          chinese: "套餐",
          pronunciation: "KOM-boh",
          note: "餐厅里指主食、配菜和饮料组合。",
          example: "I want a combo."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_002",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 2,
      english: "Sorry, could you repeat that a little more slowly?",
      chinese: "不好意思，您可以说慢一点再重复一遍吗？",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/food_safety_002-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_002-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Sorry, could you repeat that a little more slowly, please?"
      ],
      recommendedResponses: [
        "Can you say that again?",
        "Can you write it down?",
        "Let me confirm first."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Sorry, could you repeat that a little more slowly?",
          chinese: "不好意思，您可以说慢一点再重复一遍吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Can you say that again?",
          chinese: "你可以再说一遍吗？"
        }
      ],
      vocabularyNotes: [
        {
          term: "Sorry, repeat",
          chinese: "重点词组",
          pronunciation: "Sorry, repeat",
          note: "这句话里的工作关键词。",
          example: "Sorry, could you repeat that a little more slowly?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_003",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 6,
      english: "Can I get that without onions?",
      chinese: "这个可以不要洋葱吗？",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/food_safety_003-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_003-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Can you make that without onions?",
        "No onions on that, please."
      ],
      recommendedResponses: [
        "Yes, we can make it without onions.",
        "Sure, I’ll put no onions on the order.",
        "Let me check if the sauce has onions."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "Can I get that without onions?",
          chinese: "这个可以不要洋葱吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "Yes, I’ll mark it no onions.",
          chinese: "可以，我会标注不要洋葱。"
        },
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "Thank you.",
          chinese: "谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "without onions",
          chinese: "不要洋葱；不加洋葱",
          pronunciation: "with-OUT UN-yunz",
          note: "顾客要求某个食材不要放进订单里。",
          example: "Can I get it without cheese?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_004",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 4,
      english: "I'm sorry, we're sold out of that today.",
      chinese: "很抱歉，这款今天已经卖完了。",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/food_safety_004-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_004-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "I'm sorry, we're sold out of that today."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "I'm sorry, we're sold out of that today.",
          chinese: "很抱歉，这款今天已经卖完了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "I'm sorry,",
          chinese: "重点词组",
          pronunciation: "I'm sorry,",
          note: "这句话里的工作关键词。",
          example: "I'm sorry, we're sold out of that today."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_005",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 4,
      english: "What do you recommend instead?",
      chinese: "那您建议我换成什么？",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/food_safety_005-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_005-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "What would you suggest instead?",
        "What is a good replacement?"
      ],
      recommendedResponses: [
        "I recommend the mild sauce.",
        "You can try lemon pepper.",
        "If you want less spicy, try honey garlic."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "What do you recommend instead?",
          chinese: "那您建议我换成什么？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "I recommend lemon pepper. It is not too spicy.",
          chinese: "我推荐柠檬胡椒味，不太辣。"
        }
      ],
      vocabularyNotes: [
        {
          term: "recommend instead",
          chinese: "建议换成什么",
          pronunciation: "rek-uh-MEND in-STED",
          note: "顾客不确定选择时，请员工推荐替代选项。",
          example: "What do you recommend?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_006",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 7,
      english: "What milder flavors do you have?",
      chinese: "你们有什么不太辣的口味？",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/food_safety_006-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_006-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Which flavors are less spicy?",
        "Do you have any mild flavors?"
      ],
      recommendedResponses: [
        "Honey garlic is mild.",
        "Lemon pepper is not very spicy.",
        "Barbecue is a good mild option."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "What milder flavors do you have?",
          chinese: "你们有什么不太辣的口味？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "Honey garlic and lemon pepper are milder.",
          chinese: "蜂蜜蒜味和柠檬胡椒味比较不辣。"
        }
      ],
      vocabularyNotes: [
        {
          term: "milder flavors",
          chinese: "更温和、不太辣的口味",
          pronunciation: "MYLD-er FLAY-verz",
          note: "顾客想要辣度低一点的口味时使用。",
          example: "This flavor is milder."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_007",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 1,
      english: "What's the name on the order?",
      chinese: "订单上的姓名是什么？",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/food_safety_007-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_007-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "What name is the order under?",
        "Can I have the name for the order?"
      ],
      recommendedResponses: [
        "The name is Kevin.",
        "It is under Maria.",
        "The order name is Chen."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "What's the name on the order?",
          chinese: "订单上的姓名是什么？"
        },
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "It is under Kevin.",
          chinese: "订单名是 Kevin。"
        }
      ],
      vocabularyNotes: [
        {
          term: "name on the order",
          chinese: "订单上的姓名",
          pronunciation: "name-on-the-OR-der",
          note: "前台或外卖取餐时用来核对订单。",
          example: "The name on the order is Lee."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_008",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_storage_label",
      scenarioTitle: "食品日期和存放",
      sequence: 1,
      english: "I’ll send help. I’ll update the wait time.",
      chinese: "我会叫人帮忙。我会更新等待时间。",
      scenario: "贴日期标签、先进先出、检查食材是否还能用。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/food_safety_008-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_008-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "I’ll get someone to help and update the wait time.",
        "I’ll ask for help and change the wait estimate."
      ],
      recommendedResponses: [
        "Okay, I’ll keep working on this order.",
        "Thanks, I’ll tell the customer the new wait time.",
        "Please let me know when help arrives."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "I’ll send help. I’ll update the wait time.",
          chinese: "我会叫人帮忙。我会更新等待时间。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll keep working on the order.",
          chinese: "好的，我会继续做这个订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "wait time",
          chinese: "等待时间",
          pronunciation: "wayt-time",
          note: "顾客还需要等多久才能拿到餐。",
          example: "The wait time is ten minutes."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_009",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 5,
      english: "What is still available?",
      chinese: "现在还有什么可以点？",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/food_safety_009-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_009-slow.mp3",
      isFree: true,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "food_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "What can I still order?",
        "What do you still have?"
      ],
      recommendedResponses: [
        "We still have chicken and fries.",
        "The wings are sold out, but tenders are available.",
        "We are out of sandwiches, but fries are available."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "What is still available?",
          chinese: "现在还有什么可以点？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "We still have chicken tenders and fries.",
          chinese: "我们还有鸡柳和薯条。"
        }
      ],
      vocabularyNotes: [
        {
          term: "still available",
          chinese: "现在还有；仍然可以提供",
          pronunciation: "stil uh-VAY-luh-bul",
          note: "用来说明某个餐品还没卖完，还能点。",
          example: "Fries are still available."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_010",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 10,
      english: "That’s correct. Label the cup and check the bag.",
      chinese: "对。给杯子贴标签，并检查袋子。",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/food_safety_010-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_010-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Correct. Label the cup and check the bag.",
        "Yes. Put a label on the cup and check the bag."
      ],
      recommendedResponses: [
        "I’ll wash my hands now.",
        "I’ll put on new gloves.",
        "Where are the clean gloves?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "That’s correct. Label the cup and check the bag.",
          chinese: "对。给杯子贴标签，并检查袋子。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "I’ll wash my hands now.",
          chinese: "我现在去洗手。"
        }
      ],
      vocabularyNotes: [
        {
          term: "label the cup",
          chinese: "给杯子贴标签",
          pronunciation: "label the cup",
          note: "在杯子上标明订单或内容。",
          example: "Label the cup first."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_011",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 8,
      english: "Let me repeat what I understood.",
      chinese: "我把我理解的内容复述一遍。",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_011-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_011-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Let me say back what I heard.",
        "Let me confirm what I understood."
      ],
      recommendedResponses: [
        "Yes, go ahead.",
        "That is correct.",
        "Almost. The sauce goes on the side."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Let me repeat what I understood.",
          chinese: "我把我理解的内容复述一遍。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Okay, go ahead.",
          chinese: "好的，你说。"
        }
      ],
      vocabularyNotes: [
        {
          term: "repeat what I understood",
          chinese: "复述我理解的内容",
          pronunciation: "ri-PEET what-I un-der-STOOD",
          note: "员工用来确认自己没有听错任务或订单。",
          example: "Let me repeat the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_012",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 12,
      english: "Could you explain that again more slowly?",
      chinese: "可以再慢一点解释一遍吗？",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_012-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_012-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can you explain that again more slowly?",
        "Could you please explain that again more slowly?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Could you explain that again more slowly?",
          chinese: "可以再慢一点解释一遍吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "explain again",
          chinese: "重点词组",
          pronunciation: "explain again",
          note: "这句话里的工作关键词。",
          example: "Could you explain that again more slowly?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_013",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 9,
      english: "What exactly needs to be corrected?",
      chinese: "具体需要改正什么？",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_013-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_013-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "What needs to be fixed?",
        "Which part should I correct?"
      ],
      recommendedResponses: [
        "The label date is wrong.",
        "The sauce needs to be on the side.",
        "This tray needs a new label."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "What exactly needs to be corrected?",
          chinese: "具体需要改正什么？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "The label date needs to be fixed.",
          chinese: "标签日期需要改。"
        }
      ],
      vocabularyNotes: [
        {
          term: "needs to be corrected",
          chinese: "需要被改正；需要修正",
          pronunciation: "needs-to-be-kuh-REK-tid",
          note: "主管指出有错误时，员工用来问具体要改哪里。",
          example: "This label needs to be corrected."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_014",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 10,
      english: "What is the expected production rate?",
      chinese: "规定的生产速度是多少？",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_014-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_014-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "How fast should we work?",
        "How many should we finish?"
      ],
      recommendedResponses: [
        "About twenty orders per hour.",
        "Try to finish one tray every ten minutes.",
        "Finish this tray before lunch."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "What is the expected production rate?",
          chinese: "规定的生产速度是多少？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Try to finish one tray every ten minutes.",
          chinese: "尽量每十分钟完成一盘。"
        }
      ],
      vocabularyNotes: [
        {
          term: "expected production rate",
          chinese: "规定的生产速度；预期产量",
          pronunciation: "ek-SPEK-tid pro-DUK-shun rate",
          note: "主管希望员工在一定时间内完成的速度或数量。",
          example: "The production rate is too slow."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_015",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 15,
      english: "Can you explain what improvement is expected?",
      chinese: "可以说明具体需要改进什么吗？",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_015-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_015-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you explain what improvement is expected?",
        "Can you please explain what improvement is expected?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can you explain what improvement is expected?",
          chinese: "可以说明具体需要改进什么吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "explain what",
          chinese: "重点词组",
          pronunciation: "explain what",
          note: "这句话里的工作关键词。",
          example: "Can you explain what improvement is expected?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_016",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_raw_cooked",
      scenarioTitle: "食品安全",
      sequence: 3,
      english: "Keep raw chicken below cooked food.",
      chinese: "把生鸡肉放在熟食下面。",
      scenario: "避免生熟混放、交叉污染和过敏风险。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_016-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_016-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Raw chicken goes below cooked food.",
        "Store raw chicken under cooked food."
      ],
      recommendedResponses: [
        "Okay, I’ll move it to the lower shelf.",
        "That prevents drips onto cooked food.",
        "I’ll keep raw and cooked food separate."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Keep raw chicken below cooked food.",
          chinese: "把生鸡肉放在熟食下面。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Yes, that prevents cross-contamination.",
          chinese: "对，这样可以防止交叉污染。"
        }
      ],
      vocabularyNotes: [
        {
          term: "raw chicken",
          chinese: "生鸡肉",
          pronunciation: "raw CHIK-en",
          note: "没有煮熟的鸡肉，必须放在熟食下面，避免汁水滴到熟食上。",
          example: "Raw chicken goes on the bottom shelf."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_017",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_raw_cooked",
      scenarioTitle: "食品安全",
      sequence: 10,
      english: "Do not use the same cutting board for raw meat and vegetables.",
      chinese: "不要用同一块砧板切生肉和蔬菜。",
      scenario: "避免生熟混放、交叉污染和过敏风险。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_017-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_017-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Use different boards for raw meat and vegetables.",
        "Do not cut raw meat and vegetables on the same board."
      ],
      recommendedResponses: [
        "Okay, I’ll use separate cutting boards.",
        "I’ll get a clean board for the vegetables.",
        "Which color board should I use?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Do not use the same cutting board for raw meat and vegetables.",
          chinese: "不要用同一块砧板切生肉和蔬菜。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll get a clean board for the vegetables.",
          chinese: "好的，我拿一块干净砧板切蔬菜。"
        }
      ],
      vocabularyNotes: [
        {
          term: "cutting board",
          chinese: "砧板",
          pronunciation: "KUH-ting bord",
          note: "切菜、切肉用的板；生肉和蔬菜要分开使用。",
          example: "Use a clean cutting board."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_018",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_storage_label",
      scenarioTitle: "食品日期和存放",
      sequence: 5,
      english: "Check the expiration date first.",
      chinese: "先检查保质期。",
      scenario: "贴日期标签、先进先出、检查食材是否还能用。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_018-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_018-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Look at the expiration date first.",
        "Check the date before using it."
      ],
      recommendedResponses: [
        "Okay, I’ll check the date now.",
        "It expires tomorrow.",
        "This one is already expired."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Check the expiration date first.",
          chinese: "先检查保质期。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll check it before using it.",
          chinese: "好的，我使用前会检查。"
        }
      ],
      vocabularyNotes: [
        {
          term: "expiration date",
          chinese: "过期日期；保质期",
          pronunciation: "ek-spuh-RAY-shun date",
          note: "食品包装或标签上显示还能安全使用到哪一天。",
          example: "The expiration date is today."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_019",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_storage_label",
      scenarioTitle: "食品日期和存放",
      sequence: 7,
      english: "This container needs a date label.",
      chinese: "这个容器需要日期标签。",
      scenario: "贴日期标签、先进先出、检查食材是否还能用。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_019-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_019-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This container needs a date sticker.",
        "Put a date label on this container."
      ],
      recommendedResponses: [
        "Okay, I’ll label it now.",
        "What date should I write?",
        "I’ll write today’s date on it."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "This container needs a date label.",
          chinese: "这个容器需要日期标签。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll label it now.",
          chinese: "好的，我现在贴标签。"
        }
      ],
      vocabularyNotes: [
        {
          term: "date label",
          chinese: "日期标签",
          pronunciation: "date-LAY-bul",
          note: "贴在食品容器上的标签，写明日期，方便判断是否还能使用。",
          example: "Put a date label on the sauce."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_020",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_storage_label",
      scenarioTitle: "食品日期和存放",
      sequence: 10,
      english: "Put the lid on before you store it.",
      chinese: "存放前把盖子盖上。",
      scenario: "贴日期标签、先进先出、检查食材是否还能用。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_020-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_020-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Cover it before storing it.",
        "Put the cover on before storage."
      ],
      recommendedResponses: [
        "Okay, I’ll put the lid on.",
        "Should I label it too?",
        "I’ll cover it before putting it away."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Put the lid on before you store it.",
          chinese: "存放前把盖子盖上。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll cover it first.",
          chinese: "好的，我会先盖上。"
        }
      ],
      vocabularyNotes: [
        {
          term: "lid",
          chinese: "盖子",
          pronunciation: "lid-sound",
          note: "存放食物前盖在容器上的盖子。",
          example: "The lid is missing."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_021",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_storage_label",
      scenarioTitle: "食品日期和存放",
      sequence: 8,
      english: "Do not leave food out too long.",
      chinese: "不要把食物放在外面太久。",
      scenario: "贴日期标签、先进先出、检查食材是否还能用。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_021-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_021-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Do not keep food out too long.",
        "Put food away before it sits out too long."
      ],
      recommendedResponses: [
        "Okay, I’ll put it back in the cooler.",
        "How long has it been out?",
        "I’ll tell the supervisor if I’m not sure."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Do not leave food out too long.",
          chinese: "不要把食物放在外面太久。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll put it back now.",
          chinese: "好的，我现在放回去。"
        }
      ],
      vocabularyNotes: [
        {
          term: "out too long",
          chinese: "在外面放太久",
          pronunciation: "out-too-long",
          note: "食物长时间放在室温下，可能不安全。",
          example: "The chicken was out too long."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_022",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_storage_label",
      scenarioTitle: "食品日期和存放",
      sequence: 2,
      english: "This needs to go back in the cooler.",
      chinese: "这个需要放回冷藏柜。",
      scenario: "贴日期标签、先进先出、检查食材是否还能用。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_022-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_022-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This needs to return to the cooler.",
        "Put this back in the cooler."
      ],
      recommendedResponses: [
        "Okay, I’ll put it back now.",
        "Should I check the label first?",
        "I’ll keep it cold."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "This needs to go back in the cooler.",
          chinese: "这个需要放回冷藏柜。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll put it back now.",
          chinese: "好的，我现在放回去。"
        }
      ],
      vocabularyNotes: [
        {
          term: "cooler",
          chinese: "冷藏柜；冷藏室",
          pronunciation: "KOO-ler",
          note: "餐厅里用来低温保存食材的设备。",
          example: "Put the sauce in the cooler."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_023",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_general",
      scenarioTitle: "洗手、手套、发网、日期标签、食品存放。",
      sequence: 23,
      english: "Use clean tongs for ready-to-eat food.",
      chinese: "给即食食品使用干净夹子。",
      scenario: "避免手或脏工具接触食品。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_023-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_023-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Use clean tongs for ready-to-eat food."
      ],
      recommendedResponses: [
        "I’ll wash my hands now.",
        "I’ll put on new gloves.",
        "Where are the clean gloves?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Use clean tongs for ready-to-eat food.",
          chinese: "给即食食品使用干净夹子。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "I’ll wash my hands now.",
          chinese: "我现在去洗手。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Use clean",
          chinese: "重点词组",
          pronunciation: "Use clean",
          note: "这句话里的工作关键词。",
          example: "Use clean tongs for ready-to-eat food."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_024",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 2,
      english: "Change the gloves before making the salad.",
      chinese: "做沙拉前换手套。",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_024-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_024-slow.mp3",
      isFree: true,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Put on fresh gloves before making the salad.",
        "Use new gloves for the salad."
      ],
      recommendedResponses: [
        "Okay, I’ll change my gloves.",
        "I’ll wash my hands first, then change gloves.",
        "Where are the clean gloves?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Change the gloves before making the salad.",
          chinese: "做沙拉前换手套。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll put on a new pair.",
          chinese: "好的，我换一副新的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Change the gloves",
          chinese: "更换手套",
          pronunciation: "chaynj-the-gluvz",
          note: "接触不同食物或做即食食品前，换一副干净手套。",
          example: "Change the gloves first."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_025",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_sanitizer_bucket",
      scenarioTitle: "消毒桶和食品接触表面",
      sequence: 25,
      english: "The sanitizer bucket needs to be changed.",
      chinese: "消毒桶需要更换。",
      scenario: "抹布消毒液脏了或浓度不对。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_025-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_025-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The sanitizer bucket needs to be changed."
      ],
      recommendedResponses: [
        "I’ll clean it again.",
        "Should I use sanitizer?",
        "Where is the test strip?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "The sanitizer bucket needs to be changed.",
          chinese: "消毒桶需要更换。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "I’ll clean it again.",
          chinese: "我会再清洁一遍。"
        }
      ],
      vocabularyNotes: [
        {
          term: "sanitize",
          chinese: "消毒",
          pronunciation: "SAN-i-tize",
          note: "用于餐具或食品接触表面。",
          example: "Sanitize the table."
        },
        {
          term: "sanitizer",
          chinese: "消毒剂",
          pronunciation: "SAN-i-tizer",
          note: "食品接触表面或餐具用消毒剂。",
          example: "Check the sanitizer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_026",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_storage_label",
      scenarioTitle: "食品日期和存放",
      sequence: 3,
      english: "Check the cooler temperature.",
      chinese: "检查冷藏柜温度。",
      scenario: "贴日期标签、先进先出、检查食材是否还能用。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_026-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_026-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Look at the cooler temperature.",
        "Check how cold the cooler is."
      ],
      recommendedResponses: [
        "Okay, I’ll check it now.",
        "It is 38 degrees.",
        "The temperature is too high.",
        "Should I write it on the temperature log?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Check the cooler temperature.",
          chinese: "检查冷藏柜温度。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Okay, check it and write it on the log.",
          chinese: "好的，检查后写在记录表上。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "It is 38 degrees.",
          chinese: "现在是38度。"
        }
      ],
      vocabularyNotes: [
        {
          term: "cooler temperature",
          chinese: "冷藏柜温度",
          pronunciation: "KOO-ler TEM-pruh-cher",
          note: "指冷藏柜里面当前的温度。",
          example: "The cooler temperature is too high."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_027",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_storage_label",
      scenarioTitle: "食品日期和存放",
      sequence: 4,
      english: "Check the freezer temperature.",
      chinese: "检查冷冻柜温度。",
      scenario: "贴日期标签、先进先出、检查食材是否还能用。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_027-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_027-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Look at the freezer temperature.",
        "Check how cold the freezer is."
      ],
      recommendedResponses: [
        "Okay, I’ll check it now.",
        "The freezer is at zero degrees.",
        "The temperature looks normal.",
        "The freezer is not cold enough."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Check the freezer temperature.",
          chinese: "检查冷冻柜温度。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Okay, tell me if it is not cold enough.",
          chinese: "好的，如果不够冷就告诉我。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "The freezer is at zero degrees.",
          chinese: "冷冻柜现在是0度。"
        }
      ],
      vocabularyNotes: [
        {
          term: "freezer temperature",
          chinese: "冷冻柜温度",
          pronunciation: "FREE-zer TEM-pruh-cher",
          note: "指冷冻柜内部当前的温度。",
          example: "The freezer temperature is normal."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_028",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_storage_label",
      scenarioTitle: "食品日期和存放",
      sequence: 9,
      english: "This food is past the use-by date.",
      chinese: "这个食物已经过了使用日期。",
      scenario: "贴日期标签、先进先出、检查食材是否还能用。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_028-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_028-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The use-by date has passed.",
        "This food is past its safe date."
      ],
      recommendedResponses: [
        "Okay, I’ll throw it away.",
        "Should I discard it now?",
        "I’ll tell the supervisor.",
        "Let me check the label again."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "This food is past the use-by date.",
          chinese: "这个食物已经过了使用日期。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Do not use it. Throw it away.",
          chinese: "不要用它，把它丢掉。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll discard it now.",
          chinese: "好的，我现在丢掉。"
        }
      ],
      vocabularyNotes: [
        {
          term: "past the use-by date",
          chinese: "已经超过使用日期；已经过期",
          pronunciation: "past-the-YOOZ-bye-date",
          note: "表示食品已经超过标签规定的安全使用日期。",
          example: "This milk is past the use-by date."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_029",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_general",
      scenarioTitle: "洗手、手套、发网、日期标签、食品存放。",
      sequence: 29,
      english: "Throw this away if it is expired.",
      chinese: "如果过期了就扔掉。",
      scenario: "处理过期食品。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_029-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_029-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Throw this away if it is expired."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Throw this away if it is expired.",
          chinese: "如果过期了就扔掉。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Throw away",
          chinese: "重点词组",
          pronunciation: "Throw away",
          note: "这句话里的工作关键词。",
          example: "Throw this away if it is expired."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_030",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_storage_label",
      scenarioTitle: "食品日期和存放",
      sequence: 30,
      english: "Do not put hot food straight into the cooler.",
      chinese: "不要把热食物直接放进冷藏柜。",
      scenario: "贴日期标签、先进先出、检查食材是否还能用。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_030-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_030-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please don’t put hot food straight into the cooler."
      ],
      recommendedResponses: [
        "I’ll wash my hands now.",
        "I’ll put on new gloves.",
        "Where are the clean gloves?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Do not put hot food straight into the cooler.",
          chinese: "不要把热食物直接放进冷藏柜。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "I’ll wash my hands now.",
          chinese: "我现在去洗手。"
        }
      ],
      vocabularyNotes: [
        {
          term: "not put",
          chinese: "重点词组",
          pronunciation: "not put",
          note: "这句话里的工作关键词。",
          example: "Do not put hot food straight into the cooler."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_031",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_raw_cooked",
      scenarioTitle: "食品安全",
      sequence: 4,
      english: "Let it cool before you cover it.",
      chinese: "盖起来之前先让它冷却。",
      scenario: "避免生熟混放、交叉污染和过敏风险。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_031-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_031-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Cool it before covering it.",
        "Wait until it cools, then cover it."
      ],
      recommendedResponses: [
        "Okay, I’ll let it cool first.",
        "How long should it cool?",
        "I’ll cover it after it cools."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Let it cool before you cover it.",
          chinese: "盖起来之前先让它冷却。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll wait before covering it.",
          chinese: "好的，我等它冷却后再盖。"
        }
      ],
      vocabularyNotes: [
        {
          term: "let it cool",
          chinese: "让它冷却",
          pronunciation: "let-it-kool",
          note: "热食在盖起来或存放前，先让温度降下来。",
          example: "Let the soup cool."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_032",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_temperature_expiration",
      scenarioTitle: "温度、保质期和先进先出",
      sequence: 32,
      english: "Use the first-in, first-out rule.",
      chinese: "使用先进先出的规则。",
      scenario: "食材轮换和库存管理。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_032-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_032-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Use the first-in, first-out rule."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Use the first-in, first-out rule.",
          chinese: "使用先进先出的规则。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Use first-in,",
          chinese: "重点词组",
          pronunciation: "Use first-in,",
          note: "这句话里的工作关键词。",
          example: "Use the first-in, first-out rule."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_033",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_raw_cooked",
      scenarioTitle: "食品安全",
      sequence: 7,
      english: "Do not touch ready-to-eat food with bare hands.",
      chinese: "不要徒手接触即食食品。",
      scenario: "避免生熟混放、交叉污染和过敏风险。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_033-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_033-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Do not handle ready-to-eat food with bare hands.",
        "Use gloves for ready-to-eat food."
      ],
      recommendedResponses: [
        "Okay, I’ll put on gloves.",
        "I’ll use tongs instead.",
        "Where are the clean gloves?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Do not touch ready-to-eat food with bare hands.",
          chinese: "不要徒手接触即食食品。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll use gloves or tongs.",
          chinese: "好的，我会用手套或夹子。"
        }
      ],
      vocabularyNotes: [
        {
          term: "ready-to-eat food",
          chinese: "即食食品",
          pronunciation: "RED-ee-too-eet food",
          note: "不需要再加热、可以直接吃的食物，不能徒手接触。",
          example: "Use gloves for ready-to-eat food."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_034",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_general",
      scenarioTitle: "洗手、手套、发网、日期标签、食品存放。",
      sequence: 34,
      english: "Use a clean spoon every time.",
      chinese: "每次都用干净勺子。",
      scenario: "试味、分装或取料。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_034-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_034-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Use a clean spoon every time."
      ],
      recommendedResponses: [
        "I’ll clean it again.",
        "Should I use sanitizer?",
        "Where is the test strip?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Use a clean spoon every time.",
          chinese: "每次都用干净勺子。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "I’ll clean it again.",
          chinese: "我会再清洁一遍。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Use clean",
          chinese: "重点词组",
          pronunciation: "Use clean",
          note: "这句话里的工作关键词。",
          example: "Use a clean spoon every time."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_035",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_storage_label",
      scenarioTitle: "食品日期和存放",
      sequence: 35,
      english: "This needs to be covered in the fridge.",
      chinese: "这个放冰箱里需要盖好。",
      scenario: "贴日期标签、先进先出、检查食材是否还能用。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_035-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_035-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This one needs to be covered in the fridge.",
        "This item needs to be covered in the fridge."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "This needs to be covered in the fridge.",
          chinese: "这个放冰箱里需要盖好。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "needs be",
          chinese: "重点词组",
          pronunciation: "needs be",
          note: "这句话里的工作关键词。",
          example: "This needs to be covered in the fridge."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_036",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_storage_label",
      scenarioTitle: "食品日期和存放",
      sequence: 6,
      english: "Keep chemicals away from food.",
      chinese: "把化学品远离食物。",
      scenario: "贴日期标签、先进先出、检查食材是否还能用。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_036-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_036-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "Keep cleaners away from food.",
        "Do not put chemicals near food."
      ],
      recommendedResponses: [
        "Okay, I’ll move the chemicals away.",
        "I’ll store them on the chemical shelf.",
        "Food and chemicals should stay separate."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Keep chemicals away from food.",
          chinese: "把化学品远离食物。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll move them to the chemical shelf.",
          chinese: "好的，我把它们移到化学品架子上。"
        }
      ],
      vocabularyNotes: [
        {
          term: "chemicals",
          chinese: "清洁化学品",
          pronunciation: "KEM-i-kulz",
          note: "餐厅里指清洁剂、消毒剂等，不能靠近食物。",
          example: "Store chemicals safely."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_037",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_general",
      scenarioTitle: "洗手、手套、发网、日期标签、食品存放。",
      sequence: 37,
      english: "Wash the produce before cutting it.",
      chinese: "切之前先清洗农产品。",
      scenario: "处理蔬菜水果。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_037-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_037-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_038",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_raw_cooked",
      scenarioTitle: "食品安全",
      sequence: 8,
      english: "Use the red cutting board for raw meat.",
      chinese: "生肉用红色砧板。",
      scenario: "避免生熟混放、交叉污染和过敏风险。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_038-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_038-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [
        "Use the red board for raw meat.",
        "Raw meat goes on the red cutting board."
      ],
      recommendedResponses: [
        "Okay, red board for raw meat.",
        "I’ll change boards now.",
        "Where is the clean red board?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Use the red cutting board for raw meat.",
          chinese: "生肉用红色砧板。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll get the red board.",
          chinese: "好的，我去拿红色砧板。"
        }
      ],
      vocabularyNotes: [
        {
          term: "raw meat",
          chinese: "生肉",
          pronunciation: "raw meet",
          note: "没有煮熟的肉，需要使用指定砧板，避免污染其他食物。",
          example: "Keep raw meat separate."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_039",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_raw_cooked",
      scenarioTitle: "食品安全",
      sequence: 5,
      english: "Use the green cutting board for vegetables.",
      chinese: "蔬菜用绿色砧板。",
      scenario: "避免生熟混放、交叉污染和过敏风险。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_039-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_039-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [
        "Use the green board for vegetables.",
        "Vegetables go on the green cutting board."
      ],
      recommendedResponses: [
        "Okay, green board for vegetables.",
        "I’ll use a clean green board.",
        "Where are the clean boards?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Use the green cutting board for vegetables.",
          chinese: "蔬菜用绿色砧板。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll use the green board.",
          chinese: "好的，我用绿色砧板。"
        }
      ],
      vocabularyNotes: [
        {
          term: "green cutting board",
          chinese: "绿色砧板",
          pronunciation: "green KUH-ting bord",
          note: "餐厅可能用不同颜色砧板区分蔬菜、生肉等食材。",
          example: "Use the green board."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_040",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_raw_cooked",
      scenarioTitle: "食品安全",
      sequence: 9,
      english: "Change the towel if it touches the floor.",
      chinese: "抹布碰到地上就要换。",
      scenario: "避免生熟混放、交叉污染和过敏风险。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_040-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_040-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [
        "Replace the towel if it touches the floor.",
        "Get a new towel if it falls."
      ],
      recommendedResponses: [
        "Okay, I’ll get a clean towel.",
        "This towel touched the floor, so I’ll replace it.",
        "Where are the clean towels?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Change the towel if it touches the floor.",
          chinese: "抹布碰到地上就要换。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll get a clean towel.",
          chinese: "好的，我去拿干净抹布。"
        }
      ],
      vocabularyNotes: [
        {
          term: "touches the floor",
          chinese: "碰到地上",
          pronunciation: "TUH-chiz the flor",
          note: "抹布或工具碰到地面后不应继续用于食品区域。",
          example: "The towel touched the floor."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_041",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_storage_label",
      scenarioTitle: "食品日期和存放",
      sequence: 41,
      english: "Do not put clean utensils on a dirty surface.",
      chinese: "不要把干净餐具放在脏表面上。",
      scenario: "贴日期标签、先进先出、检查食材是否还能用。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_041-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_041-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_042",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_sanitizer_bucket",
      scenarioTitle: "消毒桶和食品接触表面",
      sequence: 42,
      english: "This bucket is for sanitizer only.",
      chinese: "这个桶只用于消毒液。",
      scenario: "区分消毒桶和普通水桶。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_042-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_042-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_043",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_sanitizer_bucket",
      scenarioTitle: "消毒桶和食品接触表面",
      sequence: 43,
      english: "The sanitizer strip shows the right level.",
      chinese: "测试纸显示消毒液浓度合格。",
      scenario: "检查消毒液浓度。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_043-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_043-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_044",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_sanitizer_bucket",
      scenarioTitle: "消毒桶和食品接触表面",
      sequence: 44,
      english: "The sanitizer strip is expired.",
      chinese: "消毒液测试纸过期了。",
      scenario: "检查测试纸有效期。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_044-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_044-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_045",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 45,
      english: "Wash your hands after taking out trash.",
      chinese: "倒完垃圾后要洗手。",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_045-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_045-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_046",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手和换手套",
      sequence: 46,
      english: "Wash your hands after using your phone.",
      chinese: "用完手机后要洗手。",
      scenario: "洗手、戴手套、换手套和保持卫生。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_046-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_046-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_047",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_raw_cooked",
      scenarioTitle: "食品安全",
      sequence: 6,
      english: "Do not eat on the prep table.",
      chinese: "不要在备餐台上吃东西。",
      scenario: "避免生熟混放、交叉污染和过敏风险。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_047-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_047-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [
        "Do not eat at the prep table.",
        "No eating on the prep table."
      ],
      recommendedResponses: [
        "Okay, I’ll eat in the break area.",
        "Sorry, I’ll move my food.",
        "Where can I eat?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Do not eat on the prep table.",
          chinese: "不要在备餐台上吃东西。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Sorry, I’ll eat in the break area.",
          chinese: "不好意思，我去休息区吃。"
        }
      ],
      vocabularyNotes: [
        {
          term: "prep table",
          chinese: "备餐台",
          pronunciation: "prep TAY-bul",
          note: "准备食物的工作台，不能在上面吃东西。",
          example: "Clean the prep table."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_048",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_raw_cooked",
      scenarioTitle: "食品安全",
      sequence: 2,
      english: "Store raw seafood separately.",
      chinese: "把生海鲜分开存放。",
      scenario: "避免生熟混放、交叉污染和过敏风险。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_048-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_048-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "Keep raw seafood separate.",
        "Store seafood away from other food."
      ],
      recommendedResponses: [
        "Okay, I’ll store it separately.",
        "Which shelf should I use?",
        "I’ll label the seafood container."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Store raw seafood separately.",
          chinese: "把生海鲜分开存放。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll put it on a separate shelf.",
          chinese: "好的，我把它放到单独的架子上。"
        }
      ],
      vocabularyNotes: [
        {
          term: "raw seafood",
          chinese: "生海鲜",
          pronunciation: "raw SEE-food",
          note: "未煮熟的鱼、虾等海鲜，需要分开存放，避免污染。",
          example: "Keep raw seafood separate."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_049",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_allergens",
      scenarioTitle: "过敏订单",
      sequence: 49,
      english: "Mark the allergen order clearly.",
      chinese: "把过敏订单标清楚。",
      scenario: "处理顾客过敏要求。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_049-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_049-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "food_safety_050",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_raw_cooked",
      scenarioTitle: "食品安全",
      sequence: 1,
      english: "Use separate utensils for allergen orders.",
      chinese: "过敏订单要使用单独的工具。",
      scenario: "避免生熟混放、交叉污染和过敏风险。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_050-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_050-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "Use clean separate tools for allergy orders.",
        "Do not use the same utensils for allergen orders."
      ],
      recommendedResponses: [
        "I’ll get clean utensils.",
        "Which allergy is it?",
        "I’ll tell the manager before making it."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Use separate utensils for allergen orders.",
          chinese: "过敏订单要使用单独的工具。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Okay, I’ll get clean utensils.",
          chinese: "好的，我去拿干净工具。"
        }
      ],
      vocabularyNotes: [
        {
          term: "allergen orders",
          chinese: "过敏相关订单",
          pronunciation: "AL-er-jen OR-derz",
          note: "顾客对某种食物过敏时的订单，需要特别小心，避免交叉接触。",
          example: "This is an allergen order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_001",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 1,
      english: "We need one more combo for table two.",
      chinese: "二号桌还需要一份套餐。",
      scenario: "前台或同事通知厨房，某桌还需要再做一份套餐。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Coworker",
      roleZh: "同事可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_001-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_001-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Coworker",
      speakerRoleZh: "同事可能会说",
      variants: [
        "We need one more combo for table two."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事",
          english: "We need one more combo for table two.",
          chinese: "二号桌还需要一份套餐。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need one",
          chinese: "重点词组",
          pronunciation: "need one",
          note: "这句话里的工作关键词。",
          example: "We need one more combo for table two."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_002",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 2,
      english: "No sauce on this order.",
      chinese: "这份订单不要放酱。",
      scenario: "前台把顾客的特殊要求传达给厨房，明确这份订单不加酱。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Coworker",
      roleZh: "同事可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_002-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_002-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Coworker",
      speakerRoleZh: "同事可能会说",
      variants: [
        "No sauce on this order."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事",
          english: "No sauce on this order.",
          chinese: "这份订单不要放酱。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "No sauce",
          chinese: "重点词组",
          pronunciation: "No sauce",
          note: "这句话里的工作关键词。",
          example: "No sauce on this order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_003",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 3,
      english: "Make this one with light sauce.",
      chinese: "这一份少放一点酱。",
      scenario: "顾客要求少酱时，前台或同事向制作人员传达。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Coworker",
      roleZh: "同事可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_003-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_003-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Coworker",
      speakerRoleZh: "同事可能会说",
      variants: [
        "Make this one with light sauce."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事",
          english: "Make this one with light sauce.",
          chinese: "这一份少放一点酱。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Make one",
          chinese: "重点词组",
          pronunciation: "Make one",
          note: "这句话里的工作关键词。",
          example: "Make this one with light sauce."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_004",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 4,
      english: "The customer wants the sauce on the side.",
      chinese: "顾客要把酱放在旁边。",
      scenario: "顾客要求酱料单独装时，前台向厨房或打包人员说明。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Coworker",
      roleZh: "同事可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_004-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_004-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Coworker",
      speakerRoleZh: "同事可能会说",
      variants: [
        "The customer wants the sauce on the side."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事",
          english: "The customer wants the sauce on the side.",
          chinese: "顾客要把酱放在旁边。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "on the side",
          chinese: "放旁边",
          pronunciation: "on the side",
          note: "酱料不拌进去，单独放。",
          example: "Sauce on the side, please."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_005",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 5,
      english: "How long on the tenders?",
      chinese: "鸡柳还要多久？",
      scenario: "前台或出餐人员向厨房询问鸡柳还需要多久。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Coworker",
      roleZh: "同事可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_005-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_005-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Coworker",
      speakerRoleZh: "同事可能会说",
      variants: [
        "How long on the tenders, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事",
          english: "How long on the tenders?",
          chinese: "鸡柳还要多久？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "How long",
          chinese: "重点词组",
          pronunciation: "How long",
          note: "这句话里的工作关键词。",
          example: "How long on the tenders?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_006",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 6,
      english: "Two more minutes on the fries.",
      chinese: "薯条还要两分钟。",
      scenario: "厨房员工向前台或同事报告薯条剩余制作时间。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Worker",
      roleZh: "后厨员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_006-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_006-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "后厨员工要说",
      variants: [
        "Two more minutes on the fries."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "后厨员工",
          english: "Two more minutes on the fries.",
          chinese: "薯条还要两分钟。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Two more",
          chinese: "重点词组",
          pronunciation: "Two more",
          note: "这句话里的工作关键词。",
          example: "Two more minutes on the fries."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_007",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 7,
      english: "Please remake this sandwich.",
      chinese: "请重做这个三明治。",
      scenario: "发现餐品做错、质量不合格或顾客要求重做时，主管要求重新制作。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_007-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_007-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Can you remake this sandwich?",
        "Could you please remake this sandwich?"
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Please remake this sandwich.",
          chinese: "请重做这个三明治。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "remake sandwich",
          chinese: "重点词组",
          pronunciation: "remake sandwich",
          note: "这句话里的工作关键词。",
          example: "Please remake this sandwich."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_008",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 8,
      english: "This order is for dine-in.",
      chinese: "这份订单是堂食。",
      scenario: "前台向厨房或出餐人员说明订单应使用托盘或堂食包装。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Coworker",
      roleZh: "同事可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_008-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_008-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Coworker",
      speakerRoleZh: "同事可能会说",
      variants: [
        "This one order is for dine-in.",
        "This item order is for dine-in."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事",
          english: "This order is for dine-in.",
          chinese: "这份订单是堂食。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order for",
          chinese: "重点词组",
          pronunciation: "order for",
          note: "这句话里的工作关键词。",
          example: "This order is for dine-in."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_009",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 9,
      english: "This order is to go.",
      chinese: "这份订单是外带。",
      scenario: "前台说明订单需要外带包装。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Coworker",
      roleZh: "同事可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_009-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_009-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Coworker",
      speakerRoleZh: "同事可能会说",
      variants: [
        "This one order is to go.",
        "This item order is to go."
      ],
      recommendedResponses: [
        "For here, please.",
        "To go, please.",
        "It’s for takeout."
      ],
      dialogue: [
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事",
          english: "This order is to go.",
          chinese: "这份订单是外带。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "For here, please.",
          chinese: "堂食，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "to go",
          chinese: "外带",
          pronunciation: "to go",
          note: "带走吃。",
          example: "To go, please."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_010",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 10,
      english: "We're waiting on the wings.",
      chinese: "我们还在等鸡翅。",
      scenario: "出餐人员说明整份订单只差鸡翅尚未完成。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Coworker",
      roleZh: "同事可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_010-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_010-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Coworker",
      speakerRoleZh: "同事可能会说",
      variants: [
        "We're waiting on the wings."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事",
          english: "We're waiting on the wings.",
          chinese: "我们还在等鸡翅。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "We're waiting",
          chinese: "重点词组",
          pronunciation: "We're waiting",
          note: "这句话里的工作关键词。",
          example: "We're waiting on the wings."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_011",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_trash_recycling",
      scenarioTitle: "垃圾和回收",
      sequence: 3,
      english: "Double-check the bag before you seal it.",
      chinese: "封袋前再核对一遍。",
      scenario: "换垃圾袋、扎紧、纸箱回收。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_011-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_011-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Check the bag again before sealing it."
      ],
      recommendedResponses: [
        "I will check the seal first.",
        "Which supply is for seal?",
        "I will finish the seal before moving on."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Double-check the bag before you seal it.",
          chinese: "封袋前再核对一遍。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay. Which supplies should I use?",
          chinese: "好的。我应该用哪些用品？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Use the supplies by the sink.",
          chinese: "用水槽旁边的用品。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Got it. I will do it now.",
          chinese: "明白。我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "seal",
          chinese: "封口",
          pronunciation: "seel",
          note: "把袋子或包装封好。",
          example: "Seal the bag."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_012",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 12,
      english: "Put the sauce in a separate cup.",
      chinese: "把酱装在单独的小杯里。",
      scenario: "顾客要求酱料放旁边时，使用独立酱杯打包。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_012-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_012-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Put the sauce in a separate cup."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Put the sauce in a separate cup.",
          chinese: "把酱装在单独的小杯里。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Put sauce",
          chinese: "重点词组",
          pronunciation: "Put sauce",
          note: "这句话里的工作关键词。",
          example: "Put the sauce in a separate cup."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_013",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_prep_work",
      scenarioTitle: "备菜",
      sequence: 3,
      english: "Label the bag with the customer's name.",
      chinese: "在袋子上写上顾客的名字。",
      scenario: "切菜、称重、准备食材和确认数量。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_013-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_013-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Write the customer name on the bag.",
        "Put the customer name on the bag."
      ],
      recommendedResponses: [
        "I will check the label first.",
        "Which supply is for label?",
        "I will finish the label before moving on."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Label the bag with the customer's name.",
          chinese: "在袋子上写上顾客的名字。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay. Which supplies should I use?",
          chinese: "好的。我应该用哪些用品？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Use the supplies by the sink.",
          chinese: "用水槽旁边的用品。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Got it. I will do it now.",
          chinese: "明白。我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "label",
          chinese: "贴标签；标签",
          pronunciation: "LAY-bul",
          note: "写上名字、日期或订单信息。",
          example: "Label the box."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_014",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 14,
      english: "Make sure the drink goes with the order.",
      chinese: "确认饮料要和订单一起交付。",
      scenario: "出餐前确认饮料没有遗漏，尤其是饮料与热食分开放置时。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_014-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_014-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Make sure the drink goes with the order."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Make sure the drink goes with the order.",
          chinese: "确认饮料要和订单一起交付。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "make sure",
          chinese: "确保",
          pronunciation: "make sure",
          note: "表示确认事情真的做好。",
          example: "Make sure it is clean."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_015",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 15,
      english: "Don't forget the napkins.",
      chinese: "别忘了放餐巾纸。",
      scenario: "打包外带或外卖订单时提醒员工放入餐巾纸。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_015-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_015-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please don't forget the napkins."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Don't forget the napkins.",
          chinese: "别忘了放餐巾纸。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Don't forget",
          chinese: "重点词组",
          pronunciation: "Don't forget",
          note: "这句话里的工作关键词。",
          example: "Don't forget the napkins."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_016",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 16,
      english: "This bag is for pickup.",
      chinese: "这袋是顾客自取订单。",
      scenario: "区分顾客自取与外卖平台订单，避免交错。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Coworker",
      roleZh: "同事可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_016-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_016-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Coworker",
      speakerRoleZh: "同事可能会说",
      variants: [
        "This one bag is for pickup.",
        "This item bag is for pickup."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事",
          english: "This bag is for pickup.",
          chinese: "这袋是顾客自取订单。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "bag for",
          chinese: "重点词组",
          pronunciation: "bag for",
          note: "这句话里的工作关键词。",
          example: "This bag is for pickup."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_017",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 17,
      english: "This bag is for delivery.",
      chinese: "这袋是外卖配送订单。",
      scenario: "区分外卖配送订单，并放入指定取餐区域。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Coworker",
      roleZh: "同事可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_017-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_017-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Coworker",
      speakerRoleZh: "同事可能会说",
      variants: [
        "This one bag is for delivery.",
        "This item bag is for delivery."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事",
          english: "This bag is for delivery.",
          chinese: "这袋是外卖配送订单。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "bag for",
          chinese: "重点词组",
          pronunciation: "bag for",
          note: "这句话里的工作关键词。",
          example: "This bag is for delivery."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_018",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 18,
      english: "Keep hot food and cold drinks separate.",
      chinese: "热食和冷饮要分开放。",
      scenario: "打包时避免冷饮被热食加热或造成包装受潮。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_018-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_018-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Keep hot food and cold drinks separate."
      ],
      recommendedResponses: [
        "Step aside.",
        "Give them space.",
        "Say “hot heard.”"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Keep hot food and cold drinks separate.",
          chinese: "热食和冷饮要分开放。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Step aside.",
          chinese: "让到一边。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Give them space.",
          chinese: "给对方留空间。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Keep hot",
          chinese: "重点词组",
          pronunciation: "Keep hot",
          note: "这句话里的工作关键词。",
          example: "Keep hot food and cold drinks separate."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_019",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 19,
      english: "Call the customer's name when the order is ready.",
      chinese: "餐好后叫顾客的名字。",
      scenario: "堂食或自取订单完成后，通知顾客前来领取。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_019-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_019-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Call the customer's name when the order is ready."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Call the customer's name when the order is ready.",
          chinese: "餐好后叫顾客的名字。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Call customer's",
          chinese: "重点词组",
          pronunciation: "Call customer's",
          note: "这句话里的工作关键词。",
          example: "Call the customer's name when the order is ready."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_020",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 20,
      english: "Check the order number before handing it out.",
      chinese: "把餐交出去前先核对订单号。",
      scenario: "交付订单前核对编号，避免把餐交给错误顾客或司机。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_020-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_020-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Check the order number before handing it out."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Check the order number before handing it out.",
          chinese: "把餐交出去前先核对订单号。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Check order",
          chinese: "重点词组",
          pronunciation: "Check order",
          note: "这句话里的工作关键词。",
          example: "Check the order number before handing it out."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_021",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 21,
      english: "Wipe down the front counter.",
      chinese: "把前台台面擦干净。",
      scenario: "没有订单或交班前清洁前台接触面。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_021-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_021-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Wipe down the front counter."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Wipe down the front counter.",
          chinese: "把前台台面擦干净。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Wipe down",
          chinese: "重点词组",
          pronunciation: "Wipe down",
          note: "这句话里的工作关键词。",
          example: "Wipe down the front counter."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_022",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_trash_recycling",
      scenarioTitle: "垃圾和回收",
      sequence: 1,
      english: "Sweep the dining area.",
      chinese: "把用餐区扫一下。",
      scenario: "换垃圾袋、扎紧、纸箱回收。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_022-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_022-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Sweep the customer seating area.",
        "Clean the dining room floor."
      ],
      recommendedResponses: [
        "Okay. Which supplies should I use?",
        "I will tell you when it is done."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Sweep the dining area.",
          chinese: "把用餐区扫一下。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "dining area",
          chinese: "用餐区",
          pronunciation: "DY-ning AIR-ee-uh",
          note: "顾客坐下吃饭的区域。",
          example: "Sweep the floor."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_023",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_trash_recycling",
      scenarioTitle: "垃圾和回收",
      sequence: 2,
      english: "Take out the trash before closing.",
      chinese: "关店前把垃圾倒掉。",
      scenario: "换垃圾袋、扎紧、纸箱回收。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_023-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_023-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Empty the trash before we close.",
        "Take the garbage out before closing."
      ],
      recommendedResponses: [
        "I will clean the trash now.",
        "Which cleaner should I use?",
        "I will put the sign out first."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Take out the trash before closing.",
          chinese: "关店前把垃圾倒掉。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "trash",
          chinese: "垃圾",
          pronunciation: "trash-sound",
          note: "餐厅垃圾桶或垃圾袋里的废弃物。",
          example: "Take out the trash."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_024",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 24,
      english: "Restock the sauce cups.",
      chinese: "把酱料杯补满。",
      scenario: "高峰前或库存不足时补充酱杯和杯盖。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_024-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_024-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please restock the sauce cups."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Restock the sauce cups.",
          chinese: "把酱料杯补满。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Restock sauce",
          chinese: "重点词组",
          pronunciation: "Restock sauce",
          note: "这句话里的工作关键词。",
          example: "Restock the sauce cups."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_025",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_table_counter_cleaning",
      scenarioTitle: "清洁桌面和设备",
      sequence: 1,
      english: "Clean the drink station.",
      chinese: "清洁饮料区。",
      scenario: "擦桌子、柜台、饮料台和设备表面。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_025-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_025-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Wipe down the drink station.",
        "Clean the soda area."
      ],
      recommendedResponses: [
        "Okay. Which supplies should I use?",
        "I will tell you when it is done."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Clean the drink station.",
          chinese: "清洁饮料区。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay. Which supplies should I use?",
          chinese: "好的。我应该用哪些用品？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Use the supplies by the sink.",
          chinese: "用水槽旁边的用品。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Got it. I will do it now.",
          chinese: "明白。我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "drink station",
          chinese: "饮料区",
          pronunciation: "drink-STAY-shun",
          note: "顾客或员工取饮料的区域。",
          example: "Wipe the drink station."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_026",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_prep_work",
      scenarioTitle: "备菜",
      sequence: 2,
      english: "Turn off the open sign.",
      chinese: "把营业灯关掉。",
      scenario: "切菜、称重、准备食材和确认数量。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_026-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_026-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Switch off the open sign.",
        "Turn the open light off."
      ],
      recommendedResponses: [
        "I will check the open sign first.",
        "Which supply is for open sign?",
        "I will finish the open sign before moving on."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Turn off the open sign.",
          chinese: "把营业灯关掉。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "open sign",
          chinese: "营业灯牌",
          pronunciation: "OH-pen sign",
          note: "显示店铺正在营业的标志。",
          example: "Turn off the sign."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_027",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_floor_mopping",
      scenarioTitle: "扫地和拖地",
      sequence: 6,
      english: "Follow the closing procedure for the front door.",
      chinese: "按照关店流程处理前门。",
      scenario: "扫地、拖地、地垫和小心地滑标志。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_027-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_027-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Use the closing steps for the front door.",
        "Follow the front-door closing steps."
      ],
      recommendedResponses: [
        "I will check the procedure first.",
        "Which supply is for procedure?",
        "I will finish the procedure before moving on."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Follow the closing procedure for the front door.",
          chinese: "按照关店流程处理前门。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay. Which supplies should I use?",
          chinese: "好的。我应该用哪些用品？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Use the supplies by the sink.",
          chinese: "用水槽旁边的用品。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Got it. I will do it now.",
          chinese: "明白。我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "procedure",
          chinese: "流程；规定步骤",
          pronunciation: "proh-SEE-jer",
          note: "餐厅工作中必须按步骤做的流程。",
          example: "Follow the procedure."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_028",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 28,
      english: "Write down anything the next shift needs to know.",
      chinese: "把下个班次需要知道的事情写下来。",
      scenario: "记录库存、设备、订单和未完成事项，方便下一班接手。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_028-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_028-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Write down anything the next shift needs to know."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Write down anything the next shift needs to know.",
          chinese: "把下个班次需要知道的事情写下来。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Write down",
          chinese: "重点词组",
          pronunciation: "Write down",
          note: "这句话里的工作关键词。",
          example: "Write down anything the next shift needs to know."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_029",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_floor_mopping",
      scenarioTitle: "扫地和拖地",
      sequence: 1,
      english: "The floor is still wet.",
      chinese: "地面还是湿的。",
      scenario: "扫地、拖地、地垫和小心地滑标志。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "后厨员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_029-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_029-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "后厨员工要说",
      variants: [
        "This floor is still wet.",
        "There is a problem with this."
      ],
      recommendedResponses: [
        "Okay. Which supplies should I use?",
        "I will tell you when it is done."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "后厨员工",
          english: "The floor is still wet.",
          chinese: "地面还是湿的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "floor",
          chinese: "地面",
          pronunciation: "flor",
          note: "餐厅地面，湿滑时要放警示牌。",
          example: "The floor is wet."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_030",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_floor_mopping",
      scenarioTitle: "扫地和拖地",
      sequence: 2,
      english: "Put up the wet floor sign.",
      chinese: "放上小心地滑警示牌。",
      scenario: "扫地、拖地、地垫和小心地滑标志。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_030-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_030-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Set out the wet floor sign.",
        "Place the wet floor sign out."
      ],
      recommendedResponses: [
        "Walk carefully.",
        "Put out the wet floor sign.",
        "Tell a supervisor."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Put up the wet floor sign.",
          chinese: "放上小心地滑警示牌。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Walk carefully.",
          chinese: "小心走。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Put out the wet floor sign.",
          chinese: "放出“小心地滑”标志。"
        }
      ],
      vocabularyNotes: [
        {
          term: "wet floor sign",
          chinese: "小心地滑标志",
          pronunciation: "wet-floor-sign",
          note: "拖地或地面湿时放出来提醒别人。",
          example: "Use the wet floor sign."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_031",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 31,
      english: "Greet every customer when they walk in.",
      chinese: "每位顾客进门时都要主动打招呼。",
      scenario: "培训前台员工及时回应进店顾客，即使暂时无法马上接单。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_031-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_031-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Greet every customer when they walk in."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Greet every customer when they walk in.",
          chinese: "每位顾客进门时都要主动打招呼。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Greet every",
          chinese: "重点词组",
          pronunciation: "Greet every",
          note: "这句话里的工作关键词。",
          example: "Greet every customer when they walk in."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_032",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 32,
      english: "Repeat the order before you charge the customer.",
      chinese: "收款前先复述并确认订单。",
      scenario: "付款前复述主餐、配菜、饮料和特殊要求，减少错误。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_032-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_032-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Repeat the order before you charge the customer."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Repeat the order before you charge the customer.",
          chinese: "收款前先复述并确认订单。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Repeat order",
          chinese: "重点词组",
          pronunciation: "Repeat order",
          note: "这句话里的工作关键词。",
          example: "Repeat the order before you charge the customer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_033",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 33,
      english: "Use simpler words if the customer looks confused.",
      chinese: "顾客看起来没听懂时，用更简单的话说明。",
      scenario: "顾客英语有限或没有理解时，用短句、菜单指示和重复确认帮助沟通。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_033-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_033-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Use simpler words if the customer looks confused."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Use simpler words if the customer looks confused.",
          chinese: "顾客看起来没听懂时，用更简单的话说明。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Use simpler",
          chinese: "重点词组",
          pronunciation: "Use simpler",
          note: "这句话里的工作关键词。",
          example: "Use simpler words if the customer looks confused."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_034",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 34,
      english: "Don't argue with the customer.",
      chinese: "不要和顾客争辩。",
      scenario: "遇到投诉或情绪激动的顾客时保持冷静，必要时请经理介入。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_034-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_034-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Don't argue with the customer."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Don't argue with the customer.",
          chinese: "不要和顾客争辩。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Don't argue",
          chinese: "重点词组",
          pronunciation: "Don't argue",
          note: "这句话里的工作关键词。",
          example: "Don't argue with the customer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_035",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 35,
      english: "Ask for help if you're not sure.",
      chinese: "如果不确定，就请人帮忙。",
      scenario: "涉及订单、过敏、退款或设备时，不确定就先询问主管。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_035-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_035-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Ask for help if you're not sure."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Ask for help if you're not sure.",
          chinese: "如果不确定，就请人帮忙。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Ask for",
          chinese: "重点词组",
          pronunciation: "Ask for",
          note: "这句话里的工作关键词。",
          example: "Ask for help if you're not sure."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_036",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 36,
      english: "Keep your voice calm and clear.",
      chinese: "说话要冷静、清楚。",
      scenario: "高峰或投诉场景中，员工需要保持清晰、稳定的语气。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_036-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_036-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Keep your voice calm and clear."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Keep your voice calm and clear.",
          chinese: "说话要冷静、清楚。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Keep your",
          chinese: "重点词组",
          pronunciation: "Keep your",
          note: "这句话里的工作关键词。",
          example: "Keep your voice calm and clear."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_037",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 37,
      english: "Check the receipt before handing out the food.",
      chinese: "把餐交出去前先核对小票。",
      scenario: "交餐前核对餐品、配菜、饮料和特殊要求。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_037-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_037-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Check the receipt before handing out the food."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Check the receipt before handing out the food.",
          chinese: "把餐交出去前先核对小票。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "receipt",
          chinese: "收据",
          pronunciation: "re-CEIPT",
          note: "付款后的小票。",
          example: "Would you like a receipt?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_038",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 38,
      english: "If you make a mistake, tell me right away.",
      chinese: "如果出了错，马上告诉我。",
      scenario: "订单、现金、食品或设备出现错误时立即报告，便于尽快纠正。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_038-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_038-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "If you make a mistake, tell me right away."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it. I’ll finish it before noon.",
        "Which task should I do first?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "If you make a mistake, tell me right away.",
          chinese: "如果出了错，马上告诉我。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it. I’ll finish it before noon.",
          chinese: "明白，我会在中午前完成。"
        }
      ],
      vocabularyNotes: [
        {
          term: "If make",
          chinese: "重点词组",
          pronunciation: "If make",
          note: "这句话里的工作关键词。",
          example: "If you make a mistake, tell me right away."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_039",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 39,
      english: "Good service means clear communication.",
      chinese: "好的服务离不开清楚的沟通。",
      scenario: "培训员工重视确认、解释和礼貌回应，而不仅是快速出餐。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_039-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_039-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Good service means clear communication."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Good service means clear communication.",
          chinese: "好的服务离不开清楚的沟通。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Good service",
          chinese: "重点词组",
          pronunciation: "Good service",
          note: "这句话里的工作关键词。",
          example: "Good service means clear communication."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_040",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 40,
      english: "Stay focused during the rush.",
      chinese: "高峰期要保持专注。",
      scenario: "订单高峰时仍需按流程核对，不因忙乱跳过关键步骤。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_040-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_040-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Stay focused during the rush."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Stay focused during the rush.",
          chinese: "高峰期要保持专注。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Stay focused",
          chinese: "重点词组",
          pronunciation: "Stay focused",
          note: "这句话里的工作关键词。",
          example: "Stay focused during the rush."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_041",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 41,
      english: "We're running low on chicken.",
      chinese: "鸡肉库存快不够了。",
      scenario: "发现主原料库存不足时，及时通知主管或前台调整备货和销售。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Worker",
      roleZh: "后厨员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_041-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_041-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "后厨员工要说",
      variants: [
        "We're running low on chicken."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "后厨员工",
          english: "We're running low on chicken.",
          chinese: "鸡肉库存快不够了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "We're running",
          chinese: "重点词组",
          pronunciation: "We're running",
          note: "这句话里的工作关键词。",
          example: "We're running low on chicken."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_042",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 42,
      english: "Bring more fries from the freezer.",
      chinese: "从冷冻库再拿一些薯条。",
      scenario: "炸台库存不足时，从指定冷冻区域补充未解冻产品。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_042-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_042-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Bring more fries from the freezer."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Bring more fries from the freezer.",
          chinese: "从冷冻库再拿一些薯条。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Bring more",
          chinese: "重点词组",
          pronunciation: "Bring more",
          note: "这句话里的工作关键词。",
          example: "Bring more fries from the freezer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_043",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_prep_work",
      scenarioTitle: "备菜",
      sequence: 1,
      english: "Prep more sauce cups.",
      chinese: "再准备一些酱料杯。",
      scenario: "切菜、称重、准备食材和确认数量。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_043-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_043-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Get more sauce cups ready.",
        "Prepare extra sauce cups."
      ],
      recommendedResponses: [
        "I will check the sauce first.",
        "Which supply is for sauce?",
        "I will finish the sauce before moving on."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Prep more sauce cups.",
          chinese: "再准备一些酱料杯。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "sauce",
          chinese: "酱料",
          pronunciation: "saws",
          note: "鸡翅、鸡柳或蘸料的口味。",
          example: "Add the sauce."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_044",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 44,
      english: "Check the expiration date before you use it.",
      chinese: "使用前先检查有效期。",
      scenario: "使用包装原料前核对有效期或使用期限。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_044-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_044-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Check the expiration date before you use it."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Check the expiration date before you use it.",
          chinese: "使用前先检查有效期。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Check expiration",
          chinese: "重点词组",
          pronunciation: "Check expiration",
          note: "这句话里的工作关键词。",
          example: "Check the expiration date before you use it."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_045",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 45,
      english: "Put the older product in front.",
      chinese: "把日期较早的产品放在前面。",
      scenario: "整理库存时把日期较早的产品放前面，减少过期浪费。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_045-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_045-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Put the older product in front."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Put the older product in front.",
          chinese: "把日期较早的产品放在前面。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Put older",
          chinese: "重点词组",
          pronunciation: "Put older",
          note: "这句话里的工作关键词。",
          example: "Put the older product in front."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_046",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 46,
      english: "We're out of large cups.",
      chinese: "大杯已经用完了。",
      scenario: "发现包装用品缺货时，及时通知前台和主管，避免未经顾客同意擅自替换。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Worker",
      roleZh: "后厨员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_046-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_046-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "后厨员工要说",
      variants: [
        "We're out of large cups."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "后厨员工",
          english: "We're out of large cups.",
          chinese: "大杯已经用完了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "We're out",
          chinese: "重点词组",
          pronunciation: "We're out",
          note: "这句话里的工作关键词。",
          example: "We're out of large cups."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_047",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_closing_cleaning",
      scenarioTitle: "下班关店",
      sequence: 1,
      english: "Add gloves to the supply list.",
      chinese: "把手套加到物料清单上。",
      scenario: "关店前清洁、补货、收好清洁用品。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_047-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_047-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Put gloves on the supply list.",
        "Add gloves to the order list."
      ],
      recommendedResponses: [
        "I will check the gloves first.",
        "Which supply is for gloves?",
        "I will finish the gloves before moving on."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Add gloves to the supply list.",
          chinese: "把手套加到物料清单上。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay. Which supplies should I use?",
          chinese: "好的。我应该用哪些用品？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Use the supplies by the sink.",
          chinese: "用水槽旁边的用品。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Got it. I will do it now.",
          chinese: "明白。我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "gloves",
          chinese: "手套",
          pronunciation: "gluvz",
          note: "食品操作时戴的手套。",
          example: "Put on your gloves."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_048",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_closing_cleaning",
      scenarioTitle: "下班关店",
      sequence: 2,
      english: "Count the inventory before we close.",
      chinese: "关店前盘点库存。",
      scenario: "关店前清洁、补货、收好清洁用品。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_048-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_048-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Count inventory before closing.",
        "Check the stock before we close."
      ],
      recommendedResponses: [
        "I will check the Count inventory first.",
        "Which supply is for Count inventory?",
        "I will finish the Count inventory before moving on."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Count the inventory before we close.",
          chinese: "关店前盘点库存。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Count inventory",
          chinese: "后厨清洁表达",
          pronunciation: "KITCH-en KLEE-ning",
          note: "用于洗碗、清洁、拖地和关店流程。 这里重点看 “Count inventory” 在句子里的用法。",
          example: "Clean the station."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_049",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_fryer_oven_equipment",
      scenarioTitle: "炸炉和烤箱",
      sequence: 1,
      english: "This box needs to stay refrigerated.",
      chinese: "这一箱需要一直冷藏。",
      scenario: "使用炸炉、烤箱和厨房设备时听懂指令。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_049-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_049-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "This box must stay cold.",
        "Keep this box in the refrigerator."
      ],
      recommendedResponses: [
        "Okay. Which supplies should I use?",
        "I will tell you when it is done."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "This box needs to stay refrigerated.",
          chinese: "这一箱需要一直冷藏。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay. Which supplies should I use?",
          chinese: "好的。我应该用哪些用品？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Use the supplies by the sink.",
          chinese: "用水槽旁边的用品。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Got it. I will do it now.",
          chinese: "明白。我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "needs stay",
          chinese: "后厨清洁表达",
          pronunciation: "KITCH-en KLEE-ning",
          note: "用于洗碗、清洁、拖地和关店流程。 这里重点看 “needs stay” 在句子里的用法。",
          example: "Clean the station."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_050",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 50,
      english: "Don't open a new case yet.",
      chinese: "先不要开新箱。",
      scenario: "避免同时打开多箱造成混乱、浪费或日期管理问题。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_050-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_050-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Don't open a new case yet."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Don't open a new case yet.",
          chinese: "先不要开新箱。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Don't open",
          chinese: "重点词组",
          pronunciation: "Don't open",
          note: "这句话里的工作关键词。",
          example: "Don't open a new case yet."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_051",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 51,
      english: "Does this contain peanuts?",
      chinese: "这个含花生吗？",
      scenario: "顾客询问过敏原时，员工必须核对可靠资料，不能凭记忆保证。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_051-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_051-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Does this contain peanuts, please?"
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Does this contain peanuts?",
          chinese: "这个含花生吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "contain peanuts",
          chinese: "重点词组",
          pronunciation: "contain peanuts",
          note: "这句话里的工作关键词。",
          example: "Does this contain peanuts?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_052",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 52,
      english: "Please tell us if you have any food allergies.",
      chinese: "如果您有食物过敏，请告诉我们。",
      scenario: "餐厅需要了解过敏信息时，礼貌请顾客提前说明。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_052-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_052-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Can you tell us if you have any food allergies?",
        "Could you please tell us if you have any food allergies?"
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Please tell us if you have any food allergies.",
          chinese: "如果您有食物过敏，请告诉我们。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "tell us",
          chinese: "重点词组",
          pronunciation: "tell us",
          note: "这句话里的工作关键词。",
          example: "Please tell us if you have any food allergies."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_053",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 53,
      english: "This item may contain dairy.",
      chinese: "这款餐品可能含有乳制品。",
      scenario: "信息尚未完全确认时，应明确是“可能含有”并继续核实，不能猜测。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_053-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_053-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "This one item may contain dairy.",
        "This item item may contain dairy."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "This item may contain dairy.",
          chinese: "这款餐品可能含有乳制品。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "item may",
          chinese: "重点词组",
          pronunciation: "item may",
          note: "这句话里的工作关键词。",
          example: "This item may contain dairy."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_054",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_fryer_oven_equipment",
      scenarioTitle: "炸炉和烤箱",
      sequence: 4,
      english: "We cannot guarantee that there will be no cross-contact.",
      chinese: "我们无法保证完全不会发生过敏原交叉接触。",
      scenario: "使用炸炉、烤箱和厨房设备时听懂指令。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_054-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_054-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "We cannot promise zero cross-contact.",
        "There may still be cross-contact."
      ],
      recommendedResponses: [
        "I will check the cannot guarantee first.",
        "Which supply is for cannot guarantee?",
        "I will finish the cannot guarantee before moving on."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "We cannot guarantee that there will be no cross-contact.",
          chinese: "我们无法保证完全不会发生过敏原交叉接触。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "cannot guarantee",
          chinese: "后厨清洁表达",
          pronunciation: "KITCH-en KLEE-ning",
          note: "用于洗碗、清洁、拖地和关店流程。 这里重点看 “cannot guarantee” 在句子里的用法。",
          example: "Clean the station."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_055",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 55,
      english: "Use fresh gloves for this order.",
      chinese: "这份订单要换一副新手套。",
      scenario: "处理特殊饮食或过敏订单时，更换手套只是控制措施之一，还需按门店过敏流程操作。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_055-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_055-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Use fresh gloves for this order."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Use fresh gloves for this order.",
          chinese: "这份订单要换一副新手套。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "gloves",
          chinese: "手套",
          pronunciation: "gluvz",
          note: "食品操作时戴的手套。",
          example: "Put on your gloves."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_056",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 56,
      english: "Keep raw chicken away from ready-to-eat food.",
      chinese: "生鸡肉要和即食食品分开。",
      scenario: "生鸡肉必须与熟食、蔬菜和即食食品分区存放和处理。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_056-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_056-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Keep raw chicken away from ready-to-eat food."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Keep raw chicken away from ready-to-eat food.",
          chinese: "生鸡肉要和即食食品分开。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Keep raw",
          chinese: "重点词组",
          pronunciation: "Keep raw",
          note: "这句话里的工作关键词。",
          example: "Keep raw chicken away from ready-to-eat food."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_057",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 57,
      english: "Wash your hands before returning to the line.",
      chinese: "回到岗位前先洗手。",
      scenario: "员工离开岗位、处理垃圾或接触污染物后，按规定洗手；如接下来需要戴手套处理食品，应在洗手后换上干净的新手套。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_057-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_057-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Wash your hands before returning to the line."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Wash your hands before returning to the line.",
          chinese: "回到岗位前先洗手。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Wash your",
          chinese: "重点词组",
          pronunciation: "Wash your",
          note: "这句话里的工作关键词。",
          example: "Wash your hands before returning to the line."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_058",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_floor_mopping",
      scenarioTitle: "扫地和拖地",
      sequence: 4,
      english: "Do not serve food that fell on the floor.",
      chinese: "掉到地上的食物不能提供给顾客。",
      scenario: "扫地、拖地、地垫和小心地滑标志。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_058-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_058-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please don’t serve food that fell on the floor."
      ],
      recommendedResponses: [
        "I will clean the serve food now.",
        "Which cleaner should I use?",
        "I will put the sign out first."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Do not serve food that fell on the floor.",
          chinese: "掉到地上的食物不能提供给顾客。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "floor",
          chinese: "地面",
          pronunciation: "flor",
          note: "餐厅地面，湿滑时要放警示牌。",
          example: "The floor is wet."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_059",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 59,
      english: "Check the food temperature before serving it.",
      chinese: "出餐前检查食品温度。",
      scenario: "按门店食品安全标准使用清洁温度计检查关键食品温度。具体数值应以当地法规和门店标准为准。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_059-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_059-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Check the food temperature before serving it."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Check the food temperature before serving it.",
          chinese: "出餐前检查食品温度。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Check food",
          chinese: "重点词组",
          pronunciation: "Check food",
          note: "这句话里的工作关键词。",
          example: "Check the food temperature before serving it."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_060",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 60,
      english: "When in doubt, throw it out.",
      chinese: "不确定食品是否安全时，就把它丢掉。",
      scenario: "食品时间、温度、污染或保存状态不确定时，不要冒险提供给顾客。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_060-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_060-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "When in doubt, throw it out."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "When in doubt, throw it out.",
          chinese: "不确定食品是否安全时，就把它丢掉。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "When in",
          chinese: "重点词组",
          pronunciation: "When in",
          note: "这句话里的工作关键词。",
          example: "When in doubt, throw it out."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_061",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_general",
      scenarioTitle: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      sequence: 61,
      english: "We're out of chicken breasts. Please mark the item as sold out.",
      chinese: "鸡胸肉卖完了，请把这个餐品标记为售罄。",
      scenario: "厨房确认某种原料已经用完后，及时通知前台或线上系统停止销售。“86”是部分北美餐厅会使用的行话，应作为可能听到的表达，不作为初学者唯一主句。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Coworker",
      roleZh: "同事可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_061-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_061-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Coworker",
      speakerRoleZh: "同事可能会说",
      variants: [
        "We're out of chicken breasts. Please mark the item as sold out."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事",
          english: "We're out of chicken breasts. Please mark the item as sold out.",
          chinese: "鸡胸肉卖完了，请把这个餐品标记为售罄。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "We're out",
          chinese: "重点词组",
          pronunciation: "We're out",
          note: "这句话里的工作关键词。",
          example: "We're out of chicken breasts. Please mark the item as sold out."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_062",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 62,
      english: "We're backed up in the kitchen. We need help with the orders.",
      chinese: "厨房订单积压了，我们需要支援。",
      scenario: "高峰期厨房订单积压时，请求主管调配人员，并让前台如实更新等待时间。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Worker",
      roleZh: "后厨员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_062-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_062-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Worker",
      speakerRoleZh: "后厨员工要说",
      variants: [
        "We're backed up in the kitchen. We need help with the orders."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "后厨员工",
          english: "We're backed up in the kitchen. We need help with the orders.",
          chinese: "厨房订单积压了，我们需要支援。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "We're backed",
          chinese: "重点词组",
          pronunciation: "We're backed",
          note: "这句话里的工作关键词。",
          example: "We're backed up in the kitchen. We need help with the orders."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_063",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_prep_work",
      scenarioTitle: "备菜",
      sequence: 4,
      english: "Keep cleaning chemicals away from food and prep areas.",
      chinese: "清洁化学品要远离食品和备餐区域。",
      scenario: "切菜、称重、准备食材和确认数量。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_063-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_063-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Keep cleaning chemicals away from prep areas.",
        "Store chemicals away from food."
      ],
      recommendedResponses: [
        "I will clean the Keep cleaning now.",
        "Which cleaner should I use?",
        "I will put the sign out first."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Keep cleaning chemicals away from food and prep areas.",
          chinese: "清洁化学品要远离食品和备餐区域。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Keep cleaning",
          chinese: "后厨清洁表达",
          pronunciation: "KITCH-en KLEE-ning",
          note: "用于洗碗、清洁、拖地和关店流程。 这里重点看 “Keep cleaning” 在句子里的用法。",
          example: "Clean the station."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_064",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_table_counter_cleaning",
      scenarioTitle: "清洁桌面和设备",
      sequence: 6,
      english: "Do not thaw meat on the counter. Follow the procedure.",
      chinese: "不要把肉放在台面上解冻。按流程操作。",
      scenario: "擦桌子、柜台、饮料台和设备表面。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_064-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_064-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Do not thaw meat on the counter.",
        "Use the approved thawing procedure."
      ],
      recommendedResponses: [
        "Okay, I won’t thaw it there.",
        "Where should I thaw it?",
        "I’ll follow the procedure."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Do not thaw meat on the counter. Follow the procedure.",
          chinese: "不要把肉放在台面上解冻。按流程操作。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I won’t thaw it there.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "procedure",
          chinese: "流程；规定步骤",
          pronunciation: "proh-SEE-jer",
          note: "餐厅工作中必须按步骤做的流程。",
          example: "Follow the procedure."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_065",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_prep_work",
      scenarioTitle: "备菜",
      sequence: 5,
      english: "Label and date the prep container before putting it away.",
      chinese: "把备料盒收起来之前，要贴标签并写上日期。",
      scenario: "切菜、称重、准备食材和确认数量。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_065-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_065-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Date and label the prep container first.",
        "Put the label and date on the container."
      ],
      recommendedResponses: [
        "I will check the label first.",
        "Which supply is for label?",
        "I will finish the label before moving on."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Label and date the prep container before putting it away.",
          chinese: "把备料盒收起来之前，要贴标签并写上日期。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "label",
          chinese: "贴标签；标签",
          pronunciation: "LAY-bul",
          note: "写上名字、日期或订单信息。",
          example: "Label the box."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_066",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_floor_mopping",
      scenarioTitle: "扫地和拖地",
      sequence: 3,
      english: "Check and record the holding temperature.",
      chinese: "检查并记录食品的保温或冷藏温度。",
      scenario: "扫地、拖地、地垫和小心地滑标志。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_066-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_066-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Write down the holding temperature.",
        "Check and record the food temperature."
      ],
      recommendedResponses: [
        "I will check the Check record first.",
        "Which supply is for Check record?",
        "I will finish the Check record before moving on."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Check and record the holding temperature.",
          chinese: "检查并记录食品的保温或冷藏温度。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Check record",
          chinese: "后厨清洁表达",
          pronunciation: "KITCH-en KLEE-ning",
          note: "用于洗碗、清洁、拖地和关店流程。 这里重点看 “Check record” 在句子里的用法。",
          example: "Clean the station."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_067",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 67,
      english: "Follow the fryer safety procedure when filtering or changing the oil.",
      chinese: "过滤或更换炸油时，要按照炸炉安全流程操作。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_067-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_067-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Follow the fryer safety procedure when filtering or changing the oil."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Follow the fryer safety procedure when filtering or changing the oil.",
          chinese: "过滤或更换炸油时，要按照炸炉安全流程操作。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Follow fryer",
          chinese: "重点词组",
          pronunciation: "Follow fryer",
          note: "这句话里的工作关键词。",
          example: "Follow the fryer safety procedure when filtering or changing the oil."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_068",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 68,
      english: "The order is missing fries. Can you make them right away?",
      chinese: "这份订单少了薯条，可以马上补做吗？",
      scenario: "发现堂食、外带或外卖订单漏装餐品时，前台或出餐人员通知厨房尽快补做。“on the fly”可作为厨房行话的听力补充。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Coworker",
      roleZh: "同事可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_068-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_068-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Coworker",
      speakerRoleZh: "同事可能会说",
      variants: [
        "The order is missing fries. Can you make them right away, please?"
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事",
          english: "The order is missing fries. Can you make them right away?",
          chinese: "这份订单少了薯条，可以马上补做吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order missing",
          chinese: "重点词组",
          pronunciation: "order missing",
          note: "这句话里的工作关键词。",
          example: "The order is missing fries. Can you make them right away?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_069",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_floor_mopping",
      scenarioTitle: "扫地和拖地",
      sequence: 5,
      english: "Let me check the ingredient information and ask the kitchen.",
      chinese: "我核对一下配料信息，并向厨房确认。",
      scenario: "扫地、拖地、地垫和小心地滑标志。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_069-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_069-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "I will ask the kitchen about the ingredients.",
        "Let me check the ingredient information."
      ],
      recommendedResponses: [
        "I will check the form first.",
        "Which supply is for form?",
        "I will finish the form before moving on."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Let me check the ingredient information and ask the kitchen.",
          chinese: "我核对一下配料信息，并向厨房确认。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "form",
          chinese: "表格",
          pronunciation: "form-sound",
          note: "需要填写个人信息的纸或网页。",
          example: "Fill out the form."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_070",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_fryer_oven_equipment",
      scenarioTitle: "炸炉和烤箱",
      sequence: 2,
      english: "Is the same fryer used for other foods?",
      chinese: "这些食物是不是共用同一个炸炉？",
      scenario: "使用炸炉、烤箱和厨房设备时听懂指令。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_070-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_070-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Is this the same fryer used for other foods?"
      ],
      recommendedResponses: [
        "I will check the fryer first.",
        "Which supply is for fryer?",
        "I will finish the fryer before moving on."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Is the same fryer used for other foods?",
          chinese: "这些食物是不是共用同一个炸炉？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "fryer",
          chinese: "炸炉",
          pronunciation: "FRY-er",
          note: "炸薯条、鸡翅等使用的机器。",
          example: "Check the fryer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_071",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_fryer_oven_equipment",
      scenarioTitle: "炸炉和烤箱",
      sequence: 3,
      english: "We cannot guarantee no cross-contact.",
      chinese: "我们不能保证完全没有交叉接触。",
      scenario: "使用炸炉、烤箱和厨房设备时听懂指令。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_071-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_071-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "We can’t promise there is no cross-contact.",
        "There may be cross-contact."
      ],
      recommendedResponses: [
        "I will check the cross-contact first.",
        "Which supply is for cross-contact?",
        "I will finish the cross-contact before moving on."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "We cannot guarantee no cross-contact.",
          chinese: "我们不能保证完全没有交叉接触。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "I’ll wash my hands now.",
          chinese: "我现在去洗手。"
        }
      ],
      vocabularyNotes: [
        {
          term: "cross-contact",
          chinese: "交叉接触",
          pronunciation: "cross contact",
          note: "食物接触到过敏原或其他食物。",
          example: "There may be cross-contact."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_072",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 72,
      english: "I'm here to pick up an online order.",
      chinese: "我是来取网上订单的。",
      scenario: "顾客到店领取网上订单，员工通过姓名或订单号核对。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_072-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_072-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "I'm here to pick up an online order."
      ],
      recommendedResponses: [
        "Sure, I can help.",
        "Let me check that for you.",
        "I’m sorry about that."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "I'm here to pick up an online order.",
          chinese: "我是来取网上订单的。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check that for you.",
          chinese: "我帮你查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "I'm here",
          chinese: "重点词组",
          pronunciation: "I'm here",
          note: "这句话里的工作关键词。",
          example: "I'm here to pick up an online order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_073",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 73,
      english: "Thank you. The kitchen says it needs about five more minutes.",
      chinese: "谢谢。厨房说大约还需要五分钟。",
      scenario: "顾客已经等待较久，员工查询厨房并给出新的合理预计时间。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_073-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_073-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Thank you. The kitchen says it needs about five more minutes."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Thank you. The kitchen says it needs about five more minutes.",
          chinese: "谢谢。厨房说大约还需要五分钟。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Thank kitchen",
          chinese: "重点词组",
          pronunciation: "Thank kitchen",
          note: "这句话里的工作关键词。",
          example: "Thank you. The kitchen says it needs about five more minutes."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_074",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 74,
      english: "We're backed up. We need help on the fry station.",
      chinese: "订单积压了，炸台需要人支援。",
      scenario: "厨房订单积压，后厨员工向主管请求支援，并让前台更新顾客等待时间。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Worker",
      roleZh: "后厨员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_074-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_074-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Worker",
      speakerRoleZh: "后厨员工要说",
      variants: [
        "We're backed up. We need help on the fry station."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "后厨员工",
          english: "We're backed up. We need help on the fry station.",
          chinese: "订单积压了，炸台需要人支援。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "We're backed",
          chinese: "重点词组",
          pronunciation: "We're backed",
          note: "这句话里的工作关键词。",
          example: "We're backed up. We need help on the fry station."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_075",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 75,
      english: "How many orders are waiting?",
      chinese: "现在有多少份订单在等？",
      scenario: "厨房订单积压，后厨员工向主管请求支援，并让前台更新顾客等待时间。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_075-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_075-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "How many orders are waiting, please?"
      ],
      recommendedResponses: [
        "One, please.",
        "That’s all, thank you.",
        "Can I have a minute?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "How many orders are waiting?",
          chinese: "现在有多少份订单在等？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "One, please.",
          chinese: "一个，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "How many",
          chinese: "重点词组",
          pronunciation: "How many",
          note: "这句话里的工作关键词。",
          example: "How many orders are waiting?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_076",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 76,
      english: "We're about fifteen minutes behind.",
      chinese: "我们现在大约晚了十五分钟。",
      scenario: "厨房订单积压，后厨员工向主管请求支援，并让前台更新顾客等待时间。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Worker",
      roleZh: "后厨员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_076-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_076-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "后厨员工要说",
      variants: [
        "We're about fifteen minutes behind."
      ],
      recommendedResponses: [
        "Step aside.",
        "Don’t turn around suddenly.",
        "Say “heard” and make room."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "后厨员工",
          english: "We're about fifteen minutes behind.",
          chinese: "我们现在大约晚了十五分钟。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Step aside.",
          chinese: "让到一边。"
        }
      ],
      vocabularyNotes: [
        {
          term: "We're about",
          chinese: "重点词组",
          pronunciation: "We're about",
          note: "这句话里的工作关键词。",
          example: "We're about fifteen minutes behind."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_077",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 77,
      english: "Order 84 needs light sauce, with one extra sauce on the side.",
      chinese: "84号订单要少酱，另外加一杯酱放旁边。",
      scenario: "前台把顾客少酱、酱放旁边等要求传到后厨，后厨复述确认。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_077-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_077-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Order 84 needs light sauce, with one extra sauce on the side."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Order 84 needs light sauce, with one extra sauce on the side.",
          chinese: "84号订单要少酱，另外加一杯酱放旁边。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "on the side",
          chinese: "放旁边",
          pronunciation: "on the side",
          note: "酱料不拌进去，单独放。",
          example: "Sauce on the side, please."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_078",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 78,
      english: "Got it. Light sauce and one extra cup on the side.",
      chinese: "知道了，少酱，另外一杯酱单独装。",
      scenario: "前台把顾客少酱、酱放旁边等要求传到后厨，后厨复述确认。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Worker",
      roleZh: "后厨员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_078-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_078-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Worker",
      speakerRoleZh: "后厨员工要说",
      variants: [
        "Got it. Light sauce and one extra cup on the side."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "后厨员工",
          english: "Got it. Light sauce and one extra cup on the side.",
          chinese: "知道了，少酱，另外一杯酱单独装。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "on the side",
          chinese: "放旁边",
          pronunciation: "on the side",
          note: "酱料不拌进去，单独放。",
          example: "Sauce on the side, please."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_079",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_line_orders",
      scenarioTitle: "备餐线和出餐订单",
      sequence: 79,
      english: "Okay. I'll check the receipt before sealing the bag.",
      chinese: "好的，我会在封袋前核对小票。",
      scenario: "前台把顾客少酱、酱放旁边等要求传到后厨，后厨复述确认。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Worker",
      roleZh: "后厨员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_079-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_079-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "后厨员工要说",
      variants: [
        "Okay. I'll check the receipt before sealing the bag."
      ],
      recommendedResponses: [
        "Card, please.",
        "Yes, please.",
        "No, thank you."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "后厨员工",
          english: "Okay. I'll check the receipt before sealing the bag.",
          chinese: "好的，我会在封袋前核对小票。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Card, please.",
          chinese: "刷卡。"
        }
      ],
      vocabularyNotes: [
        {
          term: "receipt",
          chinese: "收据",
          pronunciation: "re-CEIPT",
          note: "付款后的小票。",
          example: "Would you like a receipt?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_080",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 80,
      english: "Add dish soap to the sink.",
      chinese: "往水槽里加洗洁精。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_080-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_080-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Add dish soap to the sink."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Add dish soap to the sink.",
          chinese: "往水槽里加洗洁精。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "dish soap",
          chinese: "洗碗清洁剂",
          pronunciation: "dish soap",
          note: "洗碗用清洁剂。",
          example: "Add dish soap."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_081",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 9,
      english: "Use the dish detergent.",
      chinese: "使用洗碗清洁剂。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_081-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_081-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 1",
      variants: [
        "Use the dish soap.",
        "Use the soap for dishes."
      ],
      recommendedResponses: [
        "Okay, I will use the dish detergent.",
        "How much should I add?",
        "Where is the dish detergent?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Use the dish detergent.",
          chinese: "使用洗碗清洁剂。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay. Which supplies should I use?",
          chinese: "好的。我应该用哪些用品？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Use the supplies by the sink.",
          chinese: "用水槽旁边的用品。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Got it. I will do it now.",
          chinese: "明白。我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "dish detergent",
          chinese: "洗碗清洁剂",
          pronunciation: "dish dee-TUR-jent",
          note: "专门用来洗餐具，不等于桌面清洁剂。",
          example: "Use dish detergent."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_082",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 82,
      english: "Fill the sink with warm water.",
      chinese: "往水槽里放温水。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_082-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_082-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_083",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 83,
      english: "Scrape the food off first.",
      chinese: "先把食物残渣刮掉。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_083-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_083-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_084",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 10,
      english: "Rinse the dishes first.",
      chinese: "先把盘子冲洗一下。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_084-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_084-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 1",
      variants: [
        "Rinse the plates first.",
        "Give the dishes a quick rinse first."
      ],
      recommendedResponses: [
        "Okay, I will rinse them first.",
        "Should I scrape them first?",
        "I will rinse them before washing."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "rinse",
          chinese: "冲洗",
          pronunciation: "rins",
          note: "用水冲一下，不一定是完整清洗。",
          example: "Rinse the cup."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_085",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 6,
      english: "Wash the dishes in the first sink.",
      chinese: "在第一个水槽里清洗餐具。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_085-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_085-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 2",
      variants: [
        "Wash them in the first sink.",
        "The first sink is for washing."
      ],
      recommendedResponses: [
        "Okay, first sink for washing.",
        "Do I add detergent here?",
        "I will wash them first."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "first sink",
          chinese: "第一个水槽",
          pronunciation: "furst sink",
          note: "三槽水池流程里，第一个通常用于清洗。",
          example: "Wash in the first sink."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_086",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 86,
      english: "Rinse them in the second sink.",
      chinese: "在第二个水槽里冲洗。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_086-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_086-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_087",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 87,
      english: "Sanitize them in the third sink.",
      chinese: "在第三个水槽里消毒。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_087-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_087-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_088",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 88,
      english: "Check the sanitizer concentration.",
      chinese: "检查消毒液浓度。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_088-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_088-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_089",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 89,
      english: "Use a test strip.",
      chinese: "使用测试纸。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_089-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_089-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_090",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 90,
      english: "The sanitizer is too weak.",
      chinese: "消毒液浓度太低。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_090-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_090-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_091",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 91,
      english: "The sanitizer is too strong.",
      chinese: "消毒液浓度太高。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_091-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_091-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_092",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 92,
      english: "Change the sanitizer water.",
      chinese: "更换消毒水。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_092-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_092-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_093",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 93,
      english: "Let the dishes air-dry.",
      chinese: "让餐具自然风干。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_093-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_093-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_094",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 94,
      english: "Don’t dry them with a towel.",
      chinese: "不要用毛巾擦干。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_094-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_094-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_095",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 95,
      english: "Put the clean dishes away.",
      chinese: "把干净餐具收好。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_095-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_095-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_096",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 96,
      english: "These dishes are still greasy.",
      chinese: "这些餐具还有油。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_096-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_096-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_097",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 97,
      english: "These dishes are still dirty.",
      chinese: "这些餐具还没洗干净。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_097-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_097-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_098",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 1,
      english: "Wash them again.",
      chinese: "再洗一遍。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_098-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_098-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 1",
      variants: [
        "Clean them again.",
        "Run them through again."
      ],
      recommendedResponses: [
        "Okay, I will wash them again.",
        "They are still greasy.",
        "Should I use more detergent?"
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "again",
          chinese: "再一次",
          pronunciation: "uh-GEN",
          note: "表示重复做同一个动作。",
          example: "Try again."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_099",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 3,
      english: "The dishwasher is full.",
      chinese: "洗碗机满了。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_099-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_099-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "The dish machine is full.",
        "There is no room in the dishwasher."
      ],
      recommendedResponses: [
        "Start the dishwasher.",
        "Unload the clean dishes first.",
        "Wait until this load is done."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "dishwasher is full",
          chinese: "洗碗机满了",
          pronunciation: "DISH-wash-er iz ful",
          note: "表示洗碗机里已经放满，不能再加。",
          example: "The trash can is full."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_100",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 2,
      english: "Start the dishwasher.",
      chinese: "启动洗碗机。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_100-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_100-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 1",
      variants: [
        "Turn on the dishwasher.",
        "Run the dishwasher."
      ],
      recommendedResponses: [
        "Okay, I will start it.",
        "Is it loaded correctly?",
        "Which button do I press?"
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "start the dishwasher",
          chinese: "启动洗碗机",
          pronunciation: "start thuh DISH-wash-er",
          note: "start 在这里表示让机器开始运行。",
          example: "Start the machine."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_101",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 5,
      english: "The dishwasher is not draining.",
      chinese: "洗碗机不排水。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_101-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_101-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "The dish machine is not draining.",
        "Water is not draining from the dishwasher."
      ],
      recommendedResponses: [
        "Tell the manager.",
        "Check the filter first.",
        "Do not keep running it."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "not draining",
          chinese: "不排水",
          pronunciation: "not DRAY-ning",
          note: "机器里的水排不出去。",
          example: "The sink is not draining."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_102",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 7,
      english: "The dishwasher is not getting hot enough.",
      chinese: "洗碗机温度不够高。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/kitchen_cleaning_102-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_102-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [
        "The dishwasher is not hot enough.",
        "The water is not getting hot enough."
      ],
      recommendedResponses: [
        "Tell the supervisor.",
        "Do not use those dishes yet.",
        "Check the temperature."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "hot enough",
          chinese: "温度够高",
          pronunciation: "hot ee-NUF",
          note: "enough 表示达到需要的程度。",
          example: "Is it hot enough?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_103",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 4,
      english: "Clean the dishwasher filter.",
      chinese: "清洗洗碗机过滤器。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_103-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_103-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 1",
      variants: [
        "Clean the filter in the dishwasher.",
        "Take out and clean the dishwasher filter."
      ],
      recommendedResponses: [
        "Okay, I will clean the filter.",
        "Can you show me how to remove it?",
        "Should I turn it off first?"
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "filter",
          chinese: "过滤器",
          pronunciation: "FIL-ter",
          note: "用来挡住食物残渣或脏东西的部件。",
          example: "Clean the filter."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_104",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 8,
      english: "Don’t mix chemicals.",
      chinese: "不要混合清洁化学品。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_104-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_104-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "dishwashing",
        "three_compartment_sink",
        "cleaning",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 1",
      variants: [
        "Never mix chemicals.",
        "Do not put chemicals together."
      ],
      recommendedResponses: [
        "I will check the mix chemicals first.",
        "Which supply is for mix chemicals?",
        "I will finish the mix chemicals before moving on."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "mix chemicals",
          chinese: "混合化学品",
          pronunciation: "miks KEM-i-kulz",
          note: "清洁剂混合可能产生危险气体，听到后要停止并询问。",
          example: "Do not mix chemicals."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_105",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_table_counter_cleaning",
      scenarioTitle: "清洁桌面和设备",
      sequence: 2,
      english: "Wipe the table.",
      chinese: "把桌子擦干净。",
      scenario: "擦桌子、柜台、饮料台和设备表面。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_105-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_105-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "front_of_house",
        "table_cleaning",
        "sanitizing",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 1",
      variants: [
        "Wipe down the table.",
        "Clean off the table."
      ],
      recommendedResponses: [
        "Okay, I will wipe it now.",
        "Should I use sanitizer after?",
        "Where is the clean cloth?"
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "Wipe table",
          chinese: "后厨清洁表达",
          pronunciation: "KITCH-en KLEE-ning",
          note: "用于洗碗、清洁、拖地和关店流程。 这里重点看 “Wipe table” 在句子里的用法。",
          example: "Clean the station."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_106",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_table_counter_cleaning",
      scenarioTitle: "清洁桌面和设备",
      sequence: 3,
      english: "Clean the table.",
      chinese: "清洁桌面。",
      scenario: "擦桌子、柜台、饮料台和设备表面。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_106-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_106-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "front_of_house",
        "table_cleaning",
        "sanitizing",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 1",
      variants: [
        "Clean this table.",
        "Make sure the table is clean."
      ],
      recommendedResponses: [
        "Okay, I will clean it.",
        "Should I sanitize it too?",
        "I will use a clean cloth."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "clean the table",
          chinese: "清洁桌面",
          pronunciation: "kleen thuh TAY-bul",
          note: "可以指擦掉脏东西、食物残渣等。",
          example: "Clean the table first."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_107",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_table_counter_cleaning",
      scenarioTitle: "清洁桌面和设备",
      sequence: 5,
      english: "Spray the cleaner on the cloth.",
      chinese: "把清洁剂喷在抹布上。",
      scenario: "擦桌子、柜台、饮料台和设备表面。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_107-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_107-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "front_of_house",
        "table_cleaning",
        "sanitizing",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 2",
      variants: [
        "Spray the cloth, not the food area.",
        "Put cleaner on the cloth first."
      ],
      recommendedResponses: [
        "Okay, I will spray the cloth.",
        "I will not spray near food.",
        "Which cleaner should I use?"
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "on the cloth",
          chinese: "喷在抹布上",
          pronunciation: "on thuh klawth",
          note: "不是直接喷到食物或桌面附近。",
          example: "Spray it on the cloth."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_108",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗",
      sequence: 108,
      english: "Don’t spray near the food.",
      chinese: "不要在食物旁边喷清洁剂。",
      scenario: "洗碗机、洗洁精、餐具清洗和摆放。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_108-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_108-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "front_of_house",
        "table_cleaning",
        "sanitizing",
        "release_v1",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_109",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_table_counter_cleaning",
      scenarioTitle: "清洁桌面和设备",
      sequence: 4,
      english: "Use the table cleaner.",
      chinese: "使用桌面清洁剂。",
      scenario: "擦桌子、柜台、饮料台和设备表面。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_109-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_109-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "front_of_house",
        "table_cleaning",
        "sanitizing",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 1",
      variants: [
        "Use the cleaner for tables.",
        "Use the table cleaning spray."
      ],
      recommendedResponses: [
        "Okay, I will use the table cleaner.",
        "Where is the table cleaner?",
        "Should I sanitize after cleaning?"
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "table cleaner",
          chinese: "桌面清洁剂",
          pronunciation: "TAY-bul KLEE-ner",
          note: "用于桌面，不要和洗碗剂或食品消毒剂混用。",
          example: "Use table cleaner."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "kitchen_cleaning_110",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_three_sink",
      scenarioTitle: "三槽水池",
      sequence: 1,
      english: "Sanitize the table after cleaning it.",
      chinese: "清洁以后给桌面消毒。",
      scenario: "清洗、冲洗、消毒三槽流程。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_110-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_110-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "front_of_house",
        "table_cleaning",
        "sanitizing",
        "release_v1",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 1",
      variants: [
        "Clean it first, then sanitize it.",
        "Sanitize the table after you wipe it."
      ],
      recommendedResponses: [
        "Okay, clean first, then sanitize.",
        "Which sanitizer should I use?",
        "I will let it air-dry."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Sanitize the table after cleaning it.",
          chinese: "清洁以后给桌面消毒。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay. Which supplies should I use?",
          chinese: "好的。我应该用哪些用品？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Use the supplies by the sink.",
          chinese: "用水槽旁边的用品。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Got it. I will do it now.",
          chinese: "明白。我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "sanitize",
          chinese: "消毒",
          pronunciation: "SAN-i-tize",
          note: "餐厅里常用于食品接触表面或餐具消毒。",
          example: "Sanitize the table."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_001",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_greeting_order",
      scenarioTitle: "前台迎客",
      sequence: 3,
      english: "What can I get for you?",
      chinese: "您想点些什么？",
      scenario: "顾客进店时欢迎、开始点餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_001-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_001-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "What would you like to order?"
      ],
      recommendedResponses: [
        "Sure. I will confirm the order.",
        "Please check the screen."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "What can I get for you?",
          chinese: "您想点些什么？"
        },
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "Can I get a chicken combo?",
          chinese: "我可以要一个鸡肉套餐吗？"
        }
      ],
      vocabularyNotes: [
        {
          term: "What",
          chinese: "前台收银表达",
          pronunciation: "frunt-KOWN-ter",
          note: "用于点餐、收银、收据和顾客服务。 这里重点看 “What” 在句子里的用法。",
          example: "Help the customer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_002",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 2,
      english: "Would you like the combo or just the chicken?",
      chinese: "您想要套餐，还是只要鸡肉单点？",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_002-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_002-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Do you want the combo or just the chicken?",
        "Would you want the combo or just the chicken?"
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Would you like the combo or just the chicken?",
          chinese: "您想要套餐，还是只要鸡肉单点？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "No, thank you.",
          chinese: "不用了，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "like combo",
          chinese: "重点词组",
          pronunciation: "like combo",
          note: "这句话里的工作关键词。",
          example: "Would you like the combo or just the chicken?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_003",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 3,
      english: "What flavor would you like?",
      chinese: "您想要什么口味？",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_003-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_003-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "What exactly flavor would you like?",
        "What flavor would you like, please?"
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "What flavor would you like?",
          chinese: "您想要什么口味？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "What flavor",
          chinese: "重点词组",
          pronunciation: "What flavor",
          note: "这句话里的工作关键词。",
          example: "What flavor would you like?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_004",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 9,
      english: "Tossed or on the side?",
      chinese: "您想拌酱，还是把酱放在旁边？",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_004-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_004-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Tossed or on the side, please?"
      ],
      recommendedResponses: [
        "I will confirm the on the side.",
        "Let me enter the on the side correctly.",
        "Please check the screen for on the side."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "Tossed or on the side?",
          chinese: "您想拌酱，还是把酱放在旁边？"
        },
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "On the side, please.",
          chinese: "请放旁边。"
        }
      ],
      vocabularyNotes: [
        {
          term: "on the side",
          chinese: "放旁边；另放",
          pronunciation: "on-the-side",
          note: "酱料不拌进去，单独放。",
          example: "Sauce on the side."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_005",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 10,
      english: "What drink would you like?",
      chinese: "您想要什么饮料？",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_005-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_005-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Which drink would you like?"
      ],
      recommendedResponses: [
        "Sure. I will confirm the order.",
        "Please check the screen."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "What drink would you like?",
          chinese: "您想要什么饮料？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "What drink",
          chinese: "前台收银表达",
          pronunciation: "frunt-KOWN-ter",
          note: "用于点餐、收银、收据和顾客服务。 这里重点看 “What drink” 在句子里的用法。",
          example: "Help the customer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_006",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_dine_in_takeout",
      scenarioTitle: "堂食和外带",
      sequence: 6,
      english: "For here or to go?",
      chinese: "堂食还是外带？",
      scenario: "收款前确认顾客是在店内用餐还是带走。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_006-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_006-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Dine in or takeout?",
        "Is that for here or to go?",
        "Are you eating here or taking it to go?"
      ],
      recommendedResponses: [
        "For here, please.",
        "To go, please.",
        "It’s for takeout."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "For here or to go?",
          chinese: "堂食还是外带？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "For here, please.",
          chinese: "堂食。"
        }
      ],
      vocabularyNotes: [
        {
          term: "for here",
          chinese: "堂食",
          pronunciation: "for here",
          note: "在店里吃。",
          example: "For here, please."
        },
        {
          term: "to go",
          chinese: "外带",
          pronunciation: "to go",
          note: "带走吃。",
          example: "To go, please."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_007",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 5,
      english: "Anything else?",
      chinese: "还需要别的吗？",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_007-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_007-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Anything else, please?"
      ],
      recommendedResponses: [
        "One, please.",
        "That’s all, thank you.",
        "Can I have a minute?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "Anything else?",
          chinese: "还需要别的吗？"
        },
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "No, that’s all.",
          chinese: "不用，就这些。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Anything else",
          chinese: "前台收银表达",
          pronunciation: "frunt-KOWN-ter",
          note: "用于点餐、收银、收据和顾客服务。 这里重点看 “Anything else” 在句子里的用法。",
          example: "Help the customer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_008",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 7,
      english: "Is that correct?",
      chinese: "这样对吗？",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_008-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_008-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Is this that correct?"
      ],
      recommendedResponses: [
        "I will confirm the correct.",
        "Let me enter the correct correctly.",
        "Please check the screen for correct."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Is that correct?",
          chinese: "这样对吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "correct",
          chinese: "前台收银表达",
          pronunciation: "frunt-KOWN-ter",
          note: "用于点餐、收银、收据和顾客服务。 这里重点看 “correct” 在句子里的用法。",
          example: "Help the customer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_009",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 9,
      english: "Your total is sixteen ninety-nine.",
      chinese: "总共是16.99美元。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_009-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_009-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Your total is sixteen ninety-nine."
      ],
      recommendedResponses: [
        "Card, please.",
        "Yes, please.",
        "No, thank you."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Your total is sixteen ninety-nine.",
          chinese: "总共是16.99美元。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Card, please.",
          chinese: "刷卡。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Your total",
          chinese: "重点词组",
          pronunciation: "Your total",
          note: "这句话里的工作关键词。",
          example: "Your total is sixteen ninety-nine."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_010",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "收银和付款",
      sequence: 10,
      english: "It'll be ready in about ten minutes.",
      chinese: "大约十分钟可以做好。",
      scenario: "现金、刷卡、付款失败和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_010-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_010-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "It'll be ready in about ten minutes."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "It'll be ready in about ten minutes.",
          chinese: "大约十分钟可以做好。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "It'll be",
          chinese: "重点词组",
          pronunciation: "It'll be",
          note: "这句话里的工作关键词。",
          example: "It'll be ready in about ten minutes."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_011",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 6,
      english: "Combo or chicken only?",
      chinese: "套餐还是只要鸡肉单点？",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_011-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_011-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Combo or chicken only, please?"
      ],
      recommendedResponses: [
        "I will confirm the combo.",
        "Let me enter the combo correctly.",
        "Please check the screen for combo."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Combo or chicken only?",
          chinese: "套餐还是只要鸡肉单点？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "combo",
          chinese: "套餐",
          pronunciation: "KOM-boh",
          note: "主食、配菜和饮料组合。",
          example: "Order a combo."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_012",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 7,
      english: "Combo or wings only?",
      chinese: "套餐还是只要鸡翅单点？",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_012-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_012-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Combo or wings only, please?"
      ],
      recommendedResponses: [
        "I will confirm the combo.",
        "Let me enter the combo correctly.",
        "Please check the screen for combo."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Combo or wings only?",
          chinese: "套餐还是只要鸡翅单点？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "combo",
          chinese: "套餐",
          pronunciation: "KOM-boh",
          note: "主食、配菜和饮料组合。",
          example: "Order a combo."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_013",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 13,
      english: "Would you like to make it a combo?",
      chinese: "您想升级成套餐吗？",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_013-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_013-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Do you want to make it a combo?",
        "Would you want to make it a combo?"
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Would you like to make it a combo?",
          chinese: "您想升级成套餐吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "No, thank you.",
          chinese: "不用了，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "like make",
          chinese: "重点词组",
          pronunciation: "like make",
          note: "这句话里的工作关键词。",
          example: "Would you like to make it a combo?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_014",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 14,
      english: "The combo comes with fries, toast, and a drink.",
      chinese: "套餐包括薯条、吐司和一杯饮料。",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_014-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_014-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "The combo comes with fries, toast, and a drink."
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "The combo comes with fries, toast, and a drink.",
          chinese: "套餐包括薯条、吐司和一杯饮料。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "No, thank you.",
          chinese: "不用了，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "combo comes",
          chinese: "重点词组",
          pronunciation: "combo comes",
          note: "这句话里的工作关键词。",
          example: "The combo comes with fries, toast, and a drink."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_015",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 15,
      english: "Just the chicken, no combo?",
      chinese: "只要鸡肉单点，不要套餐，对吗？",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_015-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_015-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Just the chicken, no combo, please?"
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Just the chicken, no combo?",
          chinese: "只要鸡肉单点，不要套餐，对吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Just chicken,",
          chinese: "重点词组",
          pronunciation: "Just chicken,",
          note: "这句话里的工作关键词。",
          example: "Just the chicken, no combo?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_016",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 1,
      english: "Chicken only.",
      chinese: "只要鸡肉单点。",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_016-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_016-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Just chicken, please.",
        "Only the chicken."
      ],
      recommendedResponses: [
        "Sure, I can help with that.",
        "Let me enter that for you.",
        "I will confirm the order first."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Chicken only.",
          chinese: "只要鸡肉单点。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Chicken only",
          chinese: "前台收银表达",
          pronunciation: "frunt-KOWN-ter",
          note: "用于点餐、收银、收据和顾客服务。 这里重点看 “Chicken only” 在句子里的用法。",
          example: "Help the customer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_017",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 2,
      english: "Wings only.",
      chinese: "只要鸡翅单点。",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_017-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_017-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Just wings, please.",
        "Only wings."
      ],
      recommendedResponses: [
        "Sure, I can help with that.",
        "Let me enter that for you.",
        "I will confirm the order first."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Wings only.",
          chinese: "只要鸡翅单点。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Wings only",
          chinese: "前台收银表达",
          pronunciation: "frunt-KOWN-ter",
          note: "用于点餐、收银、收据和顾客服务。 这里重点看 “Wings only” 在句子里的用法。",
          example: "Help the customer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_018",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 3,
      english: "No combo.",
      chinese: "不要套餐。",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_018-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_018-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "No meal combo, please.",
        "I do not want the combo."
      ],
      recommendedResponses: [
        "Sure, I can help with that.",
        "Let me enter that for you.",
        "I will confirm the order first."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "No combo.",
          chinese: "不要套餐。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "combo",
          chinese: "套餐",
          pronunciation: "KOM-boh",
          note: "主食、配菜和饮料组合。",
          example: "Order a combo."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_019",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 19,
      english: "I don't need fries or a drink.",
      chinese: "我不需要薯条和饮料。",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_019-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_019-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "I don't need fries or a drink."
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "I don't need fries or a drink.",
          chinese: "我不需要薯条和饮料。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "No, thank you.",
          chinese: "不用了，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "don't need",
          chinese: "重点词组",
          pronunciation: "don't need",
          note: "这句话里的工作关键词。",
          example: "I don't need fries or a drink."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_020",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 20,
      english: "You can choose two flavors.",
      chinese: "您可以选择两种口味。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_020-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_020-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "You can choose two flavors."
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "You can choose two flavors.",
          chinese: "您可以选择两种口味。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "choose two",
          chinese: "重点词组",
          pronunciation: "choose two",
          note: "这句话里的工作关键词。",
          example: "You can choose two flavors."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_021",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 21,
      english: "Light sauce or regular sauce?",
      chinese: "少酱还是正常酱量？",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_021-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_021-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Light sauce or regular sauce, please?"
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Light sauce or regular sauce?",
          chinese: "少酱还是正常酱量？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Light sauce",
          chinese: "重点词组",
          pronunciation: "Light sauce",
          note: "这句话里的工作关键词。",
          example: "Light sauce or regular sauce?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_022",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 22,
      english: "Would you like extra sauce?",
      chinese: "您需要额外加酱吗？",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_022-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_022-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Do you want extra sauce?",
        "Would you want extra sauce?"
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Would you like extra sauce?",
          chinese: "您需要额外加酱吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "like extra",
          chinese: "重点词组",
          pronunciation: "like extra",
          note: "这句话里的工作关键词。",
          example: "Would you like extra sauce?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_023",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 4,
      english: "Tossed, please.",
      chinese: "请帮我拌酱。",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_023-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_023-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Mix it with the sauce, please.",
        "Toss it in the sauce."
      ],
      recommendedResponses: [
        "Sure, I can help with that.",
        "Let me enter that for you.",
        "I will confirm the order first."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Tossed, please.",
          chinese: "请帮我拌酱。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Tossed",
          chinese: "前台收银表达",
          pronunciation: "frunt-KOWN-ter",
          note: "用于点餐、收银、收据和顾客服务。 这里重点看 “Tossed” 在句子里的用法。",
          example: "Help the customer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_024",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 24,
      english: "Sauce on the side, please.",
      chinese: "请把酱放旁边。",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_024-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_024-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Sauce on the side, please."
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Sauce on the side, please.",
          chinese: "请把酱放旁边。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "on the side",
          chinese: "放旁边",
          pronunciation: "on the side",
          note: "酱料不拌进去，单独放。",
          example: "Sauce on the side, please."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_025",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 5,
      english: "Keep them plain.",
      chinese: "保持原味，不要拌酱。",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_025-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_025-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "No sauce, please.",
        "Leave them plain."
      ],
      recommendedResponses: [
        "Sure, I can help with that.",
        "Let me enter that for you.",
        "I will confirm the order first."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Keep them plain.",
          chinese: "保持原味，不要拌酱。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Keep plain",
          chinese: "前台收银表达",
          pronunciation: "frunt-KOWN-ter",
          note: "用于点餐、收银、收据和顾客服务。 这里重点看 “Keep plain” 在句子里的用法。",
          example: "Help the customer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_026",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 26,
      english: "What would you like to drink?",
      chinese: "您想喝什么？",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_026-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_026-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "What exactly would you like to drink?",
        "What would you like to drink, please?"
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "What would you like to drink?",
          chinese: "您想喝什么？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "No, thank you.",
          chinese: "不用了，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "What like",
          chinese: "重点词组",
          pronunciation: "What like",
          note: "这句话里的工作关键词。",
          example: "What would you like to drink?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_027",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 27,
      english: "Which drink would you like with your combo?",
      chinese: "您的套餐想配哪种饮料？",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_027-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_027-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Which drink would you like with your combo, please?"
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Which drink would you like with your combo?",
          chinese: "您的套餐想配哪种饮料？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "No, thank you.",
          chinese: "不用了，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Which drink",
          chinese: "重点词组",
          pronunciation: "Which drink",
          note: "这句话里的工作关键词。",
          example: "Which drink would you like with your combo?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_028",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 28,
      english: "The drink is included with the combo.",
      chinese: "套餐已经包括饮料。",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_028-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_028-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "The drink is included with the combo."
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "The drink is included with the combo.",
          chinese: "套餐已经包括饮料。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "No, thank you.",
          chinese: "不用了，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "drink included",
          chinese: "重点词组",
          pronunciation: "drink included",
          note: "这句话里的工作关键词。",
          example: "The drink is included with the combo."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_029",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 29,
      english: "Fruit tea or milk tea?",
      chinese: "水果茶还是奶茶？",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_029-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_029-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Fruit tea or milk tea, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Fruit tea or milk tea?",
          chinese: "水果茶还是奶茶？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Fruit tea",
          chinese: "重点词组",
          pronunciation: "Fruit tea",
          note: "这句话里的工作关键词。",
          example: "Fruit tea or milk tea?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_030",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 30,
      english: "Regular ice or less ice?",
      chinese: "正常冰还是少冰？",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_030-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_030-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Regular ice or less ice, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Regular ice or less ice?",
          chinese: "正常冰还是少冰？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Regular ice",
          chinese: "重点词组",
          pronunciation: "Regular ice",
          note: "这句话里的工作关键词。",
          example: "Regular ice or less ice?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_031",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 8,
      english: "Is the drink included?",
      chinese: "饮料包括在套餐里吗？",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_031-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_031-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Is this the drink included?"
      ],
      recommendedResponses: [
        "Sure, I can help with that.",
        "Let me enter that for you.",
        "I will confirm the order first."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Is the drink included?",
          chinese: "饮料包括在套餐里吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "drink included",
          chinese: "前台收银表达",
          pronunciation: "frunt-KOWN-ter",
          note: "用于点餐、收银、收据和顾客服务。 这里重点看 “drink included” 在句子里的用法。",
          example: "Help the customer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_032",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、饮料和酱料",
      sequence: 32,
      english: "Can I choose any drink?",
      chinese: "我可以任选饮料吗？",
      scenario: "确认套餐、口味、饮料和酱料放旁边。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_032-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_032-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Can I choose any drink, please?"
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Can I choose any drink?",
          chinese: "我可以任选饮料吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "choose any",
          chinese: "重点词组",
          pronunciation: "choose any",
          note: "这句话里的工作关键词。",
          example: "Can I choose any drink?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_033",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "收银和付款",
      sequence: 1,
      english: "You can tap your card here.",
      chinese: "您可以在这里感应付款。",
      scenario: "现金、刷卡、付款失败和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_033-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_033-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Tap your card on this reader.",
        "Use your card here."
      ],
      recommendedResponses: [
        "I will confirm the card here.",
        "Let me enter the card here correctly.",
        "Please check the screen for card here."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "You can tap your card here.",
          chinese: "您可以在这里感应银行卡。"
        },
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "Okay, I’ll tap it now.",
          chinese: "好的，我现在感应。"
        }
      ],
      vocabularyNotes: [
        {
          term: "card here",
          chinese: "前台收银表达",
          pronunciation: "frunt-KOWN-ter",
          note: "用于点餐、收银、收据和顾客服务。 这里重点看 “card here” 在句子里的用法。",
          example: "Help the customer."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_034",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "收银和付款",
      sequence: 4,
      english: "Please follow the screen.",
      chinese: "请按照屏幕提示操作。",
      scenario: "现金、刷卡、付款失败和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_034-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_034-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Look at the screen and follow the steps.",
        "Use the prompts on the screen."
      ],
      recommendedResponses: [
        "I will confirm the follow screen.",
        "Let me enter the follow screen correctly.",
        "Please check the screen for follow screen."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Please follow the screen.",
          chinese: "请按照屏幕提示操作。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "screen",
          chinese: "屏幕",
          pronunciation: "skreen",
          note: "收银机或刷卡机上的提示界面。",
          example: "Check the screen."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_035",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "收银和付款",
      sequence: 6,
      english: "Would you like a receipt?",
      chinese: "您需要小票吗？",
      scenario: "现金、刷卡、付款失败和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_035-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_035-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Do you need a receipt?",
        "Would you like your receipt printed?"
      ],
      recommendedResponses: [
        "I will confirm the receipt.",
        "Let me enter the receipt correctly.",
        "Please check the screen for receipt."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Would you like a receipt?",
          chinese: "您需要小票吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "receipt",
          chinese: "小票；收据",
          pronunciation: "ri-SEET",
          note: "付款后的凭证，p 不发音。",
          example: "Print the receipt."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_036",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_wait_pickup",
      scenarioTitle: "等待、订单号和取餐",
      sequence: 36,
      english: "Your order is ready.",
      chinese: "您的订单好了。",
      scenario: "订单完成后通知顾客到柜台领取。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_036-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_036-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Please your order is ready."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Your order is ready.",
          chinese: "您的订单好了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Your order",
          chinese: "重点词组",
          pronunciation: "Your order",
          note: "这句话里的工作关键词。",
          example: "Your order is ready."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_037",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 37,
      english: "Thank you for calling. How can I help you?",
      chinese: "感谢来电。请问有什么可以帮您？",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_037-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_037-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Thank you for calling. How can I help you, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Thank you for calling. How can I help you?",
          chinese: "感谢来电。请问有什么可以帮您？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Thank for",
          chinese: "重点词组",
          pronunciation: "Thank for",
          note: "这句话里的工作关键词。",
          example: "Thank you for calling. How can I help you?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_038",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_wait_pickup",
      scenarioTitle: "等待、订单号和取餐",
      sequence: 38,
      english: "Are you placing an order for pickup?",
      chinese: "您是要下一个自取订单吗？",
      scenario: "来电顾客准备下单时，确认是否为到店自取。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_038-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_038-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Are you placing an order for pickup, please?"
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Are you placing an order for pickup?",
          chinese: "您是要下一个自取订单吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "placing order",
          chinese: "重点词组",
          pronunciation: "placing order",
          note: "这句话里的工作关键词。",
          example: "Are you placing an order for pickup?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_039",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 8,
      english: "Can I get your name for the order?",
      chinese: "请问订单姓名是什么？",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_039-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_039-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I get your name for the order, please?"
      ],
      recommendedResponses: [
        "I will confirm the name order.",
        "Let me enter the name order correctly.",
        "Please check the screen for name order."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Can I get your name for the order?",
          chinese: "请问订单姓名是什么？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order",
          chinese: "订单",
          pronunciation: "OR-der",
          note: "顾客点的餐或外卖单。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_040",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 40,
      english: "Can you repeat your phone number?",
      chinese: "您可以再说一遍电话号码吗？",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_040-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_040-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you repeat your phone number?",
        "Can you please repeat your phone number?"
      ],
      recommendedResponses: [
        "Yes, I’ll show you.",
        "Sure. Watch me first.",
        "Ask me again if it’s not clear."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Can you repeat your phone number?",
          chinese: "您可以再说一遍电话号码吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, I’ll show you.",
          chinese: "可以，我示范给你看。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Sure. Watch me first.",
          chinese: "可以，先看我做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "repeat your",
          chinese: "重点词组",
          pronunciation: "repeat your",
          note: "这句话里的工作关键词。",
          example: "Can you repeat your phone number?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_041",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_wait_pickup",
      scenarioTitle: "等待、订单号和取餐",
      sequence: 41,
      english: "What time would you like to pick it up?",
      chinese: "您想几点来取餐？",
      scenario: "电话预订或预定订单需要确定顾客到店时间。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_041-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_041-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "What exactly time would you like to pick it up?",
        "What time would you like to pick it up, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "What time would you like to pick it up?",
          chinese: "您想几点来取餐？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "What time",
          chinese: "重点词组",
          pronunciation: "What time",
          note: "这句话里的工作关键词。",
          example: "What time would you like to pick it up?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_042",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_wait_pickup",
      scenarioTitle: "等待、订单号和取餐",
      sequence: 42,
      english: "Your pickup time is about twenty minutes from now.",
      chinese: "大约二十分钟后可以取餐。",
      scenario: "向顾客说明预计完成时间和建议到店时间。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_042-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_042-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Your pickup time is about twenty minutes from now."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Your pickup time is about twenty minutes from now.",
          chinese: "大约二十分钟后可以取餐。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Your pickup",
          chinese: "重点词组",
          pronunciation: "Your pickup",
          note: "这句话里的工作关键词。",
          example: "Your pickup time is about twenty minutes from now."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_043",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 9,
      english: "Let me read the order back to you.",
      chinese: "我给您把订单复述一遍。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_043-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_043-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "I will repeat your order back.",
        "Let me confirm the order out loud."
      ],
      recommendedResponses: [
        "I will confirm the read order.",
        "Let me enter the read order correctly.",
        "Please check the screen for read order."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me read the order back to you.",
          chinese: "我给您把订单复述一遍。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order",
          chinese: "订单",
          pronunciation: "OR-der",
          note: "顾客点的餐或外卖单。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_044",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 44,
      english: "The total before tax is twenty-four ninety-nine.",
      chinese: "税前总额是24.99美元。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_044-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_044-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "The total before tax is twenty-four ninety-nine."
      ],
      recommendedResponses: [
        "Card, please.",
        "Yes, please.",
        "No, thank you."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "The total before tax is twenty-four ninety-nine.",
          chinese: "税前总额是24.99美元。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Card, please.",
          chinese: "刷卡。"
        }
      ],
      vocabularyNotes: [
        {
          term: "total before",
          chinese: "重点词组",
          pronunciation: "total before",
          note: "这句话里的工作关键词。",
          example: "The total before tax is twenty-four ninety-nine."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_045",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_wait_pickup",
      scenarioTitle: "等待、订单号和取餐",
      sequence: 45,
      english: "We'll have it ready at the front counter.",
      chinese: "我们会把订单准备好，您到前台取餐即可。",
      scenario: "告诉顾客到店后应在哪里领取预订或电话订单。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_045-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_045-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "We'll have it ready at the front counter."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "We'll have it ready at the front counter.",
          chinese: "我们会把订单准备好，您到前台取餐即可。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "We'll have",
          chinese: "重点词组",
          pronunciation: "We'll have",
          note: "这句话里的工作关键词。",
          example: "We'll have it ready at the front counter."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_046",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_split_change",
      scenarioTitle: "分开付款和找零",
      sequence: 46,
      english: "Can I change my pickup time?",
      chinese: "我可以更改取餐时间吗？",
      scenario: "顾客无法按原定时间到店，要求修改取餐时间时使用。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_046-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_046-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Can I change my pickup time, please?"
      ],
      recommendedResponses: [
        "Sure, I can help.",
        "Let me check that for you.",
        "I’m sorry about that."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Can I change my pickup time?",
          chinese: "我可以更改取餐时间吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check that for you.",
          chinese: "我帮你查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "change my",
          chinese: "重点词组",
          pronunciation: "change my",
          note: "这句话里的工作关键词。",
          example: "Can I change my pickup time?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_047",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_wait_pickup",
      scenarioTitle: "等待、订单号和取餐",
      sequence: 47,
      english: "Can you confirm the pickup number?",
      chinese: "您能确认一下取餐号码吗？",
      scenario: "外卖司机或顾客到店取餐时核对订单号码。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_047-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_047-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you confirm the pickup number?",
        "Can you please confirm the pickup number?"
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Can you confirm the pickup number?",
          chinese: "您能确认一下取餐号码吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "confirm pickup",
          chinese: "重点词组",
          pronunciation: "confirm pickup",
          note: "这句话里的工作关键词。",
          example: "Can you confirm the pickup number?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_048",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 3,
      english: "The order is still being prepared.",
      chinese: "订单还在准备中。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_048-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_048-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "This order is still being prepared.",
        "There is a problem with this."
      ],
      recommendedResponses: [
        "I will confirm the order still.",
        "Let me enter the order still correctly.",
        "Please check the screen for order still."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "The order is still being prepared.",
          chinese: "订单还在准备中。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order",
          chinese: "订单",
          pronunciation: "OR-der",
          note: "顾客点的餐或外卖单。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_049",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_wait_pickup",
      scenarioTitle: "等待、订单号和取餐",
      sequence: 49,
      english: "It should be ready in five more minutes.",
      chinese: "大概还需要五分钟。",
      scenario: "订单接近完成时，给出新的合理等待估计。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_049-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_049-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "It should be ready in five more minutes."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "It should be ready in five more minutes.",
          chinese: "大概还需要五分钟。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "should be",
          chinese: "重点词组",
          pronunciation: "should be",
          note: "这句话里的工作关键词。",
          example: "It should be ready in five more minutes."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_050",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_wait_pickup",
      scenarioTitle: "等待、订单号和取餐",
      sequence: 50,
      english: "Please mark the order as picked up.",
      chinese: "请在平台上把订单标记为已取走。",
      scenario: "把订单交给外卖司机时，要求在平台上完成取餐确认。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_050-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_050-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Can you mark the order as picked up?",
        "Could you please mark the order as picked up?"
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Please mark the order as picked up.",
          chinese: "请在平台上把订单标记为已取走。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "mark order",
          chinese: "重点词组",
          pronunciation: "mark order",
          note: "这句话里的工作关键词。",
          example: "Please mark the order as picked up."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_051",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 51,
      english: "The driver hasn't arrived yet.",
      chinese: "司机还没有到。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_051-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_051-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "The driver hasn't arrived yet."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "The driver hasn't arrived yet.",
          chinese: "司机还没有到。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "driver hasn't",
          chinese: "重点词组",
          pronunciation: "driver hasn't",
          note: "这句话里的工作关键词。",
          example: "The driver hasn't arrived yet."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_052",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 52,
      english: "Please contact the delivery platform for driver updates.",
      chinese: "关于司机进度，请联系外卖平台。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_052-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_052-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Can you contact the delivery platform for driver updates?",
        "Could you please contact the delivery platform for driver updates?"
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Please contact the delivery platform for driver updates.",
          chinese: "关于司机进度，请联系外卖平台。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "contact delivery",
          chinese: "重点词组",
          pronunciation: "contact delivery",
          note: "这句话里的工作关键词。",
          example: "Please contact the delivery platform for driver updates."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_053",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 53,
      english: "One of my items is missing from my order.",
      chinese: "我的订单里少了一样东西。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_053-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_053-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "One of my items is missing from my order."
      ],
      recommendedResponses: [
        "Sure, I can help.",
        "Let me check that for you.",
        "I’m sorry about that."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "One of my items is missing from my order.",
          chinese: "我的订单里少了一样东西。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check that for you.",
          chinese: "我帮你查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "One my",
          chinese: "重点词组",
          pronunciation: "One my",
          note: "这句话里的工作关键词。",
          example: "One of my items is missing from my order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_054",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_tips_receipts",
      scenarioTitle: "小费",
      sequence: 4,
      english: "Let me check the receipt and packing record.",
      chinese: "我核对一下小票和打包记录。",
      scenario: "解释小费屏幕和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_054-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_054-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "I will check the receipt and packing record.",
        "Let me compare the receipt with the packing record."
      ],
      recommendedResponses: [
        "I will confirm the receipt.",
        "Let me enter the receipt correctly.",
        "Please check the screen for receipt."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "Let me check the receipt and packing record.",
          chinese: "我核对一下小票和打包记录。"
        },
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "Okay, thank you.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "receipt",
          chinese: "收据",
          pronunciation: "re-CEIPT",
          note: "付款后的小票。",
          example: "Would you like a receipt?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_055",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 55,
      english: "If the platform approves it, we can remake the missing item.",
      chinese: "如果平台批准，我们可以重做缺少的餐品。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_055-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_055-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "If the platform approves it, we can remake the missing item."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "If the platform approves it, we can remake the missing item.",
          chinese: "如果平台批准，我们可以重做缺少的餐品。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "If platform",
          chinese: "重点词组",
          pronunciation: "If platform",
          note: "这句话里的工作关键词。",
          example: "If the platform approves it, we can remake the missing item."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_056",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 56,
      english: "It looks like there may be an issue with the delivery platform.",
      chinese: "看起来可能是外卖平台方面出现了问题。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_056-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_056-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "It looks like there may be an issue with the delivery platform."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "It looks like there may be an issue with the delivery platform.",
          chinese: "看起来可能是外卖平台方面出现了问题。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "looks like",
          chinese: "重点词组",
          pronunciation: "looks like",
          note: "这句话里的工作关键词。",
          example: "It looks like there may be an issue with the delivery platform."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_057",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 57,
      english: "I'm sorry about that. Let me fix it for you.",
      chinese: "很抱歉。我来帮您处理。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_057-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_057-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "I'm sorry about that. Let me fix it for you."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "I'm sorry about that. Let me fix it for you.",
          chinese: "很抱歉。我来帮您处理。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "I'm sorry",
          chinese: "重点词组",
          pronunciation: "I'm sorry",
          note: "这句话里的工作关键词。",
          example: "I'm sorry about that. Let me fix it for you."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_058",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_tips_receipts",
      scenarioTitle: "小费",
      sequence: 1,
      english: "Can you show me the receipt?",
      chinese: "您能给我看一下小票吗？",
      scenario: "解释小费屏幕和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_058-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_058-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you show me the receipt?",
        "Can you please show me the receipt?"
      ],
      recommendedResponses: [
        "You can pay here.",
        "I can print the receipt for you."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "Can you show me the receipt?",
          chinese: "可以让我看一下小票吗？"
        },
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "Sure, here it is.",
          chinese: "可以，在这里。"
        }
      ],
      vocabularyNotes: [
        {
          term: "receipt",
          chinese: "收据",
          pronunciation: "re-CEIPT",
          note: "付款后的小票。",
          example: "Would you like a receipt?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_059",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 10,
      english: "Was this order placed in store or online?",
      chinese: "这个订单是在店里下的，还是网上下的？",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_059-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_059-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Was this order placed in store or online, please?"
      ],
      recommendedResponses: [
        "I will confirm the order placed.",
        "Let me enter the order placed correctly.",
        "Please check the screen for order placed."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Was this order placed in store or online?",
          chinese: "这个订单是在店里下的，还是网上下的？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order placed",
          chinese: "订单下单",
          pronunciation: "OR-der placed",
          note: "说明订单是在哪里、通过什么方式下的。",
          example: "The order was placed online."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_060",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 60,
      english: "We can remake it right away.",
      chinese: "我们可以马上给您重做。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_060-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_060-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "We can remake it right away."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "We can remake it right away.",
          chinese: "我们可以马上给您重做。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "remake right",
          chinese: "重点词组",
          pronunciation: "remake right",
          note: "这句话里的工作关键词。",
          example: "We can remake it right away."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_061",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 61,
      english: "Let me check whether we can issue a refund.",
      chinese: "我确认一下我们是否可以办理退款。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_061-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_061-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Let me check whether we can issue a refund."
      ],
      recommendedResponses: [
        "Card, please.",
        "Yes, please.",
        "No, thank you."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check whether we can issue a refund.",
          chinese: "我确认一下我们是否可以办理退款。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Card, please.",
          chinese: "刷卡。"
        }
      ],
      vocabularyNotes: [
        {
          term: "refund",
          chinese: "退款",
          pronunciation: "REE-fund",
          note: "把钱退回给顾客。",
          example: "I need a refund."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_062",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 62,
      english: "If approved, the refund may take a few business days.",
      chinese: "如果退款获批，可能需要几个工作日到账。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_062-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_062-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "If approved, the refund may take a few business days."
      ],
      recommendedResponses: [
        "Card, please.",
        "Yes, please.",
        "No, thank you."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "If approved, the refund may take a few business days.",
          chinese: "如果退款获批，可能需要几个工作日到账。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Card, please.",
          chinese: "刷卡。"
        }
      ],
      vocabularyNotes: [
        {
          term: "refund",
          chinese: "退款",
          pronunciation: "REE-fund",
          note: "把钱退回给顾客。",
          example: "I need a refund."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_063",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 63,
      english: "I understand the issue.",
      chinese: "我明白您遇到的问题了。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_063-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_063-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Please i understand the issue."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "I understand the issue.",
          chinese: "我明白您遇到的问题了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "understand issue",
          chinese: "重点词组",
          pronunciation: "understand issue",
          note: "这句话里的工作关键词。",
          example: "I understand the issue."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_064",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 4,
      english: "Let me check with my manager.",
      chinese: "我去和经理确认一下。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_064-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_064-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to ask my manager.",
        "Let me get my manager to check."
      ],
      recommendedResponses: [
        "I will confirm the manager.",
        "Let me enter the manager correctly.",
        "Please check the screen for manager."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check with my manager.",
          chinese: "我去和经理确认一下。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "manager",
          chinese: "经理",
          pronunciation: "MAN-uh-jer",
          note: "处理投诉、退款或复杂问题的人。",
          example: "Call the manager."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_065",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 65,
      english: "The food is too spicy.",
      chinese: "这个食物太辣了。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_065-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_065-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "The food is too spicy."
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "The food is too spicy.",
          chinese: "这个食物太辣了。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "food too",
          chinese: "重点词组",
          pronunciation: "food too",
          note: "这句话里的工作关键词。",
          example: "The food is too spicy."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_066",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 1,
      english: "My order is missing fries.",
      chinese: "我的订单里少了薯条。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_066-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_066-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "My order does not have fries.",
        "The fries are missing from my order."
      ],
      recommendedResponses: [
        "Sure, I can help with that.",
        "Let me enter that for you.",
        "I will confirm the order first."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "My order is missing fries.",
          chinese: "我的订单里少了薯条。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order",
          chinese: "订单",
          pronunciation: "OR-der",
          note: "顾客点的餐或外卖单。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_067",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 2,
      english: "This isn't what I ordered.",
      chinese: "这不是我点的。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_067-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_067-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "This is not the item I ordered.",
        "This order is different from what I asked for."
      ],
      recommendedResponses: [
        "Sure, I can help with that.",
        "Let me enter that for you.",
        "I will confirm the order first."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "This isn't what I ordered.",
          chinese: "这不是我点的。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order",
          chinese: "订单",
          pronunciation: "OR-der",
          note: "顾客点的餐或外卖单。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_068",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_greeting_order",
      scenarioTitle: "前台迎客",
      sequence: 1,
      english: "Hi! Are you ready to order?",
      chinese: "您好！现在可以点餐了吗？",
      scenario: "顾客进店时欢迎、开始点餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_068-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_068-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Hi! Are you ready to order, please?"
      ],
      recommendedResponses: [
        "I will confirm the ready order.",
        "Let me enter the ready order correctly.",
        "Please check the screen for ready order."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Hi! Are you ready to order?",
          chinese: "您好！现在可以点餐了吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order",
          chinese: "订单",
          pronunciation: "OR-der",
          note: "顾客点的餐或外卖单。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_069",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_greeting_order",
      scenarioTitle: "前台迎客",
      sequence: 4,
      english: "It comes with fries and a drink.",
      chinese: "套餐包括薯条和一杯饮料。",
      scenario: "顾客进店时欢迎、开始点餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_069-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_069-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "The combo includes fries and a drink."
      ],
      recommendedResponses: [
        "Great, I’ll take the combo.",
        "Can I change the drink?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "It comes with fries and a drink.",
          chinese: "套餐包括薯条和一杯饮料。"
        },
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "Okay, I’ll take the combo.",
          chinese: "好的，我要套餐。"
        }
      ],
      vocabularyNotes: [
        {
          term: "comes with",
          chinese: "包括；附带",
          pronunciation: "kumz-with",
          note: "说明套餐里包含哪些东西。",
          example: "It comes with rice."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_070",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_greeting_order",
      scenarioTitle: "前台迎客",
      sequence: 2,
      english: "Okay, I'll take the combo.",
      chinese: "好的，我要套餐。",
      scenario: "顾客进店时欢迎、开始点餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_070-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_070-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "I’ll get the combo, please."
      ],
      recommendedResponses: [
        "Sure, I can help with that.",
        "Let me enter that for you.",
        "I will confirm the order first."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Okay, I'll take the combo.",
          chinese: "好的，我要套餐。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Yes, please.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "combo",
          chinese: "套餐",
          pronunciation: "KOM-boh",
          note: "主食、配菜和饮料组合。",
          example: "Order a combo."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_071",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 71,
      english: "Can I get two chicken sandwiches and one order of fries?",
      chinese: "我可以要两个鸡肉三明治和一份薯条吗？",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_071-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_071-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Can I get two chicken sandwiches and one order of fries, please?"
      ],
      recommendedResponses: [
        "Sure, I can help.",
        "Let me check that for you.",
        "I’m sorry about that."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Can I get two chicken sandwiches and one order of fries?",
          chinese: "我可以要两个鸡肉三明治和一份薯条吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check that for you.",
          chinese: "我帮你查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "get two",
          chinese: "重点词组",
          pronunciation: "get two",
          note: "这句话里的工作关键词。",
          example: "Can I get two chicken sandwiches and one order of fries?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_072",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 72,
      english: "Two chicken sandwiches and one order of fries.",
      chinese: "两个鸡肉三明治和一份薯条。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_072-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_072-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Two chicken sandwiches and one order of fries."
      ],
      recommendedResponses: [
        "Sure, I can help.",
        "Let me check that for you.",
        "I’m sorry about that."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Two chicken sandwiches and one order of fries.",
          chinese: "两个鸡肉三明治和一份薯条。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check that for you.",
          chinese: "我帮你查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Two chicken",
          chinese: "重点词组",
          pronunciation: "Two chicken",
          note: "这句话里的工作关键词。",
          example: "Two chicken sandwiches and one order of fries."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_073",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 73,
      english: "Got it. Two chicken sandwiches and one order of fries.",
      chinese: "好的，两个鸡肉三明治和一份薯条。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_073-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_073-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Got it. Two chicken sandwiches and one order of fries."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Got it. Two chicken sandwiches and one order of fries.",
          chinese: "好的，两个鸡肉三明治和一份薯条。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Got Two",
          chinese: "重点词组",
          pronunciation: "Got Two",
          note: "这句话里的工作关键词。",
          example: "Got it. Two chicken sandwiches and one order of fries."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_074",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 74,
      english: "Sure. Would you like to add anything else?",
      chinese: "可以。您还想加别的东西吗？",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_074-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_074-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Sure. Would you like to add anything else, please?"
      ],
      recommendedResponses: [
        "One, please.",
        "That’s all, thank you.",
        "Can I have a minute?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Sure. Would you like to add anything else?",
          chinese: "可以。您还想加别的东西吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "One, please.",
          chinese: "一个，谢谢。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "That’s all, thank you.",
          chinese: "就这些，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Sure like",
          chinese: "重点词组",
          pronunciation: "Sure like",
          note: "这句话里的工作关键词。",
          example: "Sure. Would you like to add anything else?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_075",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 75,
      english: "Can I add extra cheese?",
      chinese: "我可以加一份额外芝士吗？",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_075-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_075-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Can I add extra cheese, please?"
      ],
      recommendedResponses: [
        "Sure, I can help.",
        "Let me check that for you.",
        "I’m sorry about that."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Can I add extra cheese?",
          chinese: "我可以加一份额外芝士吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        }
      ],
      vocabularyNotes: [
        {
          term: "add extra",
          chinese: "重点词组",
          pronunciation: "add extra",
          note: "这句话里的工作关键词。",
          example: "Can I add extra cheese?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_076",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 76,
      english: "Yes, there is an extra charge for extra cheese.",
      chinese: "可以，额外芝士需要另外收费。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_076-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_076-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_077",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 77,
      english: "I'd like the grilled chicken sandwich.",
      chinese: "我想要烤鸡三明治。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_077-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_077-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_078",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 78,
      english: "The crispy chicken sandwich is the closest option.",
      chinese: "脆皮鸡肉三明治是最接近的替代选择。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_078-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_078-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_079",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_tips_receipts",
      scenarioTitle: "小费",
      sequence: 2,
      english: "I'm sorry. Can I see your receipt or order confirmation?",
      chinese: "很抱歉。可以让我看一下您的小票或订单确认吗？",
      scenario: "解释小费屏幕和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_079-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_079-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      difficulty: "Level 1",
      variants: [
        "Sorry, may I see your receipt?",
        "Can I check your order confirmation?"
      ],
      recommendedResponses: [
        "Here is my receipt.",
        "I ordered online.",
        "I do not have the receipt."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "order confirmation",
          chinese: "订单确认信息",
          pronunciation: "OR-der kon-fer-MAY-shun",
          note: "手机或邮件里的订单证明。",
          example: "Show the order confirmation."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_080",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 80,
      english: "I ordered the chicken sandwich, not the burger.",
      chinese: "我点的是鸡肉三明治，不是这个汉堡。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_080-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_080-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_081",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 81,
      english: "You're right. I'm sorry about the mix-up. We'll remake the correct item now.",
      chinese: "您说得对，很抱歉弄错了。我们现在给您重做正确的餐品。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_081-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_081-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_082",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_dine_in_takeout",
      scenarioTitle: "堂食和外带",
      sequence: 82,
      english: "You're right. We'll make the fries now.",
      chinese: "您说得对，我们现在补做薯条。",
      scenario: "顾客发现外带袋里少了餐品，员工核对订单并补做。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_082-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_082-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_083",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 83,
      english: "This is much spicier than I expected.",
      chinese: "这个比我想象的辣得多。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_083-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_083-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_084",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 84,
      english: "I'm sorry. Would you like a milder replacement?",
      chinese: "很抱歉。您想换成辣度较低的吗？",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_084-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_084-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_085",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 85,
      english: "BBQ and plain are both mild options.",
      chinese: "烧烤味和原味都属于比较温和的选择。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_085-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_085-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_086",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_wait_pickup",
      scenarioTitle: "等待、订单号和取餐",
      sequence: 86,
      english: "It's under Alex.",
      chinese: "订单姓名是Alex。",
      scenario: "顾客到店领取网上订单，员工通过姓名或订单号核对。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_086-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_086-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_087",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_wait_pickup",
      scenarioTitle: "等待、订单号和取餐",
      sequence: 87,
      english: "I found it. Let me verify the order number before I hand it to you.",
      chinese: "我找到了。交给您之前，我再核对一下订单号。",
      scenario: "顾客到店领取网上订单，员工通过姓名或订单号核对。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_087-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_087-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_088",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_wait_pickup",
      scenarioTitle: "等待、订单号和取餐",
      sequence: 88,
      english: "I've been waiting for twenty minutes.",
      chinese: "我已经等了二十分钟了。",
      scenario: "顾客已经等待较久，员工查询厨房并给出新的合理预计时间。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_088-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_088-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_089",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_wait_pickup",
      scenarioTitle: "等待、订单号和取餐",
      sequence: 89,
      english: "I'm sorry about the wait. Can I have your order number?",
      chinese: "很抱歉让您久等了。可以告诉我订单号吗？",
      scenario: "顾客已经等待较久，员工查询厨房并给出新的合理预计时间。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_089-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_089-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_090",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_wait_pickup",
      scenarioTitle: "等待、订单号和取餐",
      sequence: 90,
      english: "It's order 65.",
      chinese: "是65号订单。",
      scenario: "顾客已经等待较久，员工查询厨房并给出新的合理预计时间。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_090-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_090-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_091",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "收银和付款",
      sequence: 3,
      english: "It looks like the card didn't go through.",
      chinese: "看起来这张卡没有支付成功。",
      scenario: "现金、刷卡、付款失败和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_091-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_091-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      difficulty: "Level 1",
      variants: [
        "The card did not go through.",
        "The payment did not work."
      ],
      recommendedResponses: [
        "Can I try again?",
        "I can use another card.",
        "I will pay cash."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "go through",
          chinese: "支付成功/通过",
          pronunciation: "goh throo",
          note: "付款场景里 did not go through 表示没有扣款成功。",
          example: "The payment went through."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_092",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "收银和付款",
      sequence: 2,
      english: "Can I try the card again?",
      chinese: "我可以再试一次这张卡吗？",
      scenario: "现金、刷卡、付款失败和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_092-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_092-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      difficulty: "Level 1",
      variants: [
        "Can I try again?",
        "May I run the card again?"
      ],
      recommendedResponses: [
        "Yes, please try again.",
        "Please wait for the screen.",
        "You can use another card too."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "try the card again",
          chinese: "再刷/再试这张卡",
          pronunciation: "try thuh kard uh-GEN",
          note: "付款失败后请求再试一次。",
          example: "Try the card again."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_093",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "收银和付款",
      sequence: 7,
      english: "Yes. Please wait for the screen, then tap or insert the card again.",
      chinese: "可以。请等屏幕提示后，再次感应或插入银行卡。",
      scenario: "现金、刷卡、付款失败和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_093-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_093-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      difficulty: "Level 2",
      variants: [
        "Wait for the screen, then tap again.",
        "Please tap or insert the card again."
      ],
      recommendedResponses: [
        "Okay, I will wait.",
        "Should I tap here?",
        "It went through now."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "tap or insert",
          chinese: "感应或插卡",
          pronunciation: "tap or in-SERT",
          note: "tap 是手机或卡感应；insert 是插入芯片卡。",
          example: "Tap your card."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_094",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "收银和付款",
      sequence: 9,
      english: "Your total is twelve forty-five.",
      chinese: "总共是12.45美元。",
      scenario: "现金、刷卡、付款失败和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_094-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_094-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      difficulty: "Level 1",
      variants: [
        "That will be twelve forty-five.",
        "Your total comes to twelve forty-five."
      ],
      recommendedResponses: [
        "Here you go.",
        "Can I pay by card?",
        "Can I get a receipt?"
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "twelve forty-five",
          chinese: "12.45美元",
          pronunciation: "twelv FOR-dee five",
          note: "收银时金额常这样读。",
          example: "Your total is ten fifty."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_095",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "收银和付款",
      sequence: 8,
      english: "Here's twenty dollars.",
      chinese: "给您二十美元。",
      scenario: "现金、刷卡、付款失败和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_095-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_095-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      difficulty: "Level 1",
      variants: [
        "Here is twenty.",
        "I have twenty dollars."
      ],
      recommendedResponses: [
        "Thank you. I will get your change.",
        "Your change is seven fifty-five.",
        "Do you need a receipt?"
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "twenty dollars",
          chinese: "二十美元",
          pronunciation: "TWEN-tee DOL-erz",
          note: "现金付款时递给收银员的钱。",
          example: "Here is ten dollars."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_096",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "收银和付款",
      sequence: 96,
      english: "Out of twenty. Your change is seven fifty-five.",
      chinese: "收您二十美元，找您7.55美元。",
      scenario: "现金、刷卡、付款失败和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_096-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_096-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_097",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "收银和付款",
      sequence: 10,
      english: "Can I get a receipt, please?",
      chinese: "可以给我一张小票吗？",
      scenario: "现金、刷卡、付款失败和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_097-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_097-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      difficulty: "Level 2",
      variants: [
        "May I have a receipt?",
        "Can you print a receipt?"
      ],
      recommendedResponses: [
        "Sure, here you go.",
        "Would you like it printed or emailed?",
        "The receipt is in the bag."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "receipt",
          chinese: "小票/收据",
          pronunciation: "ri-SEET",
          note: "付款后的凭证，p 不发音。",
          example: "Do you need a receipt?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_098",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "点餐",
      sequence: 6,
      english: "I made a mistake on this order.",
      chinese: "这份订单我做错了。",
      scenario: "顾客点餐、确认订单、等待取餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_098-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_098-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [
        "I made this order wrong.",
        "I entered the order wrong."
      ],
      recommendedResponses: [
        "Tell the supervisor.",
        "Can it be fixed?",
        "Let me help you correct it."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "made a mistake",
          chinese: "犯了错误/做错了",
          pronunciation: "mayd uh mis-TAYK",
          note: "工作中承认错误的自然说法。",
          example: "I made a mistake."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_099",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_tips_receipts",
      scenarioTitle: "小费",
      sequence: 3,
      english: "Signing confirms receipt, not necessarily agreement.",
      chinese: "签字表示已收到文件，不一定代表你同意内容。",
      scenario: "解释小费屏幕和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/front_counter_099-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_099-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "front_counter",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      difficulty: "Level 1",
      variants: [
        "Signing only means you received it.",
        "Your signature confirms receipt only."
      ],
      recommendedResponses: [
        "Can I get a copy?",
        "I need time to read it.",
        "Who can explain this to me?"
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "confirms receipt",
          chinese: "确认收到",
          pronunciation: "kun-FURMZ ri-SEET",
          note: "表示确认你收到文件，不一定表示同意内容。",
          example: "This confirms receipt."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "front_counter_100",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "收银和付款",
      sequence: 5,
      english: "Hi, let me know if you need any help.",
      chinese: "您好，需要帮助的话请告诉我。",
      scenario: "现金、刷卡、付款失败和收据。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "店员要说",
      audioNormal: "/audio/en-US/front_counter_100-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_100-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "retail",
        "cashier",
        "customer_service",
        "safety",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Staff",
      speakerRoleZh: "店员要说",
      difficulty: "Level 2",
      variants: [
        "Hi, tell me if you need help.",
        "Let me know if you have questions."
      ],
      recommendedResponses: [
        "Thank you.",
        "I need a minute.",
        "Can I ask about this item?"
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "let me know",
          chinese: "告诉我/让我知道",
          pronunciation: "let mee noh",
          note: "服务场景里很常用，语气礼貌。",
          example: "Let me know if you need help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_001",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_missing_wrong_order",
      scenarioTitle: "少餐、错餐和顾客投诉",
      sequence: 3,
      english: "One of my items is missing from the bag.",
      chinese: "我的袋子里少了一样东西。",
      scenario: "处理少餐、错餐、投诉、退款、重做和找经理。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_001-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_001-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "One item is not in the bag.",
        "Something is missing from my order."
      ],
      recommendedResponses: [
        "Can I see the item or receipt?",
        "I will ask the manager about this.",
        "We can check the refund options."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "One of my items is missing from the bag.",
          chinese: "我的袋子里少了一样东西。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "I am sorry. Can I check the order number?",
          chinese: "很抱歉。我可以核对一下订单号吗？"
        },
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "Yes, it is order 24.",
          chinese: "可以，是24号订单。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "Thank you. I will check it now.",
          chinese: "谢谢。我现在核对。"
        }
      ],
      vocabularyNotes: [
        {
          term: "bag",
          chinese: "袋子",
          pronunciation: "bag-word",
          note: "装餐品的外卖袋。",
          example: "Check the bag."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_002",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_missing_wrong_order",
      scenarioTitle: "少餐、错餐和顾客投诉",
      sequence: 2,
      english: "I'm sorry. Which item is missing?",
      chinese: "很抱歉。少的是哪一样？",
      scenario: "处理少餐、错餐、投诉、退款、重做和找经理。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/delivery_complaints_002-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_002-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "I'm sorry. Which item is missing, please?"
      ],
      recommendedResponses: [
        "Thank you. I will check the order.",
        "I will ask the kitchen for an update."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "I'm sorry. Which item is missing?",
          chinese: "很抱歉。少的是哪一样？"
        },
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "The fries are missing.",
          chinese: "少了薯条。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Which item",
          chinese: "哪一样东西",
          pronunciation: "which-EYE-tem",
          note: "用来确认顾客订单里少了哪一个餐品。",
          example: "Which item is missing?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_003",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_missing_wrong_order",
      scenarioTitle: "少餐、错餐和顾客投诉",
      sequence: 1,
      english: "The fries are missing.",
      chinese: "薯条没有装进去。",
      scenario: "处理少餐、错餐、投诉、退款、重做和找经理。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_003-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_003-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "The fries are not in the bag."
      ],
      recommendedResponses: [
        "Can I see the item or receipt?",
        "I will ask the manager about this.",
        "We can check the refund options."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "The fries are missing.",
          chinese: "薯条没有装进去。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        }
      ],
      vocabularyNotes: [
        {
          term: "fries missing",
          chinese: "外卖投诉表达",
          pronunciation: "di-LIV-er-ee kum-PLAYNT",
          note: "用于电话订单、外卖取餐和顾客问题。 这里重点看 “fries missing” 在句子里的用法。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_004",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_missing_wrong_order",
      scenarioTitle: "少餐、错餐和顾客投诉",
      sequence: 4,
      english: "I'd like a refund for this order.",
      chinese: "我想退掉这份订单并退款。",
      scenario: "处理少餐、错餐、投诉、退款、重做和找经理。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_004-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_004-slow.mp3",
      isFree: true,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "I want a refund for this order."
      ],
      recommendedResponses: [
        "Can I check the refund?",
        "I will update the customer about refund.",
        "I will ask the kitchen about refund."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "I'd like a refund for this order.",
          chinese: "我想退掉这份订单并退款。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check that for you.",
          chinese: "我帮你查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "refund",
          chinese: "退款",
          pronunciation: "REE-fund",
          note: "把钱退回给顾客。",
          example: "I need a refund."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_005",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 9,
      english: "Was this order placed in store or through an app?",
      chinese: "这个订单是在店里下的，还是通过外卖平台下的？",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/delivery_complaints_005-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_005-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Was this order placed in store or through an app, please?"
      ],
      recommendedResponses: [
        "Can I check the order placed?",
        "I will update the customer about order placed.",
        "I will ask the kitchen about order placed."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "Was this order placed in store or through an app?",
          chinese: "这个订单是在店里下的，还是通过外卖平台下的？"
        },
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "I ordered through the app.",
          chinese: "我是通过 App 下单的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order placed",
          chinese: "订单下单",
          pronunciation: "OR-der placed",
          note: "说明订单是在哪里、通过什么方式下的。",
          example: "The order was placed online."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_006",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 1,
      english: "I ordered through a delivery app.",
      chinese: "我是通过外卖平台下单的。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_006-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_006-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "I placed the order in a delivery app."
      ],
      recommendedResponses: [
        "Can I check the ordered through?",
        "I will update the customer about ordered through.",
        "I will ask the kitchen about ordered through."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "I ordered through a delivery app.",
          chinese: "我是通过外卖平台下单的。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check that for you.",
          chinese: "我帮你查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order",
          chinese: "订单",
          pronunciation: "OR-der",
          note: "顾客点的餐或外卖单。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_007",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 7,
      english: "App refunds go through the platform. Let me check first.",
      chinese: "App订单退款要通过平台。我先查一下。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/delivery_complaints_007-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_007-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Refunds go through the app. Let me check first.",
        "The platform handles app refunds. I’ll check the order."
      ],
      recommendedResponses: [
        "Okay, thank you.",
        "Can you check the order?",
        "I’ll contact the app if needed."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "App refunds go through the platform. Let me check first.",
          chinese: "App订单退款要通过平台。我先查一下。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, thank you.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "go through the platform",
          chinese: "通过平台处理",
          pronunciation: "go through the platform",
          note: "不是店里直接处理，而是在App平台处理。",
          example: "Refunds go through the platform."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_008",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 3,
      english: "I'm picking up order 742 for Jordan.",
      chinese: "我是来取Jordan的742号订单。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Driver",
      roleZh: "外卖司机可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_008-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_008-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Driver",
      speakerRoleZh: "外卖司机可能会说",
      variants: [
        "I am here for Jordan’s order."
      ],
      recommendedResponses: [
        "Can I check the picking order?",
        "I will update the customer about picking order.",
        "I will ask the kitchen about picking order."
      ],
      dialogue: [
        {
          speakerRole: "Driver",
          speakerRoleZh: "外卖司机",
          english: "I'm picking up order 742 for Jordan.",
          chinese: "我是来取Jordan的742号订单。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "picking up order",
          chinese: "取订单",
          pronunciation: "PIK-ing up OR-der",
          note: "外卖司机或顾客来拿已经做好的订单。",
          example: "I am picking up order 24."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_009",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 9,
      english: "Which delivery platform are you with?",
      chinese: "您是哪个外卖平台的司机？",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/delivery_complaints_009-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_009-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Which delivery platform are you with, please?"
      ],
      recommendedResponses: [
        "Yes, I’ll show you.",
        "Sure. Watch me first.",
        "Ask me again if it’s not clear."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Which delivery platform are you with?",
          chinese: "您是哪个外卖平台的司机？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, I’ll show you.",
          chinese: "可以，我示范给你看。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Sure. Watch me first.",
          chinese: "可以，先看我做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Which delivery",
          chinese: "重点词组",
          pronunciation: "Which delivery",
          note: "这句话里的工作关键词。",
          example: "Which delivery platform are you with?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_010",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 4,
      english: "I'm with DoorDash.",
      chinese: "我是DoorDash的司机。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Driver",
      roleZh: "外卖司机可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_010-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_010-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Driver",
      speakerRoleZh: "外卖司机可能会说",
      variants: [
        "I am a DoorDash driver."
      ],
      recommendedResponses: [
        "I will check the delivery status.",
        "Can you confirm the name?",
        "I will ask the kitchen for an update."
      ],
      dialogue: [
        {
          speakerRole: "Driver",
          speakerRoleZh: "外卖司机",
          english: "I'm with DoorDash.",
          chinese: "我是DoorDash的司机。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "DoorDash",
          chinese: "DoorDash外卖平台",
          pronunciation: "DOR-dash",
          note: "北美常见外卖平台。",
          example: "I am with DoorDash."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_011",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 8,
      english: "The order is ready. Please confirm pickup in the app.",
      chinese: "订单好了。请在App里确认取餐。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/delivery_complaints_011-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_011-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Your order is ready. Please confirm pickup.",
        "Please mark it picked up in the app."
      ],
      recommendedResponses: [
        "Can I check the order ready?",
        "I will update the customer about order ready.",
        "I will ask the kitchen about order ready."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "The order is ready. Please confirm pickup in the app.",
          chinese: "订单好了。请在App里确认取餐。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll confirm it.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "pickup",
          chinese: "取餐",
          pronunciation: "PIK-up",
          note: "顾客或外卖司机来拿订单。",
          example: "Pickup is ready."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_012",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 12,
      english: "Thank you for calling. Are you placing an order for pickup?",
      chinese: "感谢来电。您是要下一个自取订单吗？",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/delivery_complaints_012-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_012-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Thank you for calling. Are you placing an order for pickup, please?"
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Thank you for calling. Are you placing an order for pickup?",
          chinese: "感谢来电。您是要下一个自取订单吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Thank for",
          chinese: "重点词组",
          pronunciation: "Thank for",
          note: "这句话里的工作关键词。",
          example: "Thank you for calling. Are you placing an order for pickup?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_013",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 6,
      english: "Yes, I'd like to place an order for pickup.",
      chinese: "是的，我想下一个自取订单。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_013-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_013-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "I want to place a pickup order."
      ],
      recommendedResponses: [
        "Can I check the like place?",
        "I will update the customer about like place.",
        "I will ask the kitchen about like place."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Yes, I'd like to place an order for pickup.",
          chinese: "是的，我想下一个自取订单。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check that for you.",
          chinese: "我帮你查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "pickup",
          chinese: "取餐",
          pronunciation: "PIK-up",
          note: "顾客或外卖司机来拿订单。",
          example: "Pickup is ready."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_014",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 14,
      english: "Can I get your name and phone number for the order?",
      chinese: "请告诉我订单姓名和电话号码。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/delivery_complaints_014-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_014-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Can I get your name and phone number for the order, please?"
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Can I get your name and phone number for the order?",
          chinese: "请告诉我订单姓名和电话号码。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "get your",
          chinese: "重点词组",
          pronunciation: "get your",
          note: "这句话里的工作关键词。",
          example: "Can I get your name and phone number for the order?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_015",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 15,
      english: "The name is Linda. I’ll pick it up at six thirty.",
      chinese: "名字是Linda。我六点半来取。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_015-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_015-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "It’s under Linda. I’ll pick it up at six thirty.",
        "The pickup name is Linda. I’ll come at six thirty."
      ],
      recommendedResponses: [
        "Got it.",
        "We’ll have it ready.",
        "See you then."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "The name is Linda. I’ll pick it up at six thirty.",
          chinese: "名字是Linda。我六点半来取。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "pick it up",
          chinese: "来取",
          pronunciation: "pick it up",
          note: "到店里把订单取走。",
          example: "I’ll pick it up at six thirty."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_016",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 16,
      english: "I need food for about twenty people.",
      chinese: "我需要大约二十个人的餐。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_016-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_016-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "I need to get food for about twenty people.",
        "I have to get food for about twenty people."
      ],
      recommendedResponses: [
        "Sure, I can help.",
        "Let me check that for you.",
        "I’m sorry about that."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "I need food for about twenty people.",
          chinese: "我需要大约二十个人的餐。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check that for you.",
          chinese: "我帮你查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need food",
          chinese: "重点词组",
          pronunciation: "need food",
          note: "这句话里的工作关键词。",
          example: "I need food for about twenty people."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_017",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 2,
      english: "When do you need the order?",
      chinese: "您什么时候需要这份订单？",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/delivery_complaints_017-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_017-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "When do you need the order, please?"
      ],
      recommendedResponses: [
        "Can I check the When need?",
        "I will update the customer about When need.",
        "I will ask the kitchen about When need."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "When do you need the order?",
          chinese: "您什么时候需要这份订单？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order",
          chinese: "订单",
          pronunciation: "OR-der",
          note: "顾客点的餐或外卖单。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_018",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 5,
      english: "Tomorrow at noon.",
      chinese: "明天中午十二点。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_018-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_018-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Noon tomorrow works.",
        "Tomorrow at twelve is okay."
      ],
      recommendedResponses: [
        "I will check the delivery status.",
        "Can you confirm the name?",
        "I will ask the kitchen for an update."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Tomorrow at noon.",
          chinese: "明天中午十二点。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Tomorrow noon",
          chinese: "外卖投诉表达",
          pronunciation: "di-LIV-er-ee kum-PLAYNT",
          note: "用于电话订单、外卖取餐和顾客问题。 这里重点看 “Tomorrow noon” 在句子里的用法。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_019",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 7,
      english: "Can we sit anywhere?",
      chinese: "我们可以随便坐吗？",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_019-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_019-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Can we sit anywhere, please?"
      ],
      recommendedResponses: [
        "I will check the delivery status.",
        "Can you confirm the name?",
        "I will ask the kitchen for an update."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Can we sit anywhere?",
          chinese: "我们可以随便坐吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        }
      ],
      vocabularyNotes: [
        {
          term: "anywhere",
          chinese: "外卖投诉表达",
          pronunciation: "di-LIV-er-ee kum-PLAYNT",
          note: "用于电话订单、外卖取餐和顾客问题。 这里重点看 “anywhere” 在句子里的用法。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_020",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 20,
      english: "Choose any open table. Please take this table number.",
      chinese: "可以选任何空桌。请拿这个桌号牌。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/delivery_complaints_020-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_020-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "You can sit at any open table.",
        "Please take this table number with you."
      ],
      recommendedResponses: [
        "Okay, thank you.",
        "Where should I sit?",
        "I’ll take it with me."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Choose any open table. Please take this table number.",
          chinese: "可以选任何空桌。请拿这个桌号牌。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, thank you.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "open table",
          chinese: "空桌",
          pronunciation: "open table",
          note: "没人坐、可以使用的桌子。",
          example: "Choose any open table."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_021",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 21,
      english: "Will you bring the food to the table?",
      chinese: "你们会把餐送到桌上吗？",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_021-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_021-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Will you bring the food to the table, please?"
      ],
      recommendedResponses: [
        "Sure, I can help.",
        "Let me check that for you.",
        "I’m sorry about that."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Will you bring the food to the table?",
          chinese: "你们会把餐送到桌上吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check that for you.",
          chinese: "我帮你查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Will bring",
          chinese: "重点词组",
          pronunciation: "Will bring",
          note: "这句话里的工作关键词。",
          example: "Will you bring the food to the table?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_022",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 22,
      english: "Yes. We’ll bring the food to your table.",
      chinese: "可以。我们会把餐送到你的桌子。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/delivery_complaints_022-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_022-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Yes, we’ll bring it to you.",
        "We’ll bring the order to your table."
      ],
      recommendedResponses: [
        "Thank you.",
        "Here is my table number.",
        "I’ll wait at the table."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Yes. We’ll bring the food to your table.",
          chinese: "可以。我们会把餐送到你的桌子。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Thank you.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "bring the food",
          chinese: "把餐送来",
          pronunciation: "bring the food",
          note: "员工把食物送到顾客那里。",
          example: "We’ll bring the food to your table."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_023",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 10,
      english: "The delivery tablet is down, and this order didn't print.",
      chinese: "外卖平板出故障了，这份订单没有打印出来。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/delivery_complaints_023-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_023-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "pos_outage",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "This delivery tablet is down, and this order didn't print.",
        "There is a problem with this."
      ],
      recommendedResponses: [
        "Can I check the delivery tablet?",
        "I will update the customer about delivery tablet.",
        "I will ask the kitchen about delivery tablet."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "The delivery tablet is down, and this order didn't print.",
          chinese: "外卖平板出故障了，这份订单没有打印出来。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order",
          chinese: "订单",
          pronunciation: "OR-der",
          note: "顾客点的餐或外卖单。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_024",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 24,
      english: "Read the order to me, and I'll write it down.",
      chinese: "把订单念给我听，我把它写下来。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Worker",
      roleZh: "后厨员工要说",
      audioNormal: "/audio/en-US/delivery_complaints_024-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_024-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "pos_outage",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Worker",
      speakerRoleZh: "后厨员工要说",
      variants: [
        "Read the order to me, and I'll write it down."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "后厨员工",
          english: "Read the order to me, and I'll write it down.",
          chinese: "把订单念给我听，我把它写下来。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Read order",
          chinese: "重点词组",
          pronunciation: "Read order",
          note: "这句话里的工作关键词。",
          example: "Read the order to me, and I'll write it down."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_025",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 25,
      english: "Order 318 has two chicken sandwiches, one fries, and two drinks.",
      chinese: "318号订单有两个鸡肉三明治、一份薯条和两杯饮料。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/delivery_complaints_025-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_025-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "pos_outage",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Order 318 has two chicken sandwiches, one fries, and two drinks."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Order 318 has two chicken sandwiches, one fries, and two drinks.",
          chinese: "318号订单有两个鸡肉三明治、一份薯条和两杯饮料。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Order 318",
          chinese: "重点词组",
          pronunciation: "Order 318",
          note: "这句话里的工作关键词。",
          example: "Order 318 has two chicken sandwiches, one fries, and two drinks."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_026",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_delivery_pickup",
      scenarioTitle: "Uber Eats和DoorDash取餐",
      sequence: 26,
      english: "Got it. I'll repeat the order back before we start.",
      chinese: "知道了。开始制作前，我会把订单复述一遍。",
      scenario: "外卖司机取餐、确认号码、等待和缺货。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Worker",
      roleZh: "后厨员工要说",
      audioNormal: "/audio/en-US/delivery_complaints_026-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_026-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "pos_outage",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Worker",
      speakerRoleZh: "后厨员工要说",
      variants: [
        "Got it. I'll repeat the order back before we start."
      ],
      recommendedResponses: [
        "Yes, I’ll show you.",
        "Sure. Watch me first.",
        "Ask me again if it’s not clear."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "后厨员工",
          english: "Got it. I'll repeat the order back before we start.",
          chinese: "知道了。开始制作前，我会把订单复述一遍。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Yes, I’ll show you.",
          chinese: "可以，我示范给你看。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Sure. Watch me first.",
          chinese: "可以，先看我做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Got I'll",
          chinese: "重点词组",
          pronunciation: "Got I'll",
          note: "这句话里的工作关键词。",
          example: "Got it. I'll repeat the order back before we start."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_027",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_general",
      scenarioTitle: "外卖取餐、电话订单、少餐错餐、退款和顾客投诉。",
      sequence: 27,
      english: "Do not skip any steps.",
      chinese: "不要跳过任何步骤。",
      scenario: "主管要求员工按标准流程操作。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_027-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_027-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "workplace",
        "supervisor",
        "communication",
        "employee"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please don’t skip any steps."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Do not skip any steps.",
          chinese: "不要跳过任何步骤。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "not skip",
          chinese: "重点词组",
          pronunciation: "not skip",
          note: "这句话里的工作关键词。",
          example: "Do not skip any steps."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_028",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 8,
      english: "Thank you for calling. How may I help you today?",
      chinese: "感谢您的来电。今天有什么可以帮您？",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_028-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_028-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "Thank you for calling. How may I help you today, please?"
      ],
      recommendedResponses: [
        "I will check the delivery status.",
        "Can you confirm the name?",
        "I will ask the kitchen for an update."
      ],
      dialogue: [
        {
          speakerRole: "Agent",
          speakerRoleZh: "客服可能会说",
          english: "Thank you for calling. How may I help you today?",
          chinese: "感谢来电。今天有什么可以帮您？"
        },
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "I need help with my order.",
          chinese: "我的订单需要帮助。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Thank calling",
          chinese: "外卖投诉表达",
          pronunciation: "di-LIV-er-ee kum-PLAYNT",
          note: "用于电话订单、外卖取餐和顾客问题。 这里重点看 “Thank calling” 在句子里的用法。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_029",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 2,
      english: "I need help with my order.",
      chinese: "我的订单需要帮助。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "客户可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_029-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_029-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      variants: [
        "I need to get help with my order.",
        "I have to get help with my order."
      ],
      recommendedResponses: [
        "Can I check the need help?",
        "I will update the customer about need help.",
        "I will ask the kitchen about need help."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "客户",
          english: "I need help with my order.",
          chinese: "我的订单需要帮助。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check that for you.",
          chinese: "我帮你查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need help",
          chinese: "需要帮助",
          pronunciation: "need-help",
          note: "任务不会做或做不过来时求助。",
          example: "I need help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_030",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 3,
      english: "May I have your order number?",
      chinese: "可以告诉我您的订单号码吗？",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_030-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_030-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "May I have your order number, please?"
      ],
      recommendedResponses: [
        "Can I check the order number?",
        "I will update the customer about order number.",
        "I will ask the kitchen about order number."
      ],
      dialogue: [
        {
          speakerRole: "Agent",
          speakerRoleZh: "客服人员",
          english: "May I have your order number?",
          chinese: "可以告诉我您的订单号码吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order number",
          chinese: "订单号",
          pronunciation: "OR-der NUM-ber",
          note: "用来核对订单的号码。",
          example: "Check the order number."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_031",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 4,
      english: "I can't find my order number.",
      chinese: "我找不到订单号码。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "客户可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_031-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_031-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      variants: [
        "I do not see my order number."
      ],
      recommendedResponses: [
        "Can I check the order number?",
        "I will update the customer about order number.",
        "I will ask the kitchen about order number."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "客户",
          english: "I can't find my order number.",
          chinese: "我找不到订单号码。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check that for you.",
          chinese: "我帮你查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "order number",
          chinese: "订单号",
          pronunciation: "OR-der NUM-ber",
          note: "用来核对订单的号码。",
          example: "Check the order number."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_032",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 32,
      english: "Before accessing the account, I need to verify your identity.",
      chinese: "查看账户前，我需要核验您的身份。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_032-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_032-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "Before accessing the account, I need to verify your identity."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Agent",
          speakerRoleZh: "客服人员",
          english: "Before accessing the account, I need to verify your identity.",
          chinese: "查看账户前，我需要核验您的身份。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Before accessing",
          chinese: "重点词组",
          pronunciation: "Before accessing",
          note: "这句话里的工作关键词。",
          example: "Before accessing the account, I need to verify your identity."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_033",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 33,
      english: "Why do you need to verify my identity?",
      chinese: "为什么需要核验我的身份？",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "客户可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_033-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_033-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      variants: [
        "Why do you need to verify my identity, please?"
      ],
      recommendedResponses: [
        "Sure, I can help.",
        "Let me check that for you.",
        "I’m sorry about that."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "客户",
          english: "Why do you need to verify my identity?",
          chinese: "为什么需要核验我的身份？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check that for you.",
          chinese: "我帮你查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Why need",
          chinese: "重点词组",
          pronunciation: "Why need",
          note: "这句话里的工作关键词。",
          example: "Why do you need to verify my identity?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_034",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 34,
      english: "Please do not give me your full password.",
      chinese: "请不要告诉我完整密码。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_034-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_034-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "Can you do not give me your full password?",
        "Could you please do not give me your full password?"
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Agent",
          speakerRoleZh: "客服人员",
          english: "Please do not give me your full password.",
          chinese: "请不要告诉我完整密码。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "not give",
          chinese: "重点词组",
          pronunciation: "not give",
          note: "这句话里的工作关键词。",
          example: "Please do not give me your full password."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_035",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 35,
      english: "My spouse usually handles this account.",
      chinese: "这个账户通常由我的配偶处理。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "客户可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_035-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_035-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      variants: [
        "My spouse usually handles this account."
      ],
      recommendedResponses: [
        "Sure, I can help.",
        "Let me check that for you.",
        "I’m sorry about that."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "客户",
          english: "My spouse usually handles this account.",
          chinese: "这个账户通常由我的配偶处理。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check that for you.",
          chinese: "我帮你查一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "My spouse",
          chinese: "重点词组",
          pronunciation: "My spouse",
          note: "这句话里的工作关键词。",
          example: "My spouse usually handles this account."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_036",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 36,
      english: "I cannot disclose account information without proper authorization.",
      chinese: "没有适当授权，我不能透露账户信息。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_036-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_036-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "I cannot disclose account information without proper authorization."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Agent",
          speakerRoleZh: "客服人员",
          english: "I cannot disclose account information without proper authorization.",
          chinese: "没有适当授权，我不能透露账户信息。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "cannot disclose",
          chinese: "重点词组",
          pronunciation: "cannot disclose",
          note: "这句话里的工作关键词。",
          example: "I cannot disclose account information without proper authorization."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_037",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 37,
      english: "Please tell me what happened in your own words.",
      chinese: "请用您自己的话告诉我发生了什么。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_037-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_037-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "Can you tell me what happened in your own words?",
        "Could you please tell me what happened in your own words?"
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Agent",
          speakerRoleZh: "客服人员",
          english: "Please tell me what happened in your own words.",
          chinese: "请用您自己的话告诉我发生了什么。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "tell me",
          chinese: "重点词组",
          pronunciation: "tell me",
          note: "这句话里的工作关键词。",
          example: "Please tell me what happened in your own words."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_038",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 38,
      english: "Let me make sure I understand correctly.",
      chinese: "我确认一下是否理解正确。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_038-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_038-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "Let me make sure I understand correctly."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Agent",
          speakerRoleZh: "客服人员",
          english: "Let me make sure I understand correctly.",
          chinese: "我确认一下是否理解正确。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "make sure",
          chinese: "确保",
          pronunciation: "make sure",
          note: "表示确认事情真的做好。",
          example: "Make sure it is clean."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_039",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 5,
      english: "Yes, that's correct.",
      chinese: "是的，您理解得对。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "客户可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_039-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_039-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      variants: [
        "Yes, that is right.",
        "That information is correct."
      ],
      recommendedResponses: [
        "I will check the delivery status.",
        "Can you confirm the name?",
        "I will ask the kitchen for an update."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "客户",
          english: "Yes, that's correct.",
          chinese: "是的，您理解得对。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Sure, I can help.",
          chinese: "可以，我来帮你。"
        }
      ],
      vocabularyNotes: [
        {
          term: "that's correct",
          chinese: "外卖投诉表达",
          pronunciation: "di-LIV-er-ee kum-PLAYNT",
          note: "用于电话订单、外卖取餐和顾客问题。 这里重点看 “that's correct” 在句子里的用法。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_040",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 40,
      english: "May I place you on a brief hold while I check?",
      chinese: "我查询时可以请您稍等一下吗？",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_040-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_040-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "May I place you on a brief hold while I check, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Agent",
          speakerRoleZh: "客服人员",
          english: "May I place you on a brief hold while I check?",
          chinese: "我查询时可以请您稍等一下吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "May place",
          chinese: "重点词组",
          pronunciation: "May place",
          note: "这句话里的工作关键词。",
          example: "May I place you on a brief hold while I check?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_041",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 6,
      english: "Thank you for holding.",
      chinese: "感谢您的等待。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_041-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_041-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "Thanks for waiting.",
        "Thank you for staying on the line."
      ],
      recommendedResponses: [
        "I will check the delivery status.",
        "Can you confirm the name?",
        "I will ask the kitchen for an update."
      ],
      dialogue: [
        {
          speakerRole: "Agent",
          speakerRoleZh: "客服人员",
          english: "Thank you for holding.",
          chinese: "感谢您的等待。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Thank holding",
          chinese: "外卖投诉表达",
          pronunciation: "di-LIV-er-ee kum-PLAYNT",
          note: "用于电话订单、外卖取餐和顾客问题。 这里重点看 “Thank holding” 在句子里的用法。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_042",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 42,
      english: "I'm sorry about the delay. Let me give you an update.",
      chinese: "很抱歉耽误了，我向您说明最新进展。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_042-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_042-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "I'm sorry about the delay. Let me give you an update."
      ],
      recommendedResponses: [
        "I’ll wash my hands now.",
        "I’ll put on new gloves.",
        "Where are the clean gloves?"
      ],
      dialogue: [
        {
          speakerRole: "Agent",
          speakerRoleZh: "客服人员",
          english: "I'm sorry about the delay. Let me give you an update.",
          chinese: "很抱歉耽误了，我向您说明最新进展。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "I’ll wash my hands now.",
          chinese: "我现在去洗手。"
        }
      ],
      vocabularyNotes: [
        {
          term: "I'm sorry",
          chinese: "重点词组",
          pronunciation: "I'm sorry",
          note: "这句话里的工作关键词。",
          example: "I'm sorry about the delay. Let me give you an update."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_043",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 43,
      english: "Would you prefer a callback rather than staying on hold?",
      chinese: "您是否希望我们回电，而不是继续等待？",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_043-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_043-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "Would you prefer a callback rather than staying on hold, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Agent",
          speakerRoleZh: "客服人员",
          english: "Would you prefer a callback rather than staying on hold?",
          chinese: "您是否希望我们回电，而不是继续等待？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "prefer callback",
          chinese: "重点词组",
          pronunciation: "prefer callback",
          note: "这句话里的工作关键词。",
          example: "Would you prefer a callback rather than staying on hold?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_044",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 44,
      english: "What is the best number and time for the callback?",
      chinese: "回电使用哪个号码、什么时间最合适？",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_044-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_044-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "What exactly is the best number and time for the callback?",
        "What is the best number and time for the callback, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Agent",
          speakerRoleZh: "客服人员",
          english: "What is the best number and time for the callback?",
          chinese: "回电使用哪个号码、什么时间最合适？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "What best",
          chinese: "重点词组",
          pronunciation: "What best",
          note: "这句话里的工作关键词。",
          example: "What is the best number and time for the callback?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_045",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 45,
      english: "Let me read the callback number back to you.",
      chinese: "我复述一下回电号码，请您确认。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_045-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_045-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "Let me read the callback number back to you."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Agent",
          speakerRoleZh: "客服人员",
          english: "Let me read the callback number back to you.",
          chinese: "我复述一下回电号码，请您确认。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Let me",
          chinese: "重点词组",
          pronunciation: "Let me",
          note: "这句话里的工作关键词。",
          example: "Let me read the callback number back to you."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_046",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 1,
      english: "Where is my order?",
      chinese: "我的订单在哪里？",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "客户可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_046-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_046-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      difficulty: "Level 1",
      variants: [
        "Where is my food?",
        "Can you check my order?"
      ],
      recommendedResponses: [
        "Can I check the Where order?",
        "I will update the customer about Where order.",
        "I will ask the kitchen about Where order."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "order",
          chinese: "订单",
          pronunciation: "OR-der",
          note: "顾客点的餐或外卖单。",
          example: "Check the order."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_047",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 47,
      english: "The latest tracking update shows a carrier delay.",
      chinese: "最新物流信息显示承运商发生延误。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_047-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_047-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_048",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 9,
      english: "When will it arrive?",
      chinese: "什么时候能到？",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "客户可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_048-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_048-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      difficulty: "Level 1",
      variants: [
        "What time will it arrive?",
        "How long will it take?"
      ],
      recommendedResponses: [
        "It should arrive in about ten minutes.",
        "Let me check the delivery status.",
        "The driver is on the way."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "arrive",
          chinese: "到达",
          pronunciation: "uh-RIVE",
          note: "外卖送到或人到达都可以用。",
          example: "It will arrive soon."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_049",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 49,
      english: "The current estimate is Friday, but I cannot guarantee it.",
      chinese: "目前预计星期五送达，但我不能保证。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_049-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_049-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_050",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 50,
      english: "The tracking says delivered, but I did not receive it.",
      chinese: "物流显示已送达，但我没有收到。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "客户可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_050-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_050-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_051",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 51,
      english: "Please check the delivery photo and any safe locations first.",
      chinese: "请先查看配送照片，并检查可能的安全放置位置。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_051-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_051-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_052",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 52,
      english: "The delivery photo is not my house.",
      chinese: "配送照片不是我家。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "客户可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_052-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_052-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_053",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 53,
      english: "I will document this as a possible wrong delivery.",
      chinese: "我会把这记录为可能的错误投递。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_053-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_053-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_054",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 54,
      english: "Can you send a replacement now?",
      chinese: "可以现在补发吗？",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "客户可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_054-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_054-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_055",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 7,
      english: "Let me check whether the order qualifies for replacement or refund.",
      chinese: "我核对一下订单是否符合补发或退款条件。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_055-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_055-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      difficulty: "Level 3",
      variants: [
        "Let me see if we can replace or refund it.",
        "I will check if this order can be refunded."
      ],
      recommendedResponses: [
        "Thank you.",
        "I would like a replacement.",
        "I would like a refund."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "replacement or refund",
          chinese: "补发或退款",
          pronunciation: "ri-PLAYS-ment or REE-fund",
          note: "处理少餐、错餐、损坏时常用。",
          example: "Do you want a refund?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_056",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 56,
      english: "I received the wrong item.",
      chinese: "我收到了错误的商品。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "客户可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_056-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_056-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_057",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 57,
      english: "Please do not share another customer's full label information.",
      chinese: "请不要提供另一位客户标签上的完整信息。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_057-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_057-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_058",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 10,
      english: "The item arrived damaged.",
      chinese: "商品送到时已经破损。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "客户可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_058-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_058-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      difficulty: "Level 1",
      variants: [
        "The item was damaged when it arrived.",
        "This came damaged."
      ],
      recommendedResponses: [
        "I am sorry. Let me check that.",
        "Can you send a photo?",
        "We can replace it or refund it."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "arrived damaged",
          chinese: "送到时已破损",
          pronunciation: "uh-RIVED DAM-ijd",
          note: "说明不是拿到后才坏，而是送来时就坏了。",
          example: "The box arrived damaged."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_059",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 59,
      english: "Do not use the item if it is leaking, overheating, or otherwise unsafe.",
      chinese: "如果商品漏液、过热或存在其他危险，请不要使用。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Agent",
      roleZh: "客服人员要说",
      audioNormal: "/audio/en-US/delivery_complaints_059-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_059-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_060",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单",
      sequence: 60,
      english: "The battery is getting hot.",
      chinese: "电池正在变热。",
      scenario: "接电话、查订单、确认姓名和取餐时间。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Customer",
      roleZh: "客户可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_060-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_060-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "customer_service",
        "call_center",
        "phone",
        "privacy",
        "safety",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_001",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_general",
      scenarioTitle: "热油、刀具、滑倒、受伤、机器故障和紧急报告。",
      sequence: 1,
      english: "I have a peanut allergy. Is this safe for me?",
      chinese: "我对花生过敏，这个我可以安全食用吗？",
      scenario: "顾客说明花生过敏，员工不凭记忆作保证，而是核对配料和交叉接触风险。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/emergency_safety_001-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_001-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "I have a peanut allergy. Is this safe for me, please?"
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "I have a peanut allergy. Is this safe for me?",
          chinese: "我对花生过敏，这个我可以安全食用吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "have peanut",
          chinese: "重点词组",
          pronunciation: "have peanut",
          note: "这句话里的工作关键词。",
          example: "I have a peanut allergy. Is this safe for me?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_002",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 4,
      english: "Are you still open?",
      chinese: "你们还营业吗？",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "安全句子必须短、清楚、马上说，关系到受伤和事故。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/emergency_safety_002-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_002-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Are you still open, please?"
      ],
      recommendedResponses: [
        "Yes, but only for takeout.",
        "Sorry, we are closed now."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "Are you still open?",
          chinese: "你们还营业吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "Yes, but only for takeout.",
          chinese: "还营业，但只能外带。"
        }
      ],
      vocabularyNotes: [
        {
          term: "still open",
          chinese: "还营业",
          pronunciation: "stil-OH-pen",
          note: "顾客问店现在是否还可以点餐。",
          example: "The store is open."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_003",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 3,
      english: "Yes, we close in ten minutes. Some items are sold out.",
      chinese: "是的，我们十分钟后关门。有些东西卖完了。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "安全句子必须短、清楚、马上说，关系到受伤和事故。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/emergency_safety_003-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_003-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "We close in ten minutes.",
        "Some items are no longer available."
      ],
      recommendedResponses: [
        "What is still available?",
        "That’s okay.",
        "I’ll order quickly."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Yes, we close in ten minutes. Some items are sold out.",
          chinese: "是的，我们十分钟后关门。有些东西卖完了。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "What is still available?",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "sold out",
          chinese: "卖完了",
          pronunciation: "sold out",
          note: "某样东西已经没有了。",
          example: "The fries are sold out."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_004",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 9,
      english: "We still have sandwiches and fries. It has to be to go.",
      chinese: "我们还有三明治和薯条。只能外带。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "安全句子必须短、清楚、马上说，关系到受伤和事故。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/emergency_safety_004-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_004-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Sandwiches and fries are still available.",
        "It must be to go."
      ],
      recommendedResponses: [
        "To go is fine.",
        "I’ll take sandwiches and fries.",
        "Thank you."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "We still have sandwiches and fries. It has to be to go.",
          chinese: "我们还有三明治和薯条。只能外带。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "To go is fine.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "to go",
          chinese: "外带",
          pronunciation: "too-go",
          note: "顾客带走食物。",
          example: "Make it to go."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_005",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_wet_slip",
      scenarioTitle: "湿滑地面和跌倒",
      sequence: 5,
      english: "There's a drink spilled near the counter.",
      chinese: "柜台附近有饮料洒在地上了。",
      scenario: "员工发现顾客区域有液体洒出，立即设置警示、限制通行并清理。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/emergency_safety_005-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_005-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "There's a drink spilled near the counter."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "There's a drink spilled near the counter.",
          chinese: "柜台附近有饮料洒在地上了。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "There's drink",
          chinese: "重点词组",
          pronunciation: "There's drink",
          note: "这句话里的工作关键词。",
          example: "There's a drink spilled near the counter."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_006",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_wet_slip",
      scenarioTitle: "湿滑地面和跌倒",
      sequence: 6,
      english: "Thank you for telling us. Please step around the area.",
      chinese: "谢谢您告诉我们，请绕开这一区域。",
      scenario: "员工发现顾客区域有液体洒出，立即设置警示、限制通行并清理。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/emergency_safety_006-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_006-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Thank you for telling us. Please step around the area."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "Thank you for telling us. Please step around the area.",
          chinese: "谢谢您告诉我们，请绕开这一区域。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Thank for",
          chinese: "重点词组",
          pronunciation: "Thank for",
          note: "这句话里的工作关键词。",
          example: "Thank you for telling us. Please step around the area."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_007",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_wet_slip",
      scenarioTitle: "湿滑地面和跌倒",
      sequence: 7,
      english: "I'll put up the wet floor sign. Can you bring the mop?",
      chinese: "我来放小心地滑警示牌，你可以把拖把拿过来吗？",
      scenario: "员工发现顾客区域有液体洒出，立即设置警示、限制通行并清理。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Coworker",
      roleZh: "同事可能会说",
      audioNormal: "/audio/en-US/emergency_safety_007-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_007-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Coworker",
      speakerRoleZh: "同事可能会说",
      variants: [
        "I'll put up the wet floor sign. Can you bring the mop, please?"
      ],
      recommendedResponses: [
        "Walk carefully.",
        "Put out the wet floor sign.",
        "Tell a supervisor."
      ],
      dialogue: [
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事",
          english: "I'll put up the wet floor sign. Can you bring the mop?",
          chinese: "我来放小心地滑警示牌，你可以把拖把拿过来吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Walk carefully.",
          chinese: "小心走。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Put out the wet floor sign.",
          chinese: "放出“小心地滑”标志。"
        }
      ],
      vocabularyNotes: [
        {
          term: "wet floor sign",
          chinese: "小心地滑标志",
          pronunciation: "wet floor sign",
          note: "地面湿时提醒别人小心。",
          example: "Put out the wet floor sign."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_008",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_wet_slip",
      scenarioTitle: "湿滑地面和跌倒",
      sequence: 8,
      english: "Keep the sign up until the floor is completely dry.",
      chinese: "地面完全干燥之前，不要撤掉警示牌。",
      scenario: "员工发现顾客区域有液体洒出，立即设置警示、限制通行并清理。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/emergency_safety_008-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_008-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Keep the sign up until the floor is completely dry."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Keep the sign up until the floor is completely dry.",
          chinese: "地面完全干燥之前，不要撤掉警示牌。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Keep sign",
          chinese: "重点词组",
          pronunciation: "Keep sign",
          note: "这句话里的工作关键词。",
          example: "Keep the sign up until the floor is completely dry."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_009",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 9,
      english: "How soon do you need this done?",
      chinese: "这项工作需要多快完成？",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "安全句子必须短、清楚、马上说，关系到受伤和事故。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_009-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_009-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "emergency_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "How soon do you need this done, please?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "How soon do you need this done?",
          chinese: "这项工作需要多快完成？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "How soon",
          chinese: "重点词组",
          pronunciation: "How soon",
          note: "这句话里的工作关键词。",
          example: "How soon do you need this done?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_010",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_general",
      scenarioTitle: "热油、刀具、滑倒、受伤、机器故障和紧急报告。",
      sequence: 10,
      english: "Ask for help before the situation becomes unsafe.",
      chinese: "在情况变得不安全之前就要请求帮助。",
      scenario: "强调员工应在风险扩大前请求支援。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/emergency_safety_010-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_010-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Ask for help before the situation becomes unsafe."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Ask for help before the situation becomes unsafe.",
          chinese: "在情况变得不安全之前就要请求帮助。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Ask for",
          chinese: "重点词组",
          pronunciation: "Ask for",
          note: "这句话里的工作关键词。",
          example: "Ask for help before the situation becomes unsafe."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_011",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_general",
      scenarioTitle: "热油、刀具、滑倒、受伤、机器故障和紧急报告。",
      sequence: 11,
      english: "This tool is damaged.",
      chinese: "这个工具损坏了。",
      scenario: "员工发现工具损坏或不安全。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_011-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_011-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This one tool is damaged.",
        "This item tool is damaged."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "This tool is damaged.",
          chinese: "这个工具损坏了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "tool damaged",
          chinese: "重点词组",
          pronunciation: "tool damaged",
          note: "这句话里的工作关键词。",
          example: "This tool is damaged."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_012",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_general",
      scenarioTitle: "热油、刀具、滑倒、受伤、机器故障和紧急报告。",
      sequence: 12,
      english: "You need to work faster while maintaining quality.",
      chinese: "你需要在保证质量的同时提高速度。",
      scenario: "主管要求员工在不牺牲质量和安全的情况下提高效率。",
      importance: "安全句子必须短、清楚、马上说，关系到受伤和事故。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/emergency_safety_012-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_012-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "emergency_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "You need to work faster while maintaining quality."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "You need to work faster while maintaining quality.",
          chinese: "你需要在保证质量的同时提高速度。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll do it now.",
          chinese: "好的，我现在就做。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need work",
          chinese: "重点词组",
          pronunciation: "need work",
          note: "这句话里的工作关键词。",
          example: "You need to work faster while maintaining quality."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_013",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_heavy_lifting",
      scenarioTitle: "搬重物和梯子安全",
      sequence: 13,
      english: "Safety comes before production speed.",
      chinese: "安全比生产速度更重要。",
      scenario: "明确员工不能为了追赶产量忽略安全。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/emergency_safety_013-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_013-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Safety comes before production speed."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Safety comes before production speed.",
          chinese: "安全比生产速度更重要。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Safety comes",
          chinese: "重点词组",
          pronunciation: "Safety comes",
          note: "这句话里的工作关键词。",
          example: "Safety comes before production speed."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_014",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_general",
      scenarioTitle: "热油、刀具、滑倒、受伤、机器故障和紧急报告。",
      sequence: 14,
      english: "I disagree with this instruction because of a safety concern.",
      chinese: "因为安全问题，我对这项指令有疑问。",
      scenario: "员工因安全原因对主管指令提出疑问。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_014-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_014-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I disagree with this instruction because of a safety concern."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I disagree with this instruction because of a safety concern.",
          chinese: "因为安全问题，我对这项指令有疑问。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "disagree with",
          chinese: "重点词组",
          pronunciation: "disagree with",
          note: "这句话里的工作关键词。",
          example: "I disagree with this instruction because of a safety concern."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_015",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_general",
      scenarioTitle: "热油、刀具、滑倒、受伤、机器故障和紧急报告。",
      sequence: 15,
      english: "Do not retaliate against anyone for reporting a safety concern.",
      chinese: "任何人报告安全问题都不得受到报复。",
      scenario: "强调提出安全问题的员工不应受到打击报复。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/emergency_safety_015-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_015-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee"
      ],
      active: false,
      difficulty: "Level 3",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please don’t retaliate against anyone for reporting a safety concern."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Do not retaliate against anyone for reporting a safety concern.",
          chinese: "任何人报告安全问题都不得受到报复。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "not retaliate",
          chinese: "重点词组",
          pronunciation: "not retaliate",
          note: "这句话里的工作关键词。",
          example: "Do not retaliate against anyone for reporting a safety concern."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_016",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 16,
      english: "I need to leave early today.",
      chinese: "我今天需要提前离开。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "安全句子必须短、清楚、马上说，关系到受伤和事故。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_016-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_016-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "emergency_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get to leave early today.",
        "I have to get to leave early today."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need to leave early today.",
          chinese: "我今天需要提前离开。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need leave",
          chinese: "重点词组",
          pronunciation: "need leave",
          note: "这句话里的工作关键词。",
          example: "I need to leave early today."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_017",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_wet_slip",
      scenarioTitle: "湿滑地面和跌倒",
      sequence: 17,
      english: "Turn off the fryer now.",
      chinese: "现在关掉炸炉。",
      scenario: "炸炉出现异常或油温问题。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_017-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_017-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Turn off the fryer now."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Turn off the fryer now.",
          chinese: "现在关掉炸炉。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Turn off",
          chinese: "重点词组",
          pronunciation: "Turn off",
          note: "这句话里的工作关键词。",
          example: "Turn off the fryer now."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_018",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 7,
      english: "The emergency exit is blocked.",
      chinese: "紧急出口被挡住了。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_018-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_018-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This emergency exit is blocked.",
        "There is a problem with this."
      ],
      recommendedResponses: [
        "Call a manager now.",
        "Get help right away.",
        "Do not move the person unless it is unsafe."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "The emergency exit is blocked.",
          chinese: "紧急出口被挡住了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Call a manager now.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "emergency exit",
          chinese: "紧急出口",
          pronunciation: "ee-MUR-jen-see EG-zit",
          note: "发生火灾等情况时逃生用的出口。",
          example: "Keep the exit clear."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_019",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_equipment_fault",
      scenarioTitle: "机器、电线和设备故障",
      sequence: 19,
      english: "There is smoke coming from the oven.",
      chinese: "烤箱冒烟了。",
      scenario: "设备异常需要报告。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_019-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_019-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "There is smoke coming from the oven."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "There is smoke coming from the oven.",
          chinese: "烤箱冒烟了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "There smoke",
          chinese: "重点词组",
          pronunciation: "There smoke",
          note: "这句话里的工作关键词。",
          example: "There is smoke coming from the oven."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_020",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 5,
      english: "The power went out.",
      chinese: "停电了。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_020-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_020-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The power is out."
      ],
      recommendedResponses: [
        "I will stop and get help.",
        "I will tell the manager right away."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "The power went out.",
          chinese: "停电了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "power went out",
          chinese: "停电了",
          pronunciation: "POW-er went-out",
          note: "店里电突然没有了。",
          example: "The lights went out."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_021",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_wet_slip",
      scenarioTitle: "湿滑地面和跌倒",
      sequence: 21,
      english: "The floor drain is backing up.",
      chinese: "地漏往上返水了。",
      scenario: "地面排水异常。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_021-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_021-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The floor drain is backing up."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "The floor drain is backing up.",
          chinese: "地漏往上返水了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "floor drain",
          chinese: "重点词组",
          pronunciation: "floor drain",
          note: "这句话里的工作关键词。",
          example: "The floor drain is backing up."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_022",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_hot_sharp",
      scenarioTitle: "热油和刀具安全",
      sequence: 1,
      english: "I cut my finger.",
      chinese: "我切到手指了。",
      scenario: "热锅、刀具、身后经过和厨房通道安全。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_022-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_022-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "My finger is cut."
      ],
      recommendedResponses: [
        "I will stop and get help.",
        "I will tell the manager right away."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "I cut my finger.",
          chinese: "我切到手指了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "What happened?",
          chinese: "发生什么了？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Someone could get hurt.",
          chinese: "可能会有人受伤。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Okay, step back and get help.",
          chinese: "好的，退后并找人帮忙。"
        }
      ],
      vocabularyNotes: [
        {
          term: "finger",
          chinese: "手指",
          pronunciation: "FING-ger",
          note: "说明手指受伤。",
          example: "My finger hurts."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_023",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_hot_sharp",
      scenarioTitle: "热油和刀具安全",
      sequence: 2,
      english: "I burned my hand.",
      chinese: "我烫到手了。",
      scenario: "热锅、刀具、身后经过和厨房通道安全。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_023-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_023-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "My hand got burned."
      ],
      recommendedResponses: [
        "I will stop and get help.",
        "I will tell the manager right away."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I burned my hand.",
          chinese: "我烫到手了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "burned hand",
          chinese: "安全急救表达",
          pronunciation: "SAYF-tee",
          note: "用于受伤、火灾和紧急情况。 这里重点看 “burned hand” 在句子里的用法。",
          example: "Get help now."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_024",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_injury_first_aid",
      scenarioTitle: "受伤",
      sequence: 3,
      english: "We need the first aid kit.",
      chinese: "我们需要急救包。",
      scenario: "割伤、烫伤、摔倒和事故报告。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_024-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_024-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please get the first aid kit."
      ],
      recommendedResponses: [
        "I will stop and get help.",
        "I will tell the manager right away."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "We need the first aid kit.",
          chinese: "我们需要急救包。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "What happened?",
          chinese: "发生什么了？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Someone could get hurt.",
          chinese: "可能会有人受伤。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Okay, step back and get help.",
          chinese: "好的，退后并找人帮忙。"
        }
      ],
      vocabularyNotes: [
        {
          term: "first aid kit",
          chinese: "急救包",
          pronunciation: "furst-ayd kit",
          note: "处理轻伤时用的急救用品。",
          example: "Get the first aid kit."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_025",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 1,
      english: "Call the manager right away.",
      chinese: "马上叫经理。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_025-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_025-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please call the manager now."
      ],
      recommendedResponses: [
        "I will call the manager now.",
        "I will stop the work until they come."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Call the manager right away.",
          chinese: "马上叫经理。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Call the manager right away.",
          chinese: "马上叫经理。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll call now.",
          chinese: "好的，我现在叫。"
        }
      ],
      vocabularyNotes: [
        {
          term: "manager",
          chinese: "经理",
          pronunciation: "MAN-uh-jer",
          note: "处理投诉、退款或复杂问题的人。",
          example: "Call the manager."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_026",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_equipment_fault",
      scenarioTitle: "机器、电线和设备故障",
      sequence: 26,
      english: "Do not touch that wire.",
      chinese: "不要碰那根电线。",
      scenario: "发现电线或设备异常。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_026-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_026-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement"
      ],
      active: false,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please don’t touch that wire."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Do not touch that wire.",
          chinese: "不要碰那根电线。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "not touch",
          chinese: "重点词组",
          pronunciation: "not touch",
          note: "这句话里的工作关键词。",
          example: "Do not touch that wire."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_027",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 8,
      english: "There is a gas smell.",
      chinese: "有煤气味。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_027-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_027-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I smell gas."
      ],
      recommendedResponses: [
        "I will stop and get help.",
        "I will tell the manager right away."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "There is a gas smell.",
          chinese: "有煤气味。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "gas smell",
          chinese: "煤气味",
          pronunciation: "gas-smel",
          note: "可能有燃气泄漏，需要马上报告。",
          example: "I smell gas."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_028",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_equipment_fault",
      scenarioTitle: "机器、电线和设备故障",
      sequence: 28,
      english: "Do not use the machine until it is checked.",
      chinese: "机器检查前不要使用。",
      scenario: "设备异常后暂停使用。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_028-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_028-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please don’t use the machine until it is checked."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Do not use the machine until it is checked.",
          chinese: "机器检查前不要使用。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "not use",
          chinese: "重点词组",
          pronunciation: "not use",
          note: "这句话里的工作关键词。",
          example: "Do not use the machine until it is checked."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_029",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_injury_first_aid",
      scenarioTitle: "受伤",
      sequence: 1,
      english: "The slicer guard is missing.",
      chinese: "切片机防护罩不见了。",
      scenario: "割伤、烫伤、摔倒和事故报告。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_029-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_029-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This slicer guard is missing.",
        "There is a problem with this."
      ],
      recommendedResponses: [
        "I will stop using the slicer.",
        "I will tell the manager now."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "The slicer guard is missing.",
          chinese: "切片机防护罩不见了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Do not use it.",
          chinese: "不要使用它。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "I’ll stop and tell the manager.",
          chinese: "我会停下来并告诉经理。"
        }
      ],
      vocabularyNotes: [
        {
          term: "slicer guard",
          chinese: "切片机防护罩",
          pronunciation: "SLY-ser gard",
          note: "保护手不碰到刀片的安全部件。",
          example: "Use the slicer guard."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_030",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_hot_sharp",
      scenarioTitle: "热油和刀具安全",
      sequence: 3,
      english: "The knife is loose.",
      chinese: "这把刀松了。",
      scenario: "热锅、刀具、身后经过和厨房通道安全。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_030-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_030-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This knife is loose."
      ],
      recommendedResponses: [
        "I will stop using the knife.",
        "I will get a safe knife."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "The knife is loose.",
          chinese: "这把刀松了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Put it down and use another one.",
          chinese: "放下它，换另一把。"
        }
      ],
      vocabularyNotes: [
        {
          term: "knife",
          chinese: "刀",
          pronunciation: "nyf",
          note: "厨房切菜切肉用的工具。",
          example: "Hold the knife safely."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_031",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 6,
      english: "The shelf is unstable.",
      chinese: "这个架子不稳。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_031-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_031-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This shelf is unstable."
      ],
      recommendedResponses: [
        "I will move away from the shelf.",
        "I will ask someone to secure it."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "The shelf is unstable.",
          chinese: "这个架子不稳。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Do not put anything on it.",
          chinese: "不要往上面放东西。"
        }
      ],
      vocabularyNotes: [
        {
          term: "unstable",
          chinese: "不稳的",
          pronunciation: "un-STAY-bul",
          note: "形容架子、梯子或设备摇晃，有安全风险。",
          example: "The ladder is unstable."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_032",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 32,
      english: "The box is too heavy for me.",
      chinese: "这个箱子对我来说太重了。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_032-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_032-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The box is too heavy for me."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "The box is too heavy for me.",
          chinese: "这个箱子对我来说太重了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "box too",
          chinese: "重点词组",
          pronunciation: "box too",
          note: "这句话里的工作关键词。",
          example: "The box is too heavy for me."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_033",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 2,
      english: "Can someone help me lift this?",
      chinese: "有人可以帮我一起抬这个吗？",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_033-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_033-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can someone help me lift this, please?"
      ],
      recommendedResponses: [
        "Yes, I can help you lift it.",
        "Wait. Let’s lift it together."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can someone help me lift this?",
          chinese: "有人可以帮我一起抬这个吗？"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Yes, wait for me.",
          chinese: "可以，等我一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "help me lift this",
          chinese: "帮我抬这个",
          pronunciation: "help-mee-lift-this",
          note: "搬重物时请同事一起帮忙，避免受伤。",
          example: "Help me lift this box."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_034",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_wet_slip",
      scenarioTitle: "湿滑地面和跌倒",
      sequence: 34,
      english: "I slipped but I am okay.",
      chinese: "我滑了一下，但我没事。",
      scenario: "轻微滑倒后报告。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_034-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_034-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I slipped but I am okay."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I slipped but I am okay.",
          chinese: "我滑了一下，但我没事。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "slipped but",
          chinese: "重点词组",
          pronunciation: "slipped but",
          note: "这句话里的工作关键词。",
          example: "I slipped but I am okay."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_035",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_wet_slip",
      scenarioTitle: "湿滑地面和跌倒",
      sequence: 35,
      english: "I slipped and hurt my back.",
      chinese: "我滑倒伤到背了。",
      scenario: "滑倒造成背部受伤。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_035-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_035-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I slipped and hurt my back."
      ],
      recommendedResponses: [
        "Call a manager now.",
        "Get help right away.",
        "Do not move the person unless it is unsafe."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I slipped and hurt my back.",
          chinese: "我滑倒伤到背了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Call a manager now.",
          chinese: "好的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Get help right away.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "slipped and",
          chinese: "重点词组",
          pronunciation: "slipped and",
          note: "这句话里的工作关键词。",
          example: "I slipped and hurt my back."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_036",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 10,
      english: "The ladder is not steady.",
      chinese: "梯子不稳。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_036-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_036-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "The ladder is not stable.",
        "This ladder feels unsafe."
      ],
      recommendedResponses: [
        "Do not use it.",
        "Get another ladder.",
        "Tell the supervisor."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "not steady",
          chinese: "不稳",
          pronunciation: "not STED-ee",
          note: "梯子、架子或设备摇晃时用。",
          example: "The chair is not steady."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_037",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 37,
      english: "Do not stand on the bucket.",
      chinese: "不要站在桶上。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_037-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_037-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_038",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 3,
      english: "The fire alarm is going off.",
      chinese: "火警警报响了。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_038-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_038-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "The fire alarm is ringing.",
        "The alarm is going off."
      ],
      recommendedResponses: [
        "Leave the building.",
        "Follow the emergency plan.",
        "Do not ignore the alarm."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "going off",
          chinese: "响起来",
          pronunciation: "GO-ing off",
          note: "警报器响了，常说 alarm is going off。",
          example: "The alarm is going off."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_039",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_equipment_fault",
      scenarioTitle: "机器、电线和设备故障",
      sequence: 39,
      english: "Where is the fire extinguisher?",
      chinese: "灭火器在哪里？",
      scenario: "需要知道消防设备位置。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_039-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_039-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_040",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_equipment_fault",
      scenarioTitle: "机器、电线和设备故障",
      sequence: 40,
      english: "The hood fan is not working.",
      chinese: "排烟罩风扇不工作。",
      scenario: "厨房排烟设备故障。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_040-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_040-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_041",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_wet_slip",
      scenarioTitle: "湿滑地面和跌倒",
      sequence: 41,
      english: "The fryer oil is smoking.",
      chinese: "炸油冒烟了。",
      scenario: "油温过高或炸炉异常。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_041-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_041-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_042",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_wet_slip",
      scenarioTitle: "湿滑地面和跌倒",
      sequence: 42,
      english: "The dishwasher is leaking.",
      chinese: "洗碗机漏水。",
      scenario: "设备漏水造成滑倒风险。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_042-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_042-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_043",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_equipment_fault",
      scenarioTitle: "机器、电线和设备故障",
      sequence: 43,
      english: "The cooler door will not close.",
      chinese: "冷藏柜门关不上。",
      scenario: "食品温度和设备问题。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_043-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_043-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_044",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 44,
      english: "This food may be contaminated.",
      chinese: "这个食物可能被污染了。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_044-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_044-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_045",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 45,
      english: "A customer says they have an allergy.",
      chinese: "顾客说他们有过敏。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_045-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_045-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_046",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火灾和紧急情况",
      sequence: 46,
      english: "Stop serving that item for now.",
      chinese: "先暂停供应那个产品。",
      scenario: "火警、燃气、911和紧急撤离。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_046-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_046-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_047",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_wet_slip",
      scenarioTitle: "湿滑地面和跌倒",
      sequence: 47,
      english: "We need to document the incident.",
      chinese: "我们需要记录这次事故。",
      scenario: "受伤、滑倒或设备事故后。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_047-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_047-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_048",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_injury_first_aid",
      scenarioTitle: "受伤",
      sequence: 5,
      english: "I need to fill out an incident report.",
      chinese: "我需要填写事故报告。",
      scenario: "割伤、烫伤、摔倒和事故报告。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_048-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_048-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [
        "I need to complete an incident report.",
        "I need to write an incident report."
      ],
      recommendedResponses: [
        "I will get the form.",
        "Tell the manager what happened.",
        "Write the time and details."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "incident report",
          chinese: "事故报告",
          pronunciation: "IN-si-dent ri-PORT",
          note: "受伤、事故或安全事件后的书面记录。",
          example: "Fill out an incident report."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_049",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_injury_first_aid",
      scenarioTitle: "受伤",
      sequence: 2,
      english: "Should we call emergency services?",
      chinese: "我们要叫急救或报警吗？",
      scenario: "割伤、烫伤、摔倒和事故报告。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_049-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_049-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "Should we call 911?",
        "Do we need emergency help?"
      ],
      recommendedResponses: [
        "Yes, call now.",
        "Stay with the person.",
        "Tell the manager immediately."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "emergency services",
          chinese: "急救/消防/警方等紧急服务",
          pronunciation: "ee-MUR-jen-see SUR-vi-siz",
          note: "严重受伤、火灾、危险情况时使用。",
          example: "Call emergency services."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "emergency_safety_050",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_injury_first_aid",
      scenarioTitle: "受伤",
      sequence: 4,
      english: "Do not move the injured person.",
      chinese: "不要移动受伤的人。",
      scenario: "割伤、烫伤、摔倒和事故报告。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/emergency_safety_050-normal.mp3",
      audioSlow: "/audio/en-US/emergency_safety_050-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "supplement",
        "restaurant-work-core"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "Do not move them.",
        "Leave the injured person where they are."
      ],
      recommendedResponses: [
        "Call for help.",
        "Keep people away.",
        "Wait for emergency services."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "injured person",
          chinese: "受伤的人",
          pronunciation: "IN-jerd PER-sun",
          note: "不确定伤势时，不要随便移动。",
          example: "Help the injured person."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_001",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_bank_paycheck",
      scenarioTitle: "银行和存工资支票",
      sequence: 6,
      english: "It's still not going through. I'll use a different card.",
      chinese: "还是没有成功，我换一张卡。",
      scenario: "存支票、工资到账、银行卡和银行问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/daily_life_001-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_001-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "scenario_practice",
        "dialogue",
        "front_and_back",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "The payment still is not working."
      ],
      recommendedResponses: [
        "Can you explain the It's still?",
        "Please write the It's still information.",
        "Who should I ask about It's still?"
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客可能会说",
          english: "It's still not going through. I'll use a different card.",
          chinese: "还是没有成功，我换一张卡。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工要说",
          english: "No problem. You can try another card.",
          chinese: "没问题。您可以试另一张卡。"
        }
      ],
      vocabularyNotes: [
        {
          term: "different card",
          chinese: "另一张卡",
          pronunciation: "DIF-er-ent kard",
          note: "付款失败时换一张银行卡。",
          example: "Use a different card."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_002",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_rent_housing",
      scenarioTitle: "租房和联系房东",
      sequence: 10,
      english: "The written instructions are different from what I was told.",
      chinese: "书面说明和我听到的指令不一样。",
      scenario: "租房、地址、水电费和维修。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_002-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_002-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "daily_life",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This written instructions are different from what I was told.",
        "There is a problem with this."
      ],
      recommendedResponses: [
        "Can you explain the instructions slowly?",
        "Please write down the instructions."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "The written instructions are different from what I was told.",
          chinese: "书面说明和我听到的指令不一样。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Sure. What do you need?",
          chinese: "可以。你需要什么？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can you write it down for me?",
          chinese: "你可以帮我写下来吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Yes, no problem.",
          chinese: "可以，没问题。"
        }
      ],
      vocabularyNotes: [
        {
          term: "instructions",
          chinese: "指令；说明",
          pronunciation: "in-STRUK-shunz",
          note: "工作中主管给你的具体要求。",
          example: "Follow the instructions."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_003",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_rent_housing",
      scenarioTitle: "租房和联系房东",
      sequence: 7,
      english: "What should I do differently next time?",
      chinese: "下次我应该怎样改进？",
      scenario: "租房、地址、水电费和维修。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_003-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_003-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "How can I do better next time?"
      ],
      recommendedResponses: [
        "I can show you the right way.",
        "Try this step first next time."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "What should I do differently next time?",
          chinese: "下次我应该怎样改进？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "I’ll show you the correct way.",
          chinese: "我给你示范正确做法。"
        }
      ],
      vocabularyNotes: [
        {
          term: "differently next time",
          chinese: "下次换种做法",
          pronunciation: "DIF-er-ent-lee next-time",
          note: "请对方告诉你下次怎么改进。",
          example: "Do it differently next time."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_004",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_bank_paycheck",
      scenarioTitle: "银行和存工资支票",
      sequence: 3,
      english: "The current setup feels unsafe.",
      chinese: "目前这个工作安排让我觉得不安全。",
      scenario: "存支票、工资到账、银行卡和银行问题。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_004-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_004-slow.mp3",
      isFree: false,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "daily_life",
        "workplace",
        "supervisor",
        "communication",
        "employee",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This current setup feels unsafe.",
        "There is a problem with this."
      ],
      recommendedResponses: [
        "Can you explain the fee slowly?",
        "Please write down the fee."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "The current setup feels unsafe.",
          chinese: "目前这个工作安排让我觉得不安全。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Okay, I’ll be careful.",
          chinese: "好的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "fee",
          chinese: "费用；手续费",
          pronunciation: "fee-sound",
          note: "办理服务或账户可能收的钱。",
          example: "There is no fee."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_005",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_transit",
      scenarioTitle: "坐公交和问路",
      sequence: 1,
      english: "Where can I load my transit card?",
      chinese: "我在哪里可以给公交卡充值？",
      scenario: "坐公交、找站牌、问路线和通勤。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_005-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_005-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Where exactly can I load my transit card?",
        "Where can I load my transit card, please?"
      ],
      recommendedResponses: [
        "Can you explain the transit card slowly?",
        "Please write down the transit card."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Where can I load my transit card?",
          chinese: "我在哪里可以给公交卡充值？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Sure. What do you need?",
          chinese: "可以。你需要什么？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can you write it down for me?",
          chinese: "你可以帮我写下来吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Yes, no problem.",
          chinese: "可以，没问题。"
        }
      ],
      vocabularyNotes: [
        {
          term: "transit card",
          chinese: "公交卡",
          pronunciation: "TRAN-zit kard",
          note: "坐公交或地铁用的交通卡。",
          example: "Load the transit card."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_006",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_transit",
      scenarioTitle: "坐公交和问路",
      sequence: 5,
      english: "How much is the monthly pass?",
      chinese: "月票多少钱？",
      scenario: "坐公交、找站牌、问路线和通勤。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_006-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_006-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "How much is the monthly pass, please?"
      ],
      recommendedResponses: [
        "Can you explain the much monthly?",
        "Please write the much monthly information.",
        "Who should I ask about much monthly?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "How much is the monthly pass?",
          chinese: "月票多少钱？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "monthly pass",
          chinese: "月票",
          pronunciation: "MUNTH-lee pass",
          note: "一个月内可使用的公交或交通票。",
          example: "Buy a monthly pass."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_007",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_bank_paycheck",
      scenarioTitle: "银行和存工资支票",
      sequence: 7,
      english: "I get paid by direct deposit.",
      chinese: "我的工资是直接存进银行账户。",
      scenario: "存支票、工资到账、银行卡和银行问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_007-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_007-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "My pay goes into my bank account."
      ],
      recommendedResponses: [
        "Can you explain the direct deposit slowly?",
        "Please write down the direct deposit."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I get paid by direct deposit.",
          chinese: "我的工资是直接存进银行账户。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Thanks for checking.",
          chinese: "谢谢你帮我查。"
        }
      ],
      vocabularyNotes: [
        {
          term: "direct deposit",
          chinese: "工资直存",
          pronunciation: "di-REKT dee-PAH-zit",
          note: "工资直接打进银行账户。",
          example: "Use direct deposit."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_008",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_bank_paycheck",
      scenarioTitle: "银行和存工资支票",
      sequence: 8,
      english: "I need to deposit this check.",
      chinese: "我需要存这张支票。",
      scenario: "存支票、工资到账、银行卡和银行问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_008-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_008-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get to deposit this check.",
        "I have to get to deposit this check."
      ],
      recommendedResponses: [
        "Can you explain the need deposit slowly?",
        "Please write down the need deposit."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need to deposit this check.",
          chinese: "我需要存这张支票。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need deposit",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “need deposit” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_009",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_phone_internet",
      scenarioTitle: "手机和网络",
      sequence: 2,
      english: "My phone has no service.",
      chinese: "我的手机没有信号。",
      scenario: "手机套餐、流量、账单和网络问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_009-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_009-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "My phone has no signal."
      ],
      recommendedResponses: [
        "Can you explain the phone service?",
        "Please write the phone service information.",
        "Who should I ask about phone service?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "My phone has no service.",
          chinese: "我的手机没有信号。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Sure. What do you need?",
          chinese: "可以。你需要什么？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can you write it down for me?",
          chinese: "你可以帮我写下来吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Yes, no problem.",
          chinese: "可以，没问题。"
        }
      ],
      vocabularyNotes: [
        {
          term: "no service",
          chinese: "没有信号",
          pronunciation: "noh SUR-vis",
          note: "手机没有网络或信号。",
          example: "My phone has service."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_010",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_phone_internet",
      scenarioTitle: "手机和网络",
      sequence: 6,
      english: "I need more data on my plan.",
      chinese: "我的套餐需要更多流量。",
      scenario: "手机套餐、流量、账单和网络问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_010-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_010-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get more data on my plan.",
        "I have to get more data on my plan."
      ],
      recommendedResponses: [
        "Can you explain the need more?",
        "Please write the need more information.",
        "Who should I ask about need more?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need more data on my plan.",
          chinese: "我的套餐需要更多流量。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "data on my plan",
          chinese: "套餐流量",
          pronunciation: "DAY-tuh on my plan",
          note: "手机套餐里的上网流量。",
          example: "Add more data."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_011",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_rent_housing",
      scenarioTitle: "租房和联系房东",
      sequence: 5,
      english: "Is heat included in the rent?",
      chinese: "暖气费包含在房租里吗？",
      scenario: "租房、地址、水电费和维修。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_011-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_011-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Does rent include heat?"
      ],
      recommendedResponses: [
        "Yes, heat is included.",
        "No, you pay heat separately."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Is heat included in the rent?",
          chinese: "暖气费包含在房租里吗？"
        },
        {
          speakerRole: "Landlord",
          speakerRoleZh: "房东可能会说",
          english: "Yes, heat is included.",
          chinese: "是的，暖气费包含在内。"
        }
      ],
      vocabularyNotes: [
        {
          term: "heat included",
          chinese: "包含暖气费",
          pronunciation: "heet-in-KLOO-did",
          note: "租房时确认暖气费用是否包含在房租里。",
          example: "Heat is included."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_012",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_pharmacy_doctor",
      scenarioTitle: "药店买药和看医生",
      sequence: 12,
      english: "I need to pick up a prescription.",
      chinese: "我需要取处方药。",
      scenario: "药店、诊所、医生和身体不舒服。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_012-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_012-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get to pick up a prescription.",
        "I have to get to pick up a prescription."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need to pick up a prescription.",
          chinese: "我需要取处方药。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need pick",
          chinese: "重点词组",
          pronunciation: "need pick",
          note: "这句话里的工作关键词。",
          example: "I need to pick up a prescription."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_013",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_pharmacy_doctor",
      scenarioTitle: "药店买药和看医生",
      sequence: 2,
      english: "Can I book an appointment?",
      chinese: "我可以预约吗？",
      scenario: "药店、诊所、医生和身体不舒服。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_013-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_013-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I book an appointment, please?"
      ],
      recommendedResponses: [
        "I can help you make an appointment.",
        "Please describe your symptoms.",
        "You may need to speak with a pharmacist."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can I book an appointment?",
          chinese: "我可以预约吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Sure. What do you need?",
          chinese: "可以。你需要什么？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can you write it down for me?",
          chinese: "你可以帮我写下来吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Yes, no problem.",
          chinese: "可以，没问题。"
        }
      ],
      vocabularyNotes: [
        {
          term: "appointment",
          chinese: "预约",
          pronunciation: "uh-POINT-ment",
          note: "看医生、办事或服务前约好的时间。",
          example: "Book an appointment."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_014",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_pharmacy_doctor",
      scenarioTitle: "药店买药和看医生",
      sequence: 14,
      english: "I need a doctor’s note for work.",
      chinese: "我需要给工作的医生证明。",
      scenario: "药店、诊所、医生和身体不舒服。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_014-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_014-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get a doctor’s note for work.",
        "I have to get a doctor’s note for work."
      ],
      recommendedResponses: [
        "Please wait one moment.",
        "Can you write it down?",
        "Let me check."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need a doctor’s note for work.",
          chinese: "我需要给工作的医生证明。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Please wait one moment.",
          chinese: "请稍等一下。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need doctor’s",
          chinese: "重点词组",
          pronunciation: "need doctor’s",
          note: "这句话里的工作关键词。",
          example: "I need a doctor’s note for work."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_015",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_pharmacy_doctor",
      scenarioTitle: "药店买药和看医生",
      sequence: 5,
      english: "Where is the nearest walk-in clinic?",
      chinese: "最近的免预约诊所在哪里？",
      scenario: "药店、诊所、医生和身体不舒服。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_015-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_015-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Where is the closest walk-in clinic?"
      ],
      recommendedResponses: [
        "It is two blocks away.",
        "I can show you on the map."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Where is the nearest walk-in clinic?",
          chinese: "最近的免预约诊所在哪里？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "There is one on Main Street.",
          chinese: "Main Street 上有一家。"
        }
      ],
      vocabularyNotes: [
        {
          term: "walk-in clinic",
          chinese: "免预约诊所",
          pronunciation: "wawk-in KLI-nik",
          note: "不需要提前预约也可以去看的诊所。",
          example: "Find a walk-in clinic."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_016",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_general",
      scenarioTitle: "报警、911和紧急求助",
      sequence: 4,
      english: "Can you speak more slowly? English is my second language.",
      chinese: "你可以说慢一点吗？英语不是我的母语。",
      scenario: "遇到紧急情况时求助和说明问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_016-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_016-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you speak more slowly? English is my second language.",
        "Can you please speak more slowly? English is my second language."
      ],
      recommendedResponses: [
        "Can you explain the speak more?",
        "Please write the speak more information.",
        "Who should I ask about speak more?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can you speak more slowly? English is my second language.",
          chinese: "你可以说慢一点吗？英语不是我的母语。"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Sure. What do you need?",
          chinese: "可以。你需要什么？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can you write it down for me?",
          chinese: "你可以帮我写下来吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Yes, no problem.",
          chinese: "可以，没问题。"
        }
      ],
      vocabularyNotes: [
        {
          term: "speak more",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “speak more” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_017",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_rent_housing",
      scenarioTitle: "租房和联系房东",
      sequence: 9,
      english: "I am looking for a room to rent.",
      chinese: "我在找一个房间出租。",
      scenario: "租房、地址、水电费和维修。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_017-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_017-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need a room to rent."
      ],
      recommendedResponses: [
        "What is your budget?",
        "When do you want to move in?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "I am looking for a room to rent.",
          chinese: "我在找一个房间出租。"
        },
        {
          speakerRole: "Landlord",
          speakerRoleZh: "房东可能会说",
          english: "When do you want to move in?",
          chinese: "你想什么时候搬进来？"
        }
      ],
      vocabularyNotes: [
        {
          term: "room to rent",
          chinese: "出租房间",
          pronunciation: "room-to-rent",
          note: "找房时说明你想租一个房间。",
          example: "I need a room."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_018",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_rent_housing",
      scenarioTitle: "租房和联系房东",
      sequence: 3,
      english: "When is the rent due?",
      chinese: "房租什么时候到期要交？",
      scenario: "租房、地址、水电费和维修。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_018-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_018-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "What day is rent due?"
      ],
      recommendedResponses: [
        "Rent is due on the first.",
        "Please pay before the fifth."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "When is the rent due?",
          chinese: "房租什么时候到期要交？"
        },
        {
          speakerRole: "Landlord",
          speakerRoleZh: "房东可能会说",
          english: "It is due on the first.",
          chinese: "每月一号要交。"
        }
      ],
      vocabularyNotes: [
        {
          term: "rent due",
          chinese: "房租到期应付",
          pronunciation: "rent-doo",
          note: "说明房租必须在哪一天之前交。",
          example: "Rent is due Friday."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_019",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_general",
      scenarioTitle: "报警、911和紧急求助",
      sequence: 1,
      english: "Can I pay by e-transfer?",
      chinese: "我可以用电子转账付款吗？",
      scenario: "遇到紧急情况时求助和说明问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_019-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_019-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I pay by e-transfer, please?"
      ],
      recommendedResponses: [
        "Can you explain the e-transfer?",
        "Please write the e-transfer information.",
        "Who should I ask about e-transfer?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can I pay by e-transfer?",
          chinese: "我可以用电子转账付款吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Thanks for checking.",
          chinese: "谢谢你帮我查。"
        }
      ],
      vocabularyNotes: [
        {
          term: "e-transfer",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “e-transfer” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_020",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_bank_paycheck",
      scenarioTitle: "银行和存工资支票",
      sequence: 9,
      english: "I need to change my address.",
      chinese: "我需要更改我的地址。",
      scenario: "存支票、工资到账、银行卡和银行问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_020-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_020-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get to change my address.",
        "I have to get to change my address."
      ],
      recommendedResponses: [
        "Can you explain the change?",
        "Please write the change information.",
        "Who should I ask about change?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need to change my address.",
          chinese: "我需要更改我的地址。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Card, please.",
          chinese: "刷卡。"
        }
      ],
      vocabularyNotes: [
        {
          term: "change",
          chinese: "找零",
          pronunciation: "chaynj",
          note: "现金付款后退给顾客的钱。",
          example: "Here is your change."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_021",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_forms_receipts",
      scenarioTitle: "电话预约",
      sequence: 3,
      english: "Can you print this form for me?",
      chinese: "你可以帮我打印这张表吗？",
      scenario: "打电话预约、确认时间和留下信息。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_021-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_021-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you print this form for me?",
        "Can you please print this form for me?"
      ],
      recommendedResponses: [
        "Can you explain the form?",
        "Please write the form information.",
        "Who should I ask about form?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can you print this form for me?",
          chinese: "你可以帮我打印这张表吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Sure. What do you need?",
          chinese: "可以。你需要什么？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can you write it down for me?",
          chinese: "你可以帮我写下来吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Yes, no problem.",
          chinese: "可以，没问题。"
        }
      ],
      vocabularyNotes: [
        {
          term: "form",
          chinese: "表格",
          pronunciation: "form-sound",
          note: "需要填写个人信息的纸或网页。",
          example: "Fill out the form."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_022",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_work_life_basics",
      scenarioTitle: "生活用品和基本服务",
      sequence: 1,
      english: "Where can I buy work shoes?",
      chinese: "我在哪里可以买工作鞋？",
      scenario: "买生活用品、打印、收据和简单服务。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_022-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_022-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Where exactly can I buy work shoes?",
        "Where can I buy work shoes, please?"
      ],
      recommendedResponses: [
        "Can you explain the Where work slowly?",
        "Please write down the Where work."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Where can I buy work shoes?",
          chinese: "我在哪里可以买工作鞋？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Sure. What do you need?",
          chinese: "可以。你需要什么？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can you write it down for me?",
          chinese: "你可以帮我写下来吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Yes, no problem.",
          chinese: "可以，没问题。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Where work",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “Where work” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_023",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_work_life_basics",
      scenarioTitle: "生活用品和基本服务",
      sequence: 2,
      english: "I need non-slip shoes for work.",
      chinese: "我工作需要防滑鞋。",
      scenario: "买生活用品、打印、收据和简单服务。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_023-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_023-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get non-slip shoes for work.",
        "I have to get non-slip shoes for work."
      ],
      recommendedResponses: [
        "Can you explain the need non-slip?",
        "Please write the need non-slip information.",
        "Who should I ask about need non-slip?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need non-slip shoes for work.",
          chinese: "我工作需要防滑鞋。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need non-slip",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “need non-slip” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_024",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_forms_receipts",
      scenarioTitle: "电话预约",
      sequence: 4,
      english: "Can I get a copy of the receipt?",
      chinese: "我可以要一份收据副本吗？",
      scenario: "打电话预约、确认时间和留下信息。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_024-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_024-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I get a copy of the receipt, please?"
      ],
      recommendedResponses: [
        "Can you explain the receipt?",
        "Please write the receipt information.",
        "Who should I ask about receipt?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can I get a copy of the receipt?",
          chinese: "我可以要一份收据副本吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Card, please.",
          chinese: "刷卡。"
        }
      ],
      vocabularyNotes: [
        {
          term: "receipt",
          chinese: "收据",
          pronunciation: "re-CEIPT",
          note: "付款后的小票。",
          example: "Would you like a receipt?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_025",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_rent_housing",
      scenarioTitle: "租房和联系房东",
      sequence: 8,
      english: "Can I get directions to this address?",
      chinese: "你可以告诉我去这个地址怎么走吗？",
      scenario: "租房、地址、水电费和维修。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_025-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_025-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I get directions to this address, please?"
      ],
      recommendedResponses: [
        "Yes, go straight two blocks.",
        "I can show you on the map."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can I get directions to this address?",
          chinese: "你可以告诉我去这个地址怎么走吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "Yes, go straight first.",
          chinese: "可以，先直走。"
        }
      ],
      vocabularyNotes: [
        {
          term: "directions",
          chinese: "路线；怎么走",
          pronunciation: "di-REK-shunz",
          note: "问别人去某个地址的路线。",
          example: "I need directions."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_026",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_transit",
      scenarioTitle: "坐公交和问路",
      sequence: 6,
      english: "How long does it take by bus?",
      chinese: "坐公交要多久？",
      scenario: "坐公交、找站牌、问路线和通勤。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_026-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_026-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "How long is the bus ride?",
        "How many minutes by bus?"
      ],
      recommendedResponses: [
        "It takes about twenty minutes.",
        "It depends on traffic."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "How long does it take by bus?",
          chinese: "坐公交要多久？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "对方可能会说",
          english: "About twenty minutes.",
          chinese: "大约二十分钟。"
        }
      ],
      vocabularyNotes: [
        {
          term: "by bus",
          chinese: "坐公交",
          pronunciation: "by-bus",
          note: "说明交通方式是公交车。",
          example: "Go by bus."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_027",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_transit",
      scenarioTitle: "坐公交和问路",
      sequence: 7,
      english: "Does this bus stop near the restaurant?",
      chinese: "这路公交会停在餐厅附近吗？",
      scenario: "坐公交、找站牌、问路线和通勤。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_027-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_027-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Does this bus stop near the restaurant, please?"
      ],
      recommendedResponses: [
        "Step aside.",
        "I’ll be careful.",
        "I’ll tell the manager right now."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Does this bus stop near the restaurant?",
          chinese: "这路公交会停在餐厅附近吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Step aside.",
          chinese: "让到一边。"
        }
      ],
      vocabularyNotes: [
        {
          term: "bus stop",
          chinese: "公交站",
          pronunciation: "bus-stop",
          note: "等公交车的地方。",
          example: "Where is the bus stop?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_028",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_transit",
      scenarioTitle: "坐公交和问路",
      sequence: 2,
      english: "I missed my bus.",
      chinese: "我错过公交了。",
      scenario: "坐公交、找站牌、问路线和通勤。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_028-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_028-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The bus left without me."
      ],
      recommendedResponses: [
        "The next bus comes soon.",
        "You can take the next one."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "I missed my bus.",
          chinese: "我错过公交了。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Take the next one.",
          chinese: "坐下一班吧。"
        }
      ],
      vocabularyNotes: [
        {
          term: "missed my bus",
          chinese: "错过公交",
          pronunciation: "mist-my-bus",
          note: "公交已经走了，自己没赶上。",
          example: "I missed the bus."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_029",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_transit",
      scenarioTitle: "坐公交和问路",
      sequence: 3,
      english: "The bus is running late.",
      chinese: "公交晚点了。",
      scenario: "坐公交、找站牌、问路线和通勤。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_029-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_029-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The bus is late."
      ],
      recommendedResponses: [
        "You may need to wait.",
        "Check the transit app."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "The bus is running late.",
          chinese: "公交晚点了。"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Text the manager now.",
          chinese: "现在给经理发消息。"
        }
      ],
      vocabularyNotes: [
        {
          term: "running late",
          chinese: "晚点；迟到",
          pronunciation: "RUN-ing-late",
          note: "公交或人比预计时间晚。",
          example: "The bus is late."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_030",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_bank_paycheck",
      scenarioTitle: "银行和存工资支票",
      sequence: 1,
      english: "Can I cash this check here?",
      chinese: "我可以在这里兑现这张支票吗？",
      scenario: "存支票、工资到账、银行卡和银行问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_030-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_030-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I cash this check here, please?"
      ],
      recommendedResponses: [
        "Can you explain the cash check?",
        "Please write the cash check information.",
        "Who should I ask about cash check?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can I cash this check here?",
          chinese: "我可以在这里兑现这张支票吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Card, please.",
          chinese: "刷卡。"
        }
      ],
      vocabularyNotes: [
        {
          term: "cash check",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “cash check” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_031",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_bank_paycheck",
      scenarioTitle: "银行和存工资支票",
      sequence: 4,
      english: "What ID do I need?",
      chinese: "我需要什么身份证件？",
      scenario: "存支票、工资到账、银行卡和银行问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_031-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_031-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "What exactly ID do I need?",
        "What ID do I need, please?"
      ],
      recommendedResponses: [
        "Can you explain the What need?",
        "Please write the What need information.",
        "Who should I ask about What need?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "What ID do I need?",
          chinese: "我需要什么身份证件？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "What need",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “What need” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_032",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_bank_paycheck",
      scenarioTitle: "银行和存工资支票",
      sequence: 32,
      english: "I need to update my direct deposit information.",
      chinese: "我需要更新我的工资入账信息。",
      scenario: "存支票、工资到账、银行卡和银行问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_032-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_032-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: false,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get to update my direct deposit information.",
        "I have to get to update my direct deposit information."
      ],
      recommendedResponses: [
        "Thanks for checking.",
        "Can you help me fix it?",
        "Who should I talk to?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need to update my direct deposit information.",
          chinese: "我需要更新我的工资入账信息。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Thanks for checking.",
          chinese: "谢谢你帮我查。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need update",
          chinese: "重点词组",
          pronunciation: "need update",
          note: "这句话里的工作关键词。",
          example: "I need to update my direct deposit information."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_033",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_bank_paycheck",
      scenarioTitle: "银行和存工资支票",
      sequence: 2,
      english: "My debit card is not working.",
      chinese: "我的借记卡不能用了。",
      scenario: "存支票、工资到账、银行卡和银行问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_033-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_033-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "My debit card will not work.",
        "The bank card is not working."
      ],
      recommendedResponses: [
        "Can you explain the debit card?",
        "Please write the debit card information.",
        "Who should I ask about debit card?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "My debit card is not working.",
          chinese: "我的借记卡不能用了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Card, please.",
          chinese: "刷卡。"
        }
      ],
      vocabularyNotes: [
        {
          term: "debit card",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “debit card” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_034",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_bank_paycheck",
      scenarioTitle: "银行和存工资支票",
      sequence: 10,
      english: "Can I set up online banking?",
      chinese: "我可以开通网上银行吗？",
      scenario: "存支票、工资到账、银行卡和银行问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_034-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_034-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I set up online banking, please?"
      ],
      recommendedResponses: [
        "Yes, I can help you set it up.",
        "You need your card and ID."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can I set up online banking?",
          chinese: "我可以开通网上银行吗？"
        },
        {
          speakerRole: "Bank Staff",
          speakerRoleZh: "银行职员可能会说",
          english: "Yes, do you have your ID?",
          chinese: "可以，你带身份证件了吗？"
        }
      ],
      vocabularyNotes: [
        {
          term: "online banking",
          chinese: "网上银行",
          pronunciation: "ON-line BANK-ing",
          note: "用手机或电脑管理银行账户。",
          example: "Use online banking."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_035",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_phone_internet",
      scenarioTitle: "手机和网络",
      sequence: 4,
      english: "My phone bill is too high.",
      chinese: "我的手机账单太高了。",
      scenario: "手机套餐、流量、账单和网络问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_035-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_035-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "My phone bill is very high.",
        "The phone bill costs too much."
      ],
      recommendedResponses: [
        "Can you explain the phone bill?",
        "Please write the phone bill information.",
        "Who should I ask about phone bill?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "My phone bill is too high.",
          chinese: "我的手机账单太高了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "phone bill",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “phone bill” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_036",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_phone_internet",
      scenarioTitle: "手机和网络",
      sequence: 7,
      english: "Can I change to a cheaper plan?",
      chinese: "我可以换成便宜一点的套餐吗？",
      scenario: "手机套餐、流量、账单和网络问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_036-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_036-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I change to a cheaper plan, please?"
      ],
      recommendedResponses: [
        "Can you explain the change?",
        "Please write the change information.",
        "Who should I ask about change?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can I change to a cheaper plan?",
          chinese: "我可以换成便宜一点的套餐吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Card, please.",
          chinese: "刷卡。"
        }
      ],
      vocabularyNotes: [
        {
          term: "change",
          chinese: "找零",
          pronunciation: "chaynj",
          note: "现金付款后退给顾客的钱。",
          example: "Here is your change."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_037",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_phone_internet",
      scenarioTitle: "手机和网络",
      sequence: 1,
      english: "I need a SIM card.",
      chinese: "我需要一张手机卡。",
      scenario: "手机套餐、流量、账单和网络问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_037-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_037-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get a SIM card.",
        "I have to get a SIM card."
      ],
      recommendedResponses: [
        "Can you explain the need card?",
        "Please write the need card information.",
        "Who should I ask about need card?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need a SIM card.",
          chinese: "我需要一张手机卡。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Card, please.",
          chinese: "刷卡。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need card",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “need card” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_038",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_phone_internet",
      scenarioTitle: "手机和网络",
      sequence: 3,
      english: "My internet is not working.",
      chinese: "我的网络不能用了。",
      scenario: "手机套餐、流量、账单和网络问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_038-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_038-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "My internet is down.",
        "The internet is not working right now."
      ],
      recommendedResponses: [
        "Can you explain the internet working?",
        "Please write the internet working information.",
        "Who should I ask about internet working?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "My internet is not working.",
          chinese: "我的网络不能用了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "internet working",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “internet working” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_039",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_transit",
      scenarioTitle: "坐公交和问路",
      sequence: 4,
      english: "Can you reset my password?",
      chinese: "你可以帮我重置密码吗？",
      scenario: "坐公交、找站牌、问路线和通勤。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_039-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_039-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you reset my password?",
        "Can you please reset my password?"
      ],
      recommendedResponses: [
        "Can you explain the reset password?",
        "Please write the reset password information.",
        "Who should I ask about reset password?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can you reset my password?",
          chinese: "你可以帮我重置密码吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "reset password",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “reset password” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_040",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_rent_housing",
      scenarioTitle: "租房和联系房东",
      sequence: 1,
      english: "Is laundry included?",
      chinese: "洗衣设施包含吗？",
      scenario: "租房、地址、水电费和维修。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_040-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_040-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Is this laundry included?"
      ],
      recommendedResponses: [
        "Can you explain the laundry included?",
        "Please write the laundry included information.",
        "Who should I ask about laundry included?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Is laundry included?",
          chinese: "洗衣设施包含吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "laundry included",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “laundry included” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_041",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_rent_housing",
      scenarioTitle: "租房和联系房东",
      sequence: 2,
      english: "Is parking included?",
      chinese: "停车位包含吗？",
      scenario: "租房、地址、水电费和维修。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_041-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_041-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Is this parking included?"
      ],
      recommendedResponses: [
        "Can you explain the parking included?",
        "Please write the parking included information.",
        "Who should I ask about parking included?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Is parking included?",
          chinese: "停车位包含吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "parking included",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “parking included” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_042",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_rent_housing",
      scenarioTitle: "租房和联系房东",
      sequence: 6,
      english: "Can I see the room today?",
      chinese: "我今天可以看房间吗？",
      scenario: "租房、地址、水电费和维修。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_042-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_042-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I see the room today, please?"
      ],
      recommendedResponses: [
        "Can you explain the room today?",
        "Please write the room today information.",
        "Who should I ask about room today?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can I see the room today?",
          chinese: "我今天可以看房间吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "room today",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “room today” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_043",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_bank_paycheck",
      scenarioTitle: "银行和存工资支票",
      sequence: 5,
      english: "How much is the deposit?",
      chinese: "押金是多少？",
      scenario: "存支票、工资到账、银行卡和银行问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_043-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_043-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "How much is the deposit, please?"
      ],
      recommendedResponses: [
        "Can you explain the much deposit slowly?",
        "Please write down the much deposit."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "How much is the deposit?",
          chinese: "押金是多少？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "much deposit",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “much deposit” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_044",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_rent_housing",
      scenarioTitle: "租房和联系房东",
      sequence: 4,
      english: "When can I move in?",
      chinese: "我什么时候可以搬进去？",
      scenario: "租房、地址、水电费和维修。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_044-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_044-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "When can I move in, please?"
      ],
      recommendedResponses: [
        "Can you explain the When move?",
        "Please write the When move information.",
        "Who should I ask about When move?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "When can I move in?",
          chinese: "我什么时候可以搬进去？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "When move",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “When move” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_045",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_pharmacy_doctor",
      scenarioTitle: "药店买药和看医生",
      sequence: 6,
      english: "I need something for a headache.",
      chinese: "我需要治头痛的药。",
      scenario: "药店、诊所、医生和身体不舒服。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_045-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_045-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get something for a headache.",
        "I have to get something for a headache."
      ],
      recommendedResponses: [
        "Can you explain the need something?",
        "Please write the need something information.",
        "Who should I ask about need something?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need something for a headache.",
          chinese: "我需要治头痛的药。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need something",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “need something” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_046",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_pharmacy_doctor",
      scenarioTitle: "药店买药和看医生",
      sequence: 7,
      english: "I need something for a cough.",
      chinese: "我需要治咳嗽的药。",
      scenario: "药店、诊所、医生和身体不舒服。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_046-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_046-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get something for a cough.",
        "I have to get something for a cough."
      ],
      recommendedResponses: [
        "Can you explain the need something?",
        "Please write the need something information.",
        "Who should I ask about need something?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I need something for a cough.",
          chinese: "我需要治咳嗽的药。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "need something",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “need something” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_047",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_pharmacy_doctor",
      scenarioTitle: "药店买药和看医生",
      sequence: 8,
      english: "Can I talk to the pharmacist?",
      chinese: "我可以和药剂师说一下吗？",
      scenario: "药店、诊所、医生和身体不舒服。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_047-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_047-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I talk to the pharmacist, please?"
      ],
      recommendedResponses: [
        "I can help you make an appointment.",
        "Please describe your symptoms.",
        "You may need to speak with a pharmacist."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can I talk to the pharmacist?",
          chinese: "我可以和药剂师说一下吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "pharmacist",
          chinese: "药剂师",
          pronunciation: "FAR-muh-sist",
          note: "药店里负责用药咨询的人。",
          example: "Ask the pharmacist."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_048",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_pharmacy_doctor",
      scenarioTitle: "药店买药和看医生",
      sequence: 9,
      english: "How often should I take this?",
      chinese: "这个多久吃一次？",
      scenario: "药店、诊所、医生和身体不舒服。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_048-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_048-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "How often should I take this, please?"
      ],
      recommendedResponses: [
        "Can you explain the often take?",
        "Please write the often take information.",
        "Who should I ask about often take?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "How often should I take this?",
          chinese: "这个多久吃一次？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "often take",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “often take” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_049",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_pharmacy_doctor",
      scenarioTitle: "药店买药和看医生",
      sequence: 10,
      english: "Should I take it with food?",
      chinese: "这个要和食物一起吃吗？",
      scenario: "药店、诊所、医生和身体不舒服。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_049-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_049-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Should I take it with food, please?"
      ],
      recommendedResponses: [
        "Can you explain the take food?",
        "Please write the take food information.",
        "Who should I ask about take food?"
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Should I take it with food?",
          chinese: "这个要和食物一起吃吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "I’ll wash my hands now.",
          chinese: "我现在去洗手。"
        }
      ],
      vocabularyNotes: [
        {
          term: "take food",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “take food” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_050",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_pharmacy_doctor",
      scenarioTitle: "药店买药和看医生",
      sequence: 1,
      english: "I have a fever.",
      chinese: "我发烧了。",
      scenario: "药店、诊所、医生和身体不舒服。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_050-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_050-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I am running a fever."
      ],
      recommendedResponses: [
        "I can help you make an appointment.",
        "Please describe your symptoms.",
        "You may need to speak with a pharmacist."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I have a fever.",
          chinese: "我发烧了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Got it.",
          chinese: "明白了。"
        }
      ],
      vocabularyNotes: [
        {
          term: "fever",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “fever” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_051",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_pharmacy_doctor",
      scenarioTitle: "药店买药和看医生",
      sequence: 4,
      english: "I have stomach pain.",
      chinese: "我肚子痛。",
      scenario: "药店、诊所、医生和身体不舒服。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_051-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_051-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "My stomach hurts.",
        "I have pain in my stomach."
      ],
      recommendedResponses: [
        "Do you need a doctor?",
        "How long has it hurt?",
        "You may need to rest."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "stomach pain",
          chinese: "生活实用表达",
          pronunciation: "DAY-lee life",
          note: "用于公交、银行、手机、租房和看医生。 这里重点看 “stomach pain” 在句子里的用法。",
          example: "Ask for help."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_052",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_pharmacy_doctor",
      scenarioTitle: "药店买药和看医生",
      sequence: 3,
      english: "I feel dizzy.",
      chinese: "我头晕。",
      scenario: "药店、诊所、医生和身体不舒服。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_052-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_052-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "I feel lightheaded.",
        "I feel like I might fall."
      ],
      recommendedResponses: [
        "Please sit down.",
        "Do you need water?",
        "Should we call someone?"
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "fee",
          chinese: "费用；手续费",
          pronunciation: "fee-sound",
          note: "办理服务或账户可能收的钱。",
          example: "There is no fee."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_053",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_work_life_basics",
      scenarioTitle: "生活用品和基本服务",
      sequence: 3,
      english: "I need to reschedule my appointment.",
      chinese: "我需要改预约时间。",
      scenario: "买生活用品、打印、收据和简单服务。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_053-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_053-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "I need to change my appointment time.",
        "Can I reschedule my appointment?"
      ],
      recommendedResponses: [
        "What day works for you?",
        "The next opening is Monday.",
        "Please call the office."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "reschedule",
          chinese: "改时间/重新预约",
          pronunciation: "ree-SKED-jool",
          note: "把预约改到另一个时间。",
          example: "Can I reschedule?"
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_054",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_work_life_basics",
      scenarioTitle: "生活用品和基本服务",
      sequence: 4,
      english: "Can you give me a confirmation number?",
      chinese: "你可以给我一个确认号码吗？",
      scenario: "买生活用品、打印、收据和简单服务。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_054-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_054-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "Can I get a confirmation number?",
        "May I have the confirmation number?"
      ],
      recommendedResponses: [
        "Yes, it is A123.",
        "I will text it to you.",
        "Please write it down."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "confirmation number",
          chinese: "确认号码",
          pronunciation: "kon-fer-MAY-shun NUM-ber",
          note: "预约、订单、服务完成后的查询号码。",
          example: "Here is your confirmation number."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_055",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_forms_receipts",
      scenarioTitle: "电话预约",
      sequence: 1,
      english: "I need help filling out this form.",
      chinese: "我需要帮忙填写这张表。",
      scenario: "打电话预约、确认时间和留下信息。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_055-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_055-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "I have to help filling out this form."
      ],
      recommendedResponses: [
        "I can help you.",
        "Please fill in your name first.",
        "Bring your ID with the form."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "filling out this form",
          chinese: "填写这张表",
          pronunciation: "FIL-ing out this form",
          note: "fill out 表示填写表格。",
          example: "Fill out the form."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_056",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_forms_receipts",
      scenarioTitle: "电话预约",
      sequence: 2,
      english: "Can you email me a copy?",
      chinese: "你可以发一份副本到我邮箱吗？",
      scenario: "打电话预约、确认时间和留下信息。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_056-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_056-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "Can you send me a copy by email?",
        "Please email me a copy."
      ],
      recommendedResponses: [
        "Sure, what is your email?",
        "I will send it now.",
        "Check your inbox."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "email me a copy",
          chinese: "发一份副本到我邮箱",
          pronunciation: "EE-mayl mee uh KOP-ee",
          note: "需要电子版文件时使用。",
          example: "Email me a copy."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_057",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_bank_paycheck",
      scenarioTitle: "银行和存工资支票",
      sequence: 57,
      english: "I do not understand this letter.",
      chinese: "我看不懂这封信。",
      scenario: "存支票、工资到账、银行卡和银行问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_057-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_057-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: false,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_058",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_general",
      scenarioTitle: "报警、911和紧急求助",
      sequence: 2,
      english: "Who should I contact about this?",
      chinese: "这件事我应该联系谁？",
      scenario: "遇到紧急情况时求助和说明问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_058-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_058-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "Who do I call about this?",
        "Who should I talk to about this?"
      ],
      recommendedResponses: [
        "Call customer service.",
        "Talk to the office.",
        "Ask the manager first."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "contact",
          chinese: "联系",
          pronunciation: "KON-takt",
          note: "可以指打电话、发邮件或找人。",
          example: "Contact the office."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_059",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_phone_internet",
      scenarioTitle: "手机和网络",
      sequence: 5,
      english: "Can I make a payment plan?",
      chinese: "我可以分期付款吗？",
      scenario: "手机套餐、流量、账单和网络问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_059-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_059-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 2",
      variants: [
        "Can I pay in installments?",
        "Can I split the payment over time?"
      ],
      recommendedResponses: [
        "Yes, we have payment plans.",
        "No, it must be paid today.",
        "Let me check your options."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "payment plan",
          chinese: "分期付款计划",
          pronunciation: "PAY-ment plan",
          note: "费用较高时分几次付款。",
          example: "Ask for a payment plan."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "daily_life_060",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_general",
      scenarioTitle: "报警、911和紧急求助",
      sequence: 3,
      english: "Is there a fee for this?",
      chinese: "这个有费用吗？",
      scenario: "遇到紧急情况时求助和说明问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_060-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_060-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement",
        "daily-life-pack"
      ],
      active: true,
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      difficulty: "Level 1",
      variants: [
        "Do I have to pay a fee?",
        "How much is the fee?"
      ],
      recommendedResponses: [
        "There is no fee.",
        "The fee is five dollars.",
        "Let me check for you."
      ],
      dialogue: [],
      vocabularyNotes: [
        {
          term: "fee",
          chinese: "费用；手续费",
          pronunciation: "fee-sound",
          note: "办理服务或账户可能收的钱。",
          example: "There is no fee."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    }
  ]
} as const satisfies {
  id: string; title: string; subtitle: string; priceLabel: string; sourceLanguage: string; targetLanguage: string;
  modules: KitchenCourseModule[]; freeScenarioIds: string[]; stats: KitchenCourseStats; items: KitchenCourseItem[];
};

export const freeKitchenScenarioIds = new Set(kitchenSurvivalCourse.freeScenarioIds);
