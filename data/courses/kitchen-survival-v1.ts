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
          english: "Can you show me the first step?",
          chinese: "你可以给我示范第一步吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Yes. Watch me do it once.",
          chinese: "可以。看我做一遍。"
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
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 5,
      english: "Which task should I do first?",
      chinese: "我应该先做哪项工作？",
      scenario: "员工第一天上班时，不确定任务顺序，向主管确认先做哪一项。",
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
          term: "first task",
          chinese: "第一项任务；先做的工作",
          pronunciation: "furst-task",
          note: "员工不知道先做什么时，用来确认工作顺序。",
          example: "Start with the first task."
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
      role: "Worker",
      roleZh: "员工要说",
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
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
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
      english: "Let me make sure I understand.",
      chinese: "我确认一下我有没有理解对。",
      scenario: "员工听完指令后，先复述确认，避免做错。",
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
        "Let me confirm what you mean.",
        "I want to make sure I got it."
      ],
      recommendedResponses: [
        "Sure. Tell me what you heard.",
        "Yes, say it back to me.",
        "Go ahead. I’ll correct you if needed."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Let me make sure I understand.",
          chinese: "我确认一下我有没有理解对。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Sure. Tell me what you heard.",
          chinese: "可以。说一下你听到的内容。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "You want me to clean this table first.",
          chinese: "你是要我先清洁这张桌子。"
        }
      ],
      vocabularyNotes: [
        {
          term: "make sure",
          chinese: "确认；确保",
          pronunciation: "mayk-shur",
          note: "不确定自己是否听懂时，用它来先确认。",
          example: "Make sure the lid is on."
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
      english: "Can you repeat the instructions?",
      chinese: "你可以把指令再说一遍吗？",
      scenario: "没听清时请对方再说一遍、写下来或示范。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
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
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you say the instructions again?",
        "I did not understand the instructions."
      ],
      recommendedResponses: [
        "Sure. First, wash the container.",
        "Of course. I will say it more slowly.",
        "Yes. Clean it first, then label it."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can you repeat the instructions?",
          chinese: "你可以把指令再说一遍吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Sure. Clean the container first, then label it.",
          chinese: "可以。先清洁容器，然后贴标签。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, thank you.",
          chinese: "好的，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "repeat the instructions",
          chinese: "把指令再说一遍",
          pronunciation: "ri-PEET-the-in-STRUK-shuns",
          note: "员工没有听清工作要求时，请主管重新说明。",
          example: "Please repeat the instructions."
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
        "Can you show me once?",
        "Can you show me how to do it?"
      ],
      recommendedResponses: [
        "Yes, watch me do it once.",
        "Sure. I’ll show you the first one.",
        "Of course. Then you can try."
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
          english: "Yes, watch me do it once.",
          chinese: "可以，看我做一遍。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I’ll try after you show me.",
          chinese: "好的，你示范后我来试。"
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
        "Can you help me with this task?",
        "I need help with this."
      ],
      recommendedResponses: [
        "Yes, I can help you.",
        "Sure. What part is hard?",
        "Ask Kevin to help you first."
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
          english: "Sure. What part do you need help with?",
          chinese: "可以。你哪一部分需要帮忙？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I am not sure which container to use.",
          chinese: "我不确定该用哪个容器。"
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
        "Stop using damaged equipment.",
        "Do not use broken equipment."
      ],
      recommendedResponses: [
        "Okay, I’ll stop using it.",
        "I’ll report it to you.",
        "Should I use the backup machine?"
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
        "The correct tool is not here.",
        "I cannot find the approved tool."
      ],
      recommendedResponses: [
        "Use the backup tool for now.",
        "Let me show you where it is.",
        "Do not continue until we find the right tool."
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
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay. Is this the backup tool?",
          chinese: "好的。这是备用工具吗？"
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
        "Can you show me which part is wrong?",
        "I’ll correct it before I continue."
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
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "This label needs today’s date.",
          chinese: "这个标签需要今天的日期。"
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
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can you show me the correct way?",
          chinese: "你可以给我看正确做法吗？"
        }
      ],
      vocabularyNotes: [
        {
          term: "redo",
          chinese: "重做",
          pronunciation: "ree-DOO",
          note: "某部分不合格，需要再做一次。",
          example: "Redo the label."
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
      english: "Who is the manager today?",
      chinese: "今天谁是经理？",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_023-normal.mp3",
      audioSlow: "/audio/en-US/communication_023-slow.mp3",
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
        "Who is in charge today?",
        "Who should I report to today?"
      ],
      recommendedResponses: [
        "Maria is the manager today.",
        "Kevin is in charge today.",
        "The manager is in the office."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Who is the manager today?",
          chinese: "今天谁是经理？"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Maria is the manager today.",
          chinese: "Maria 今天是经理。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Thank you. I need to check in with her.",
          chinese: "谢谢。我需要去找她报到。"
        }
      ],
      vocabularyNotes: [
        {
          term: "manager today",
          chinese: "今天的经理；今天负责的人",
          pronunciation: "MAN-uh-jer tuh-DAY",
          note: "第一天上班或换班时，用来确认今天该找谁。",
          example: "The manager today is Maria."
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
      english: "I am new here.",
      chinese: "我是新来的。",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
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
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This is my first day.",
        "I just started here."
      ],
      recommendedResponses: [
        "Welcome. I’ll show you around.",
        "Okay. Let me introduce you to the team.",
        "No problem. Ask me if you have questions."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "I am new here.",
          chinese: "我是新来的。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Welcome. I’ll show you where to start.",
          chinese: "欢迎。我带你看从哪里开始。"
        }
      ],
      vocabularyNotes: [
        {
          term: "new here",
          chinese: "新来的；刚来这里工作",
          pronunciation: "noo-heer",
          note: "第一天上班时告诉别人自己还不熟悉环境。",
          example: "She is new here."
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
      english: "Is there anything I can improve?",
      chinese: "我还有什么可以改进的吗？",
      scenario: "第一天到餐厅上班，知道去哪里、找谁、先做什么。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_026-normal.mp3",
      audioSlow: "/audio/en-US/communication_026-slow.mp3",
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
        "What can I do better?",
        "Is there anything I should change?"
      ],
      recommendedResponses: [
        "Your work is good. Just check the labels carefully.",
        "Yes. Please keep your station cleaner.",
        "Try to work a little faster after you understand the steps."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Is there anything I can improve?",
          chinese: "我还有什么可以改进的吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Your work is good. Just check the labels carefully.",
          chinese: "你做得不错。只是要仔细检查标签。"
        }
      ],
      vocabularyNotes: [
        {
          term: "improve",
          chinese: "改进；做得更好",
          pronunciation: "im-PROOV",
          note: "员工想知道自己哪里可以做得更好时使用。",
          example: "I want to improve."
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
        "Could you say the last part again?",
        "I did not hear the last part."
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
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Is this the right container?",
          chinese: "这是正确的容器吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Yes, use that one.",
          chinese: "是的，用那个。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll use this container.",
          chinese: "好的，我用这个容器。"
        }
      ],
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
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "I heard “fries.” Is that correct?",
          chinese: "我听到的是“薯条”，对吗？"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "No, I said rice.",
          chinese: "不是，我说的是米饭。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, rice. Thank you.",
          chinese: "好的，米饭。谢谢。"
        }
      ],
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
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Should I stop what I am doing?",
          chinese: "我要先停下手上的事吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Yes, stop for now and help with this order.",
          chinese: "是的，先停一下，帮忙处理这个订单。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll switch now.",
          chinese: "好的，我现在切换过去。"
        }
      ],
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
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "I can do that, but I need gloves first.",
          chinese: "我可以做，但我需要先戴手套。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Good. Gloves are by the sink.",
          chinese: "很好。手套在水槽旁边。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll put them on first.",
          chinese: "好的，我先戴上。"
        }
      ],
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
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can you say the order number again?",
          chinese: "你可以再说一次订单号吗？"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Sure, it is 138.",
          chinese: "可以，是 138。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Got it. Order 138.",
          chinese: "明白了。138 号订单。"
        }
      ],
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
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Is this the right container?",
          chinese: "这是正确的容器吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Yes, use that one.",
          chinese: "是的，用那个。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll use this container.",
          chinese: "好的，我用这个容器。"
        }
      ],
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
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "I heard “fries.” Is that correct?",
          chinese: "我听到的是“薯条”，对吗？"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "No, I said rice.",
          chinese: "不是，我说的是米饭。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, rice. Thank you.",
          chinese: "好的，米饭。谢谢。"
        }
      ],
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
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Should I stop what I am doing?",
          chinese: "我要先停下手上的事吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Yes, stop for now and help with this order.",
          chinese: "是的，先停一下，帮忙处理这个订单。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll switch now.",
          chinese: "好的，我现在切换过去。"
        }
      ],
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
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "I can do that, but I need gloves first.",
          chinese: "我可以做，但我需要先戴手套。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Good. Gloves are by the sink.",
          chinese: "很好。手套在水槽旁边。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll put them on first.",
          chinese: "好的，我先戴上。"
        }
      ],
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
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Can you say the order number again?",
          chinese: "你可以再说一次订单号吗？"
        },
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Sure, it is 138.",
          chinese: "可以，是 138。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Got it. Order 138.",
          chinese: "明白了。138 号订单。"
        }
      ],
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
      english: "Let me confirm your hours for this week.",
      chinese: "我确认一下你这周的工时。",
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
        "Let me check your hours for this week.",
        "I want to confirm your weekly hours."
      ],
      recommendedResponses: [
        "Okay, thank you.",
        "I worked thirty-two hours this week.",
        "I think two hours are missing."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Let me confirm your hours for this week.",
          chinese: "我确认一下你这周的工时。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay. I worked thirty-two hours.",
          chinese: "好的。我工作了三十二个小时。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Thanks. I will check the time sheet.",
          chinese: "谢谢。我会查看工时表。"
        }
      ],
      vocabularyNotes: [
        {
          term: "hours",
          chinese: "工时；工作小时数",
          pronunciation: "OW-erz",
          note: "这里指员工这一周实际工作的小时数。",
          example: "My hours are wrong."
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
        "Okay, I will tell you before I leave.",
        "Got it. I will ask first.",
        "I will notify you before I step away."
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
        "I am sick and cannot work today.",
        "I am sick and cannot come in today."
      ],
      recommendedResponses: [
        "Thanks for letting me know.",
        "Please rest and keep me updated.",
        "Do you think you can work tomorrow?"
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
          english: "Thanks for letting me know. Please rest today.",
          chinese: "谢谢你告诉我。今天好好休息。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Thank you. I will update you tomorrow.",
          chinese: "谢谢。我明天再跟你更新。"
        }
      ],
      vocabularyNotes: [
        {
          term: "come to work",
          chinese: "来上班",
          pronunciation: "kum-toh-work",
          note: "员工说明自己今天不能到店上班时使用。",
          example: "I can come to work tomorrow."
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
        "My shift looks wrong on the schedule.",
        "The schedule has the wrong shift for me."
      ],
      recommendedResponses: [
        "Let me check the schedule.",
        "Which shift looks wrong?",
        "Please show me the schedule."
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
          english: "Which shift looks wrong?",
          chinese: "哪个班次看起来不对？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "It says I work Friday, but I asked for Friday off.",
          chinese: "上面写我周五上班，但我申请了周五休息。"
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
        "You need approval before swapping shifts.",
        "Do not switch shifts unless a manager approves it."
      ],
      recommendedResponses: [
        "Okay, I will ask first.",
        "Got it. I will not switch without approval.",
        "Who should approve the switch?"
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
          english: "Okay, I will ask for approval first.",
          chinese: "好的，我会先申请批准。"
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
        "Okay, I’ll finish the handoff now.",
        "Who should I give the handoff note to?",
        "I’ll tell the next person what is left."
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
          english: "Okay, I’ll tell the next person what is left.",
          chinese: "好的，我会告诉下一班还剩什么没做。"
        }
      ],
      vocabularyNotes: [
        {
          term: "handoff",
          chinese: "交接班；交接说明",
          pronunciation: "HAND-off",
          note: "下班前把未完成的工作告诉下一班或主管。",
          example: "Write a handoff note."
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
        "Thanks for telling me.",
        "Please tell the next shift.",
        "Write it in the handoff note."
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
          english: "Thanks. Please write it in the handoff note.",
          chinese: "谢谢。请把它写在交接说明里。"
        }
      ],
      vocabularyNotes: [
        {
          term: "not finished yet",
          chinese: "还没有完成",
          pronunciation: "not-FIN-isht-yet",
          note: "交接班时说明某项工作还没有做完。",
          example: "The prep is not finished yet."
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
        "Who closes tonight?",
        "Who is on closing tonight?"
      ],
      recommendedResponses: [
        "Maria is closing tonight.",
        "You are closing with Kevin.",
        "Let me check the schedule."
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
          english: "You are closing with Kevin tonight.",
          chinese: "今晚你和 Kevin 一起关店。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay. What time do we finish?",
          chinese: "好的。我们几点结束？"
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
        "Who opens tomorrow?",
        "Who is on opening tomorrow?"
      ],
      recommendedResponses: [
        "You open tomorrow at nine.",
        "Kevin is opening tomorrow.",
        "Let me check the schedule."
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
          english: "You open tomorrow at nine.",
          chinese: "你明天九点开店。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I will be here at nine.",
          chinese: "好的，我九点到。"
        }
      ],
      vocabularyNotes: [
        {
          term: "opening",
          chinese: "开店班；开店工作",
          pronunciation: "OH-pen-ing",
          note: "餐厅早上开始营业前的班次或准备工作。",
          example: "I am opening tomorrow."
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
        "Can Kevin and I switch shifts?",
        "Can I trade shifts with Kevin?"
      ],
      recommendedResponses: [
        "Let me check with the manager.",
        "Does Kevin agree to switch?",
        "Please write the request down."
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
          english: "Does Kevin agree to switch?",
          chinese: "Kevin 同意换班吗？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Yes, he said it is okay.",
          chinese: "是的，他说可以。"
        }
      ],
      vocabularyNotes: [
        {
          term: "switch shifts",
          chinese: "换班",
          pronunciation: "switch-shifts",
          note: "两个员工互相交换上班时间，通常需要主管批准。",
          example: "Can we switch shifts?"
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
        "Did my break get recorded?",
        "Is my break on the time sheet?"
      ],
      recommendedResponses: [
        "Let me check your time sheet.",
        "Yes, your break is recorded.",
        "No, I will fix it."
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
          english: "Let me check your time sheet.",
          chinese: "我来查一下你的工时表。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Thank you. I took my break at two.",
          chinese: "谢谢。我两点休息的。"
        }
      ],
      vocabularyNotes: [
        {
          term: "break recorded",
          chinese: "休息时间被记录",
          pronunciation: "brayk-ri-KOR-did",
          note: "询问系统或工时表里是否记录了你的休息时间。",
          example: "My break was recorded."
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
        "I am not available that day.",
        "I cannot take that shift."
      ],
      recommendedResponses: [
        "Thanks for telling me early.",
        "Please request that day off.",
        "Can you work a different day?"
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
          english: "Thanks for telling me early. Please request that day off.",
          chinese: "谢谢你提前告诉我。请申请那天休假。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I will put in the request today.",
          chinese: "好的，我今天提交申请。"
        }
      ],
      vocabularyNotes: [
        {
          term: "not available",
          chinese: "没有空；不能上班",
          pronunciation: "not-uh-VAY-luh-bul",
          note: "告诉主管某一天不能被安排上班。",
          example: "I am not available Sunday."
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
        "Can I change my availability?",
        "Can I update the days I can work?"
      ],
      recommendedResponses: [
        "Yes, send me your new availability.",
        "Please update it before Friday.",
        "Which days can you work?"
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
          english: "Yes, send me your new availability by Friday.",
          chinese: "可以，周五前把新的可上班时间发给我。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I will send it today.",
          chinese: "好的，我今天发给你。"
        }
      ],
      vocabularyNotes: [
        {
          term: "update availability",
          chinese: "更新可上班时间",
          pronunciation: "up-DAYT uh-vay-luh-BIL-i-tee",
          note: "告诉主管你哪些天、哪些时间可以上班。",
          example: "Update your availability online."
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
        "Who approves requests for time off?",
        "Who should I ask for time off?"
      ],
      recommendedResponses: [
        "The manager approves time-off requests.",
        "Please ask Maria.",
        "Submit the request in the schedule app."
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
          english: "The manager approves time-off requests.",
          chinese: "经理批准请假申请。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Okay, I will ask the manager.",
          chinese: "好的，我会问经理。"
        }
      ],
      vocabularyNotes: [
        {
          term: "time-off requests",
          chinese: "请假申请",
          pronunciation: "time-off ri-KWESTS",
          note: "员工想请假时提交给主管或经理的申请。",
          example: "Submit a time-off request."
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
        "Thanks. I will check the time sheet.",
        "Who did you cover for?",
        "Please make sure the hours are recorded."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I covered a shift yesterday.",
          chinese: "我昨天帮别人顶班了。"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Who did you cover for?",
          chinese: "你帮谁顶班了？"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I covered Kevin’s evening shift.",
          chinese: "我帮 Kevin 顶了晚班。"
        }
      ],
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
      english: "Wash your hands before touching food.",
      chinese: "接触食物前先洗手。",
      scenario: "洗手、戴手套、换手套、发网和食品接触表面卫生。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Wash your hands first.",
        "Clean your hands before you touch food."
      ],
      recommendedResponses: [
        "Okay, I’ll wash my hands now.",
        "Where is the hand sink?",
        "Should I put on gloves after washing?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Wash your hands before touching food.",
          chinese: "接触食物前先洗手。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll wash my hands now.",
          chinese: "好的，我现在去洗手。"
        }
      ],
      vocabularyNotes: [
        {
          term: "before touching food",
          chinese: "接触食物之前",
          pronunciation: "bee-FOR TUH-ching food",
          note: "表示在碰食物前必须先完成某个动作。",
          example: "Wash before touching food."
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
      english: "Use the hand sink, not the prep sink.",
      chinese: "用洗手池，不要用备餐水槽。",
      scenario: "洗手、戴手套、换手套、发网和食品接触表面卫生。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Wash your hands at the hand sink.",
        "Do not wash hands in the prep sink."
      ],
      recommendedResponses: [
        "Okay, I’ll use the hand sink.",
        "Where is the hand sink?",
        "I won’t use the prep sink for hands."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Use the hand sink, not the prep sink.",
          chinese: "用洗手池，不要用备餐水槽。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, where is the hand sink?",
          chinese: "好的，洗手池在哪里？"
        }
      ],
      vocabularyNotes: [
        {
          term: "hand sink",
          chinese: "洗手池",
          pronunciation: "hand-sink",
          note: "专门用来洗手的水槽，不是洗菜或备餐用的水槽。",
          example: "Use the hand sink."
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
      english: "Put on gloves before handling ready-to-eat food.",
      chinese: "处理即食食品前戴上手套。",
      scenario: "洗手、戴手套、换手套、发网和食品接触表面卫生。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Wear gloves for ready-to-eat food.",
        "Use gloves before touching ready-to-eat food."
      ],
      recommendedResponses: [
        "Okay, I’ll put on gloves.",
        "Where are the clean gloves?",
        "I’ll wash my hands first."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Put on gloves before handling ready-to-eat food.",
          chinese: "处理即食食品前戴上手套。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll wash my hands and put on gloves.",
          chinese: "好的，我先洗手再戴手套。"
        }
      ],
      vocabularyNotes: [
        {
          term: "ready-to-eat food",
          chinese: "即食食品",
          pronunciation: "RED-ee-too-eet food",
          note: "不需要再加热、可以直接吃的食物。",
          example: "Use gloves for ready-to-eat food."
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
      english: "Change your gloves after touching raw chicken.",
      chinese: "碰过生鸡肉后要换手套。",
      scenario: "洗手、戴手套、换手套、发网和食品接触表面卫生。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Coworker",
      roleZh: "同事可能会说",
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
      speakerRole: "Coworker",
      speakerRoleZh: "同事可能会说",
      variants: [
        "Put on new gloves after raw chicken.",
        "Do not keep the same gloves after touching raw chicken."
      ],
      recommendedResponses: [
        "Thanks, I’ll change them now.",
        "I’ll wash my hands first.",
        "Where are the clean gloves?"
      ],
      dialogue: [
        {
          speakerRole: "Coworker",
          speakerRoleZh: "同事可能会说",
          english: "Change your gloves after touching raw chicken.",
          chinese: "碰过生鸡肉后要换手套。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Thanks, I’ll change them now.",
          chinese: "谢谢，我现在换。"
        }
      ],
      vocabularyNotes: [
        {
          term: "after touching raw chicken",
          chinese: "碰过生鸡肉以后",
          pronunciation: "AF-ter TUH-ching raw CHIK-en",
          note: "接触生鸡肉后要换手套并洗手，避免污染其他食物。",
          example: "Change gloves after raw chicken."
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
      english: "Wear a hairnet while you are on the line.",
      chinese: "在操作线上工作时要戴发网。",
      scenario: "洗手、戴手套、换手套、发网和食品接触表面卫生。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Put on your hairnet on the line.",
        "You need a hairnet while working with food."
      ],
      recommendedResponses: [
        "Okay, I’ll put it on.",
        "Where are the hairnets?",
        "Do I need a hat too?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Wear a hairnet while you are on the line.",
          chinese: "在操作线上工作时要戴发网。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll put one on now.",
          chinese: "好的，我现在戴上。"
        }
      ],
      vocabularyNotes: [
        {
          term: "hairnet",
          chinese: "发网",
          pronunciation: "HAIR-net",
          note: "防止头发掉进食物里的网。",
          example: "Wear a hairnet."
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
      english: "Keep your hat on in the kitchen.",
      chinese: "在厨房里要一直戴着帽子。",
      scenario: "食品日期、日期标签、温度记录、冷藏冷冻和热食冷却。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
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
        "Do not take your hat off in the kitchen.",
        "Your hat needs to stay on in the kitchen."
      ],
      recommendedResponses: [
        "Okay, I’ll keep it on.",
        "Do I need a hairnet under it?",
        "I’ll fix it now."
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Keep your hat on in the kitchen.",
          chinese: "在厨房里要一直戴着帽子。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll keep it on.",
          chinese: "好的，我会一直戴着。"
        }
      ],
      vocabularyNotes: [
        {
          term: "hat on",
          chinese: "戴着帽子",
          pronunciation: "hat-on",
          note: "餐厅厨房中表示帽子不能摘下。",
          example: "Keep your hat on."
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
      english: "Clean and sanitize the prep table first.",
      chinese: "先清洁并消毒备餐台。",
      scenario: "洗手、戴手套、换手套、发网和食品接触表面卫生。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Wash and sanitize the prep table first.",
        "Clean the prep table, then sanitize it."
      ],
      recommendedResponses: [
        "Okay, I’ll clean and sanitize it.",
        "Which sanitizer should I use?",
        "Should I let it air-dry?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Clean and sanitize the prep table first.",
          chinese: "先清洁并消毒备餐台。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, which sanitizer should I use?",
          chinese: "好的，我应该用哪种消毒剂？"
        }
      ],
      vocabularyNotes: [
        {
          term: "clean and sanitize",
          chinese: "清洁并消毒",
          pronunciation: "kleen-and-SAN-i-tize",
          note: "先去掉污渍，再用食品接触表面消毒剂处理。",
          example: "Clean and sanitize the counter."
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
      english: "Should I change my gloves?",
      chinese: "我需要换手套吗？",
      scenario: "洗手、戴手套、换手套、发网和食品接触表面卫生。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
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
        "Do I need new gloves?",
        "Should I put on a fresh pair?"
      ],
      recommendedResponses: [
        "Yes, change them now.",
        "Yes, after touching raw food.",
        "No, those gloves are still clean."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Should I change my gloves?",
          chinese: "我需要换手套吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Yes, change them before making the salad.",
          chinese: "是的，做沙拉前换一副。"
        }
      ],
      vocabularyNotes: [
        {
          term: "change my gloves",
          chinese: "换我的手套",
          pronunciation: "chaynj-my-gluvz",
          note: "员工不确定是否需要换手套时这样问。",
          example: "I need to change my gloves."
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
      english: "Where is the sanitizer bucket?",
      chinese: "消毒桶在哪里？",
      scenario: "洗手、戴手套、换手套、发网和食品接触表面卫生。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
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
        "Where can I find the sanitizer bucket?",
        "Where do we keep the sanitizer bucket?"
      ],
      recommendedResponses: [
        "It is under the prep table.",
        "Use the red bucket by the sink.",
        "Make sure the towel stays in the bucket."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Where is the sanitizer bucket?",
          chinese: "消毒桶在哪里？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "It is under the prep table.",
          chinese: "在备餐台下面。"
        }
      ],
      vocabularyNotes: [
        {
          term: "sanitizer bucket",
          chinese: "消毒桶",
          pronunciation: "SAN-i-tie-zer BUH-kit",
          note: "装有消毒液的桶，通常用来浸泡或存放擦拭用抹布。",
          example: "Put the towel in the sanitizer bucket."
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
      english: "Keep the wiping cloth in the sanitizer bucket.",
      chinese: "把擦拭抹布放在消毒桶里。",
      scenario: "洗手、戴手套、换手套、发网和食品接触表面卫生。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Store the wiping cloth in sanitizer.",
        "Do not leave the wiping cloth on the counter."
      ],
      recommendedResponses: [
        "Okay, I’ll put it in the bucket.",
        "Should I change the sanitizer water?",
        "Where is the clean wiping cloth?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Keep the wiping cloth in the sanitizer bucket.",
          chinese: "把擦拭抹布放在消毒桶里。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll put it back in the bucket.",
          chinese: "好的，我把它放回桶里。"
        }
      ],
      vocabularyNotes: [
        {
          term: "wiping cloth",
          chinese: "擦拭抹布",
          pronunciation: "WHY-ping klawth",
          note: "用来擦食品接触表面的抹布，使用间隔应放在消毒桶里。",
          example: "Use a clean wiping cloth."
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
      scenario: "生熟分开、切菜板、过敏订单、消毒桶和交叉污染。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Keep raw chicken below cooked food.",
          chinese: "把生鸡肉放在熟食下面。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll move it to the lower shelf.",
          chinese: "好的，我把它移到下面一层。"
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
      scenario: "生熟分开、切菜板、过敏订单、消毒桶和交叉污染。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Do not use the same cutting board for raw meat and vegetables.",
          chinese: "不要用同一块砧板切生肉和蔬菜。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll get a separate board.",
          chinese: "好的，我拿一块单独的砧板。"
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
      scenario: "食品日期、日期标签、温度记录、冷藏冷冻和热食冷却。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Check the expiration date first.",
          chinese: "先检查保质期。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
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
      scenario: "食品日期、日期标签、温度记录、冷藏冷冻和热食冷却。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "This container needs a date label.",
          chinese: "这个容器需要日期标签。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
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
      scenario: "食品日期、日期标签、温度记录、冷藏冷冻和热食冷却。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Put the lid on before you store it.",
          chinese: "存放前把盖子盖上。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
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
      scenario: "食品日期、日期标签、温度记录、冷藏冷冻和热食冷却。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Do not leave food out too long.",
          chinese: "不要把食物放在外面太久。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll put it back in the cooler.",
          chinese: "好的，我把它放回冷藏柜。"
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
      scenario: "食品日期、日期标签、温度记录、冷藏冷冻和热食冷却。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "This needs to go back in the cooler.",
          chinese: "这个需要放回冷藏柜。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
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
      scenario: "洗手、戴手套、换手套、发网和食品接触表面卫生。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Change the gloves before making the salad.",
          chinese: "做沙拉前换手套。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
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
      scenario: "食品日期、日期标签、温度记录、冷藏冷冻和热食冷却。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Check the cooler temperature.",
          chinese: "检查冷藏柜温度。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll check it now.",
          chinese: "好的，我现在检查。"
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
      scenario: "食品日期、日期标签、温度记录、冷藏冷冻和热食冷却。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Check the freezer temperature.",
          chinese: "检查冷冻柜温度。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll check it now.",
          chinese: "好的，我现在检查。"
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
      scenario: "食品日期、日期标签、温度记录、冷藏冷冻和热食冷却。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "This food is past the use-by date.",
          chinese: "这个食物已经过了使用日期。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
          english: "Okay, I’ll throw it away.",
          chinese: "好的，我把它丢掉。"
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
      scenario: "生熟分开、切菜板、过敏订单、消毒桶和交叉污染。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Let it cool before you cover it.",
          chinese: "盖起来之前先让它冷却。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
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
      scenario: "生熟分开、切菜板、过敏订单、消毒桶和交叉污染。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Do not touch ready-to-eat food with bare hands.",
          chinese: "不要徒手接触即食食品。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
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
      scenario: "食品日期、日期标签、温度记录、冷藏冷冻和热食冷却。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Keep chemicals away from food.",
          chinese: "把化学品远离食物。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
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
      scenario: "生熟分开、切菜板、过敏订单、消毒桶和交叉污染。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Use the red cutting board for raw meat.",
          chinese: "生肉用红色砧板。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
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
      scenario: "生熟分开、切菜板、过敏订单、消毒桶和交叉污染。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Use the green cutting board for vegetables.",
          chinese: "蔬菜用绿色砧板。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
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
      scenario: "生熟分开、切菜板、过敏订单、消毒桶和交叉污染。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Change the towel if it touches the floor.",
          chinese: "抹布碰到地上就要换。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
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
      scenario: "生熟分开、切菜板、过敏订单、消毒桶和交叉污染。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Do not eat on the prep table.",
          chinese: "不要在备餐台上吃东西。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
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
      scenario: "生熟分开、切菜板、过敏订单、消毒桶和交叉污染。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Store raw seafood separately.",
          chinese: "把生海鲜分开存放。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
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
      scenario: "生熟分开、切菜板、过敏订单、消毒桶和交叉污染。",
      importance: "这些是北美餐厅最常见的食品安全要求，听懂并照做可以避免污染、违规和顾客过敏风险。",
      role: "Supervisor",
      roleZh: "主管可能会说",
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
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
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
          speakerRole: "Supervisor",
          speakerRoleZh: "主管可能会说",
          english: "Use separate utensils for allergen orders.",
          chinese: "过敏订单要使用单独的工具。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工要说",
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
        scenario: "扫地、倒垃圾、换垃圾袋和纸箱回收。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Check the bag again before sealing it.",
          "Look in the bag one more time before you close it."
        ],
        recommendedResponses: [
          "Okay, I’ll check it again.",
          "I’ll make sure everything is inside.",
          "Should I staple the receipt on it?"
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
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I’ll make sure everything is inside.",
            chinese: "好的，我确认所有东西都在里面。"
          }
        ],
        vocabularyNotes: [
          {
            term: "double-check",
            chinese: "再检查一遍",
            pronunciation: "DUH-bul-chek",
            note: "出餐或打包前再确认一次，避免少放东西。",
            example: "Double-check the order."
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
        english: "Cut the chicken into even pieces.",
        chinese: "把鸡肉切成大小均匀的块。",
        scenario: "备菜、切配、称重、份量和食材标签。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Cut the chicken into the same size pieces.",
          "Make the chicken pieces even."
        ],
        recommendedResponses: [
          "Okay, I’ll cut them evenly.",
          "Should I cut them smaller?",
          "Can you show me the right size?"
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Cut the chicken into even pieces.",
            chinese: "把鸡肉切成大小均匀的块。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay. Can you show me the right size?",
            chinese: "好的。你可以给我看正确大小吗？"
          }
        ],
        vocabularyNotes: [
          {
            term: "even pieces",
            chinese: "大小均匀的块",
            pronunciation: "EE-vin PEE-siz",
            note: "备菜时每块大小接近，方便熟得一致。",
            example: "Cut them into even pieces."
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
        english: "Sweep under the fryer.",
        chinese: "把炸炉下面扫一下。",
        scenario: "扫地、倒垃圾、换垃圾袋和纸箱回收。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Sweep the floor under the fryer.",
          "Clean under the fryer with the broom."
        ],
        recommendedResponses: [
          "Okay, I’ll sweep under it.",
          "Should I move the mats first?",
          "I’ll put the wet floor sign out if needed."
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Sweep under the fryer.",
            chinese: "把炸炉下面扫一下。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I’ll move the mat and sweep under it.",
            chinese: "好的，我会移开地垫并扫下面。"
          }
        ],
        vocabularyNotes: [
          {
            term: "under the fryer",
            chinese: "炸炉下面",
            pronunciation: "UN-der thuh FRY-er",
            note: "清洁炸炉下方容易积油和食物残渣的区域。",
            example: "Clean under the fryer."
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
        scenario: "扫地、倒垃圾、换垃圾袋和纸箱回收。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Okay, I’ll take it out now.",
          "Should I replace the liner too?",
          "I’ll tie the bag tightly."
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Take out the trash before closing.",
            chinese: "关店前把垃圾倒掉。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I’ll tie the bag and replace the liner.",
            chinese: "好的，我会扎紧垃圾袋并换新的内衬。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Thank you. Break down the boxes after that.",
            chinese: "谢谢。之后把纸箱压平。"
          }
        ],
        vocabularyNotes: [
          {
            term: "take out the trash",
            chinese: "倒垃圾；把垃圾拿出去",
            pronunciation: "tayk-out-thuh-trash",
            note: "把垃圾袋拿到外面的垃圾区或垃圾箱。",
            example: "Take out the trash now."
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
        scenario: "擦桌子、柜台、备餐台和食品接触表面。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Okay, I’ll wipe it down.",
          "Should I refill the lids too?",
          "I’ll clean the spills first."
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
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I’ll wipe it down and check the lids.",
            chinese: "好的，我会擦干净并检查杯盖。"
          }
        ],
        vocabularyNotes: [
          {
            term: "drink station",
            chinese: "饮料区",
            pronunciation: "drink-STAY-shun",
            note: "顾客或员工取饮料、杯子、吸管和杯盖的区域。",
            example: "Restock the drink station."
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
        english: "Weigh each piece.",
        chinese: "每一块都称一下重量。",
        scenario: "备菜、切配、称重、份量和食材标签。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Check the weight of each piece.",
          "Put each piece on the scale."
        ],
        recommendedResponses: [
          "Okay, I’ll weigh each piece.",
          "What weight should it be?",
          "This piece is too big."
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Weigh each piece.",
            chinese: "每一块都称一下重量。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay. What weight should it be?",
            chinese: "好的。应该是多少重量？"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "About four ounces each.",
            chinese: "每块大约四盎司。"
          }
        ],
        vocabularyNotes: [
          {
            term: "weigh each piece",
            chinese: "每块称重",
            pronunciation: "way eech pees",
            note: "备菜时用秤确认每一块的重量符合标准。",
            example: "Weigh each piece before cooking."
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
        english: "Mop the floor after closing.",
        chinese: "关店后拖地。",
        scenario: "扫地、拖地、地面湿滑和关店地面清洁。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Mop after we close.",
          "Mop the floor at closing."
        ],
        recommendedResponses: [
          "Okay, I’ll mop after closing.",
          "Should I sweep first?",
          "I’ll put out the wet floor sign."
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Mop the floor after closing.",
            chinese: "关店后拖地。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I’ll sweep first and then mop.",
            chinese: "好的，我会先扫地再拖地。"
          }
        ],
        vocabularyNotes: [
          {
            term: "mop the floor",
            chinese: "拖地",
            pronunciation: "mahp-thuh-flor",
            note: "用拖把清洁地面，通常在扫地之后做。",
            example: "Mop the floor tonight."
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
        scenario: "扫地、拖地、地面湿滑和关店地面清洁。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "The floor has not dried yet.",
          "This area is still wet."
        ],
        recommendedResponses: [
          "Put out the wet floor sign.",
          "Let it dry before moving the mats back.",
          "Tell people to walk carefully."
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "The floor is still wet.",
            chinese: "地面还是湿的。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Keep the wet floor sign out until it dries.",
            chinese: "地面干之前把小心地滑标志继续放着。"
          }
        ],
        vocabularyNotes: [
          {
            term: "still wet",
            chinese: "还是湿的",
            pronunciation: "stil-wet",
            note: "提醒别人地面还没干，走路要小心。",
            example: "The mat is still wet."
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
        scenario: "扫地、拖地、地面湿滑和关店地面清洁。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Okay, I’ll put it out now.",
          "I’ll leave it there until the floor dries.",
          "Should I block this area too?"
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Put up the wet floor sign.",
            chinese: "放上小心地滑警示牌。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I’ll put it by the wet area.",
            chinese: "好的，我把它放在湿的地方旁边。"
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
        scenario: "备菜、切配、称重、份量和食材标签。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Okay, I’ll prep more now.",
          "How many do we need?",
          "Which sauce should I fill first?"
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Prep more sauce cups.",
            chinese: "再准备一些酱料杯。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay. How many do we need?",
            chinese: "好的。需要多少个？"
          }
        ],
        vocabularyNotes: [
          {
            term: "sauce cups",
            chinese: "酱料杯",
            pronunciation: "saws-kups",
            note: "装蘸酱或调味酱的小杯子。",
            example: "Fill the sauce cups."
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
        english: "Finish the closing checklist.",
        chinese: "完成关店检查清单。",
        scenario: "关店清洁、补货、盘点和未完成工作交接。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Complete the closing checklist.",
          "Go through the closing checklist."
        ],
        recommendedResponses: [
          "Okay, I’ll finish the checklist.",
          "Should I check the cooler too?",
          "I’ll tell you if anything is missing."
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Finish the closing checklist.",
            chinese: "完成关店检查清单。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I’ll check each item and tell you when it is done.",
            chinese: "好的，我会逐项检查，完成后告诉你。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Good. Leave a note if anything is not finished.",
            chinese: "好。如果有没完成的事，留个说明。"
          }
        ],
        vocabularyNotes: [
          {
            term: "closing checklist",
            chinese: "关店检查清单",
            pronunciation: "KLOH-zing CHEK-list",
            note: "关店前要确认清洁、补货、设备和垃圾等项目。",
            example: "Check the closing checklist."
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
        scenario: "关店清洁、补货、盘点和未完成工作交接。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Okay, I’ll count it now.",
          "Which items should I count first?",
          "I’ll write down what is low."
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Count the inventory before we close.",
            chinese: "关店前盘点库存。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I’ll write down what we need.",
            chinese: "好的，我会写下我们缺什么。"
          }
        ],
        vocabularyNotes: [
          {
            term: "count the inventory",
            chinese: "盘点库存",
            pronunciation: "kownt-the-IN-ven-tor-ee",
            note: "关店前检查食材或用品还剩多少。",
            example: "Count the inventory tonight."
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
        english: "Check the oil temperature.",
        chinese: "检查油温。",
        scenario: "炸炉、油温、炸制时间、设备状态和出餐进度。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Check how hot the oil is.",
          "Look at the fryer temperature."
        ],
        recommendedResponses: [
          "Okay, I’ll check it now.",
          "The oil is not hot enough yet.",
          "The oil is too hot."
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Check the oil temperature.",
            chinese: "检查油温。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay. It is not hot enough yet.",
            chinese: "好的。现在还不够热。"
          }
        ],
        vocabularyNotes: [
          {
            term: "oil temperature",
            chinese: "油温",
            pronunciation: "oyl TEM-pruh-cher",
            note: "炸炉里的油当前有多热，影响炸制时间和出餐质量。",
            example: "The oil temperature is low."
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
        english: "How long on the tenders?",
        chinese: "鸡柳还要多久？",
        scenario: "炸炉、油温、炸制时间、设备状态和出餐进度。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
        role: "Coworker",
        roleZh: "同事可能会说",
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
        speakerRole: "Coworker",
        speakerRoleZh: "同事可能会说",
        variants: [
          "How much longer for the tenders?",
          "When will the tenders be ready?"
        ],
        recommendedResponses: [
          "About three more minutes.",
          "They are almost ready.",
          "I just dropped them."
        ],
        dialogue: [
          {
            speakerRole: "Coworker",
            speakerRoleZh: "同事可能会说",
            english: "How long on the tenders?",
            chinese: "鸡柳还要多久？"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "About three more minutes.",
            chinese: "大约还要三分钟。"
          }
        ],
        vocabularyNotes: [
          {
            term: "how long on",
            chinese: "还要多久",
            pronunciation: "how-long-on",
            note: "出餐时询问某个餐品还需要多久。",
            example: "How long on the fries?"
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
        scenario: "扫地、拖地、地面湿滑和关店地面清洁。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Do not serve food from the floor.",
          "Throw away food that fell on the floor."
        ],
        recommendedResponses: [
          "Okay, I’ll throw it away.",
          "I’ll remake it fresh.",
          "Should I start a new one?"
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Do not serve food that fell on the floor.",
            chinese: "掉到地上的食物不能提供给顾客。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I’ll throw it away and remake it.",
            chinese: "好的，我会丢掉并重新做。"
          }
        ],
        vocabularyNotes: [
          {
            term: "fell on the floor",
            chinese: "掉到地上",
            pronunciation: "fel-on-the-flor",
            note: "食物掉到地上后不能再出餐。",
            example: "The bread fell on the floor."
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
        scenario: "备菜、切配、称重、份量和食材标签。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Store chemicals away from food.",
          "Do not keep chemicals near prep areas."
        ],
        recommendedResponses: [
          "Okay, I’ll move them away.",
          "Where should I store them?",
          "I’ll keep chemicals off the prep table."
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Keep cleaning chemicals away from food and prep areas.",
            chinese: "清洁化学品要远离食品和备餐区域。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I’ll store them in the chemical area.",
            chinese: "好的，我会放到化学品存放区。"
          }
        ],
        vocabularyNotes: [
          {
            term: "cleaning chemicals",
            chinese: "清洁化学品",
            pronunciation: "KLEE-ning KEM-i-kulz",
            note: "清洁剂、消毒剂等，不能放在食物或备餐台附近。",
            example: "Store cleaning chemicals away."
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
        scenario: "擦桌子、柜台、备餐台和食品接触表面。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
            speakerRoleZh: "主管可能会说",
            english: "Do not thaw meat on the counter. Follow the procedure.",
            chinese: "不要把肉放在台面上解冻。按流程操作。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay. Where should I thaw it?",
            chinese: "好的。我应该在哪里解冻？"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Use the cooler or the approved method.",
            chinese: "用冷藏柜或批准的方法。"
          }
        ],
        vocabularyNotes: [
          {
            term: "thaw meat",
            chinese: "解冻肉类",
            pronunciation: "thaw-meet",
            note: "把冷冻肉恢复到可处理状态，不能随便放在台面上。",
            example: "Thaw meat in the cooler."
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
        scenario: "备菜、切配、称重、份量和食材标签。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Okay, I’ll label and date it.",
          "Where are the labels?",
          "Should I write today’s date?"
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Label and date the prep container before putting it away.",
            chinese: "把备料盒收起来之前，要贴标签并写上日期。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I’ll write today’s date on it.",
            chinese: "好的，我会写上今天的日期。"
          }
        ],
        vocabularyNotes: [
          {
            term: "label and date",
            chinese: "贴标签并写日期",
            pronunciation: "LAY-bul-and-date",
            note: "备料容器收起来前写清内容和日期。",
            example: "Label and date the sauce."
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
        scenario: "扫地、拖地、地面湿滑和关店地面清洁。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Okay, I’ll write it down.",
          "What temperature should it be?",
          "The temperature looks too low."
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Check and record the holding temperature.",
            chinese: "检查并记录食品的保温或冷藏温度。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay. What temperature should it be?",
            chinese: "好的。应该是多少温度？"
          }
        ],
        vocabularyNotes: [
          {
            term: "holding temperature",
            chinese: "保温或冷藏温度",
            pronunciation: "HOHL-ding TEM-pruh-cher",
            note: "食品存放时必须保持的安全温度。",
            example: "Record the holding temperature."
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
        english: "We are waiting on the wings.",
        chinese: "我们还在等鸡翅。",
        scenario: "扫地、拖地、地面湿滑和关店地面清洁。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
        role: "Worker",
        roleZh: "后厨员工要说",
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
        speakerRole: "Worker",
        speakerRoleZh: "后厨员工要说",
        variants: [
          "The wings are not ready yet.",
          "The order is waiting on wings."
        ],
        recommendedResponses: [
          "Okay, I’ll tell the front.",
          "How much longer on the wings?",
          "Let me know when they are ready."
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "We are waiting on the wings.",
            chinese: "我们还在等鸡翅。"
          },
          {
            speakerRole: "Coworker",
            speakerRoleZh: "同事可能会说",
            english: "Okay, I’ll tell the front.",
            chinese: "好的，我告诉前台。"
          },
          {
            speakerRole: "Coworker",
            speakerRoleZh: "同事可能会说",
            english: "How much longer?",
            chinese: "还要多久？"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "About two more minutes.",
            chinese: "大约还要两分钟。"
          }
        ],
        vocabularyNotes: [
          {
            term: "waiting on",
            chinese: "还在等；还差",
            pronunciation: "WAY-ting-on",
            note: "出餐时表示整份订单还差某一样餐品。",
            example: "We are waiting on fries."
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
        english: "The oil is too hot.",
        chinese: "油温太高了。",
        scenario: "炸炉、油温、炸制时间、设备状态和出餐进度。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
        role: "Worker",
        roleZh: "后厨员工要说",
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
        speakerRole: "Worker",
        speakerRoleZh: "后厨员工要说",
        variants: [
          "The fryer oil is too hot.",
          "The oil temperature is too high."
        ],
        recommendedResponses: [
          "Turn it down a little.",
          "Wait before dropping more food.",
          "Tell the supervisor."
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "The oil is too hot.",
            chinese: "油温太高了。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Turn it down and wait a minute.",
            chinese: "调低一点，等一分钟。"
          }
        ],
        vocabularyNotes: [
          {
            term: "too hot",
            chinese: "太热；温度太高",
            pronunciation: "too-hot",
            note: "油温过高可能把食物炸焦或造成危险。",
            example: "The pan is too hot."
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
        english: "The oil is not hot enough.",
        chinese: "油温不够高。",
        scenario: "炸炉、油温、炸制时间、设备状态和出餐进度。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
        role: "Worker",
        roleZh: "后厨员工要说",
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
        speakerRole: "Worker",
        speakerRoleZh: "后厨员工要说",
        variants: [
          "The fryer is not hot enough yet.",
          "The oil temperature is too low."
        ],
        recommendedResponses: [
          "Wait before dropping the fries.",
          "Check the fryer setting.",
          "Tell me when it is ready."
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "The oil is not hot enough.",
            chinese: "油温不够高。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Wait before dropping the fries.",
            chinese: "先等一下，不要下薯条。"
          }
        ],
        vocabularyNotes: [
          {
            term: "not hot enough",
            chinese: "不够热；温度不够高",
            pronunciation: "not-hot-ee-NUF",
            note: "油温还没达到可以炸食物的温度。",
            example: "The oven is not hot enough."
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
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
            speakerRoleZh: "后厨员工要说",
            english: "Okay. How much should I add?",
            chinese: "好的。我要加多少？"
          }
        ],
        vocabularyNotes: [
          {
            term: "dish detergent",
            chinese: "洗碗清洁剂",
            pronunciation: "dish dee-TUR-jent",
            note: "专门用来洗餐具，不等于桌面清洁剂。",
            example: "Add dish detergent."
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
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "I will rinse them before sanitizing."
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Rinse the dishes first.",
            chinese: "先把盘子冲洗一下。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I’ll rinse them before sanitizing.",
            chinese: "好的，我消毒前先冲洗。"
          }
        ],
        vocabularyNotes: [
          {
            term: "rinse",
            chinese: "冲洗",
            pronunciation: "rins",
            note: "用水冲一下，通常在清洗后、消毒前做。",
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
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Wash the dishes in the first sink.",
            chinese: "在第一个水槽里清洗餐具。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, first sink for washing. Do I add detergent here?",
            chinese: "好的，第一个水槽清洗。这里要加洗洁精吗？"
          }
        ],
        vocabularyNotes: [
          {
            term: "first sink",
            chinese: "第一个水槽",
            pronunciation: "furst-sink",
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
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Wash them again.",
            chinese: "再洗一遍。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I’ll wash them again with detergent.",
            chinese: "好的，我用洗洁精再洗一遍。"
          }
        ],
        vocabularyNotes: [
          {
            term: "wash them again",
            chinese: "再洗一遍",
            pronunciation: "wash-them-uh-GEN",
            note: "餐具还有油或脏东西时，需要重新清洗。",
            example: "Wash the pans again."
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
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
        role: "Worker",
        roleZh: "后厨员工要说",
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
        speakerRoleZh: "后厨员工要说",
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
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "The dishwasher is full.",
            chinese: "洗碗机满了。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Start it now, then unload it when it is done.",
            chinese: "现在启动，完成后把餐具拿出来。"
          }
        ],
        vocabularyNotes: [
          {
            term: "dishwasher is full",
            chinese: "洗碗机满了",
            pronunciation: "DISH-wash-er-iz-ful",
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
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Start the dishwasher.",
            chinese: "启动洗碗机。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay. Which button do I press?",
            chinese: "好的。按哪个按钮？"
          }
        ],
        vocabularyNotes: [
          {
            term: "start the dishwasher",
            chinese: "启动洗碗机",
            pronunciation: "start-thuh-DISH-wash-er",
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
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
        role: "Worker",
        roleZh: "后厨员工要说",
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
        speakerRoleZh: "后厨员工要说",
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
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "The dishwasher is not draining.",
            chinese: "洗碗机不排水。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Do not keep running it. Check the filter first.",
            chinese: "不要继续运行。先检查过滤器。"
          }
        ],
        vocabularyNotes: [
          {
            term: "not draining",
            chinese: "不排水",
            pronunciation: "not-DRAY-ning",
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
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
        role: "Worker",
        roleZh: "后厨员工要说",
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
        speakerRoleZh: "后厨员工要说",
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
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "The dishwasher is not getting hot enough.",
            chinese: "洗碗机温度不够高。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Do not use those dishes yet. I’ll check the temperature.",
            chinese: "先不要用那些餐具。我来检查温度。"
          }
        ],
        vocabularyNotes: [
          {
            term: "hot enough",
            chinese: "温度够高",
            pronunciation: "hot-ee-NUF",
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
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Clean the dishwasher filter.",
            chinese: "清洗洗碗机过滤器。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay. Should I turn it off first?",
            chinese: "好的。我要先关掉吗？"
          }
        ],
        vocabularyNotes: [
          {
            term: "dishwasher filter",
            chinese: "洗碗机过滤器",
            pronunciation: "DISH-wash-er FIL-ter",
            note: "用来挡住食物残渣或脏东西的部件。",
            example: "Remove the dishwasher filter."
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
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
          "Okay, I will keep them separate.",
          "Which cleaner should I use?",
          "I will ask before using chemicals."
        ],
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Don’t mix chemicals.",
            chinese: "不要混合清洁化学品。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I will keep them separate and ask first.",
            chinese: "好的，我会分开放，有问题先问。"
          }
        ],
        vocabularyNotes: [
          {
            term: "mix chemicals",
            chinese: "混合化学品",
            pronunciation: "miks-KEM-i-kulz",
            note: "清洁剂混合可能产生危险气体，听到后要停止并询问。",
            example: "Never mix chemicals."
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
        scenario: "擦桌子、柜台、备餐台和食品接触表面。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Wipe the table.",
            chinese: "把桌子擦干净。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I’ll use a clean cloth.",
            chinese: "好的，我用干净抹布。"
          }
        ],
        vocabularyNotes: [
          {
            term: "wipe the table",
            chinese: "擦桌子",
            pronunciation: "wipe-thuh-TAY-bul",
            note: "用干净抹布擦掉桌面上的食物残渣或污渍。",
            example: "Wipe the counter."
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
        scenario: "擦桌子、柜台、备餐台和食品接触表面。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Clean the table.",
            chinese: "清洁桌面。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay. Should I sanitize it after cleaning?",
            chinese: "好的。清洁后要消毒吗？"
          }
        ],
        vocabularyNotes: [
          {
            term: "clean the table",
            chinese: "清洁桌面",
            pronunciation: "kleen-thuh-TAY-bul",
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
        scenario: "擦桌子、柜台、备餐台和食品接触表面。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Spray the cleaner on the cloth.",
            chinese: "把清洁剂喷在抹布上。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay, I will not spray near food.",
            chinese: "好的，我不会在食物旁边喷。"
          }
        ],
        vocabularyNotes: [
          {
            term: "on the cloth",
            chinese: "在抹布上",
            pronunciation: "on-thuh-klawth",
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
        scenario: "擦桌子、柜台、备餐台和食品接触表面。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
        dialogue: [
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Use the table cleaner.",
            chinese: "使用桌面清洁剂。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "后厨员工要说",
            english: "Okay. Should I sanitize after cleaning?",
            chinese: "好的。清洁后要消毒吗？"
          }
        ],
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
        scenario: "清洗、冲洗、消毒和自然晾干的三槽水池流程。",
        importance: "后厨工作节奏快，听懂这些短句可以避免出餐延误、清洁错误和安全问题。",
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
            speakerRoleZh: "后厨员工要说",
            english: "Okay, clean first, then sanitize.",
            chinese: "好的，先清洁，再消毒。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Right. Let it air-dry after sanitizing.",
            chinese: "对。消毒后让它自然晾干。"
          }
        ],
        vocabularyNotes: [
          {
            term: "sanitize",
            chinese: "消毒",
            pronunciation: "SAN-i-tize",
            note: "餐厅里常用于食品接触表面或餐具消毒。",
            example: "Sanitize the prep table."
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
        english: "Hi, what can I get for you?",
        chinese: "您好，您想点些什么？",
        scenario: "顾客进店时欢迎、开始点餐和说明套餐。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Hi, what would you like to order?",
          "What can I get started for you?"
        ],
        recommendedResponses: [
          "Can I get a chicken combo?",
          "I need a minute, please.",
          "What do you recommend?"
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Hi, what can I get for you?",
            chinese: "您好，您想点些什么？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I get a chicken combo?",
            chinese: "我可以要一个鸡肉套餐吗？"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Sure. What drink would you like?",
            chinese: "好的。您想要什么饮料？"
          }
        ],
        vocabularyNotes: [
          {
            term: "what can I get for you",
            chinese: "您想点些什么",
            pronunciation: "wuht-kan-ai-get-for-yoo",
            note: "前台开始帮顾客点餐时最常用的问法。",
            example: "What can I get for you today?"
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
        scenario: "确认套餐、数量、口味、饮料和酱料放旁边。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Would you like the sauce tossed or on the side?",
          "Sauce tossed in or on the side?"
        ],
        recommendedResponses: [
          "Tossed, please.",
          "On the side, please.",
          "Half tossed and half on the side."
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
            note: "酱料不拌进去，单独放在小杯里。",
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
        english: "What would you like to drink?",
        chinese: "您想喝什么？",
        scenario: "确认套餐、数量、口味、饮料和酱料放旁边。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "What drink would you like?",
          "Which drink would you like?"
        ],
        recommendedResponses: [
          "A Coke, please.",
          "Water, please.",
          "No drink, thank you."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "What would you like to drink?",
            chinese: "您想喝什么？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "A Coke, please.",
            chinese: "请给我可乐。"
          }
        ],
        vocabularyNotes: [
          {
            term: "what would you like to drink",
            chinese: "您想喝什么",
            pronunciation: "wuht-wood-yoo-like-tuh-drink",
            note: "套餐或点餐时询问顾客饮料选择。",
            example: "What would you like with that?"
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
        scenario: "确认订单、等待时间、叫号取餐、外卖取餐和顾客问题处理。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Would you like anything else?",
          "Anything else for you today?"
        ],
        recommendedResponses: [
          "That’s all, thank you.",
          "Can I add fries?",
          "One more drink, please."
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
            term: "anything else",
            chinese: "还要别的吗",
            pronunciation: "EN-ee-thing els",
            note: "点餐快结束时确认顾客是否还要加东西。",
            example: "Anything else today?"
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
        scenario: "确认订单、等待时间、叫号取餐、外卖取餐和顾客问题处理。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Does that look correct?",
          "Is everything correct on the screen?"
        ],
        recommendedResponses: [
          "Yes, that’s correct.",
          "No, I wanted ten wings.",
          "Can you change the drink?"
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Is that correct?",
            chinese: "这样对吗？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Yes, that’s correct.",
            chinese: "是的，没错。"
          }
        ],
        vocabularyNotes: [
          {
            term: "correct",
            chinese: "正确的；没错的",
            pronunciation: "kuh-REKT",
            note: "确认屏幕上的订单是否正确。",
            example: "The order is correct."
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
        scenario: "确认套餐、数量、口味、饮料和酱料放旁边。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Would you like the combo or just chicken?",
          "Combo meal or chicken only?"
        ],
        recommendedResponses: [
          "Combo, please.",
          "Chicken only.",
          "What comes with the combo?"
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Combo or chicken only?",
            chinese: "套餐还是只要鸡肉单点？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Chicken only, please.",
            chinese: "只要鸡肉单点。"
          }
        ],
        vocabularyNotes: [
          {
            term: "combo",
            chinese: "套餐",
            pronunciation: "KOM-boh",
            note: "通常包含主食、配菜和饮料。",
            example: "I want the combo."
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
        scenario: "确认套餐、数量、口味、饮料和酱料放旁边。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Would you like the combo or just wings?",
          "Combo meal or wings only?"
        ],
        recommendedResponses: [
          "Wings only, please.",
          "The combo, please.",
          "Does the combo come with fries?"
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Combo or wings only?",
            chinese: "套餐还是只要鸡翅单点？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Wings only, please.",
            chinese: "只要鸡翅单点。"
          }
        ],
        vocabularyNotes: [
          {
            term: "wings only",
            chinese: "只要鸡翅单点",
            pronunciation: "wingz-OHN-lee",
            note: "顾客不要套餐，只点鸡翅本身。",
            example: "Wings only, please."
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
        scenario: "确认套餐、数量、口味、饮料和酱料放旁边。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Sure. Chicken only.",
          "Okay, no combo.",
          "How many pieces would you like?"
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Chicken only.",
            chinese: "只要鸡肉单点。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Sure. How many pieces would you like?",
            chinese: "好的。您要几块？"
          }
        ],
        vocabularyNotes: [
          {
            term: "chicken only",
            chinese: "只要鸡肉单点",
            pronunciation: "CHIK-in-OHN-lee",
            note: "表示不要套餐、不要配菜，只要鸡肉。",
            example: "Chicken only, please."
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
        scenario: "确认套餐、数量、口味、饮料和酱料放旁边。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Sure. Wings only.",
          "How many wings would you like?",
          "What flavor would you like?"
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Wings only.",
            chinese: "只要鸡翅单点。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Sure. What flavor would you like?",
            chinese: "好的。您想要什么口味？"
          }
        ],
        vocabularyNotes: [
          {
            term: "wings only",
            chinese: "只要鸡翅单点",
            pronunciation: "wingz-OHN-lee",
            note: "表示只点鸡翅，不要套餐。",
            example: "I want wings only."
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
        scenario: "确认套餐、数量、口味、饮料和酱料放旁边。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Okay, no combo.",
          "Sure, just the chicken.",
          "Got it. No fries or drink."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "No combo.",
            chinese: "不要套餐。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Okay, no combo. Just the chicken?",
            chinese: "好的，不要套餐。只要鸡肉吗？"
          }
        ],
        vocabularyNotes: [
          {
            term: "no combo",
            chinese: "不要套餐",
            pronunciation: "noh-KOM-boh",
            note: "顾客不想要包含配菜和饮料的套餐。",
            example: "No combo today."
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
        scenario: "确认套餐、数量、口味、饮料和酱料放旁边。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Sure, tossed.",
          "What flavor would you like?",
          "Okay, sauce mixed in."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Tossed, please.",
            chinese: "请帮我拌酱。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Sure, tossed. What flavor?",
            chinese: "好的，拌酱。什么口味？"
          }
        ],
        vocabularyNotes: [
          {
            term: "tossed",
            chinese: "拌酱",
            pronunciation: "tawst",
            note: "鸡翅或鸡柳和酱料拌在一起。",
            example: "Make it tossed."
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
        scenario: "确认套餐、数量、口味、饮料和酱料放旁边。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Sure, plain.",
          "Okay, no sauce.",
          "Do you want sauce on the side?"
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Keep them plain.",
            chinese: "保持原味，不要拌酱。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Sure, plain. Would you like sauce on the side?",
            chinese: "好的，原味。您要酱料放旁边吗？"
          }
        ],
        vocabularyNotes: [
          {
            term: "plain",
            chinese: "原味；不加酱",
            pronunciation: "playn",
            note: "表示不要额外酱料或调味。",
            example: "Keep it plain."
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
        scenario: "确认套餐、数量、口味、饮料和酱料放旁边。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Does the combo include a drink?",
          "Does it come with a drink?"
        ],
        recommendedResponses: [
          "Yes, it comes with a drink.",
          "No, the drink is extra.",
          "You can choose any fountain drink."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Is the drink included?",
            chinese: "饮料包括在套餐里吗？"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Yes, it comes with a drink.",
            chinese: "是的，套餐包括一杯饮料。"
          }
        ],
        vocabularyNotes: [
          {
            term: "included",
            chinese: "包括在内",
            pronunciation: "in-KLOO-did",
            note: "说明某样东西已经包含在价格或套餐里。",
            example: "Fries are included."
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
        scenario: "现金、刷卡、感应付款、找零、付款失败和收据。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "You can tap to pay here."
        ],
        recommendedResponses: [
          "Okay, I’ll tap it now.",
          "Should I tap here?",
          "It went through."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "You can tap your card here.",
            chinese: "您可以在这里感应付款。"
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
            term: "tap your card",
            chinese: "感应银行卡",
            pronunciation: "tap-yer-kard",
            note: "用银行卡或手机靠近机器付款。",
            example: "Tap your card here."
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
        scenario: "现金、刷卡、感应付款、找零、付款失败和收据。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Follow the prompts on the screen.",
          "Look at the screen and follow the steps."
        ],
        recommendedResponses: [
          "Okay, I see it.",
          "Do I tap here?",
          "It is asking for a tip."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Please follow the screen.",
            chinese: "请按照屏幕提示操作。"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Okay, it is asking for a tip.",
            chinese: "好的，屏幕在问小费。"
          }
        ],
        vocabularyNotes: [
          {
            term: "follow the screen",
            chinese: "按照屏幕提示操作",
            pronunciation: "FAH-loh-thuh-skreen",
            note: "刷卡机上会提示小费、付款方式或确认步骤。",
            example: "Follow the screen."
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
        scenario: "现金、刷卡、感应付款、找零、付款失败和收据。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Yes, please.",
          "No, thank you.",
          "Can you email it to me?"
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Would you like a receipt?",
            chinese: "您需要小票吗？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Yes, please.",
            chinese: "是的，请给我。"
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
        scenario: "确认订单、等待时间、叫号取餐、外卖取餐和顾客问题处理。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "What name should I put on the order?",
          "May I have a name for the order?"
        ],
        recommendedResponses: [
          "Maria.",
          "Put it under Kevin.",
          "It is for John."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Can I get your name for the order?",
            chinese: "请问订单姓名是什么？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Maria.",
            chinese: "Maria。"
          }
        ],
        vocabularyNotes: [
          {
            term: "name for the order",
            chinese: "订单姓名",
            pronunciation: "naym-for-the-OR-der",
            note: "前台用名字叫号或查找订单。",
            example: "What name for the order?"
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
        english: "Let me repeat your order.",
        chinese: "我给您重复确认一下订单。",
        scenario: "确认订单、等待时间、叫号取餐、外卖取餐和顾客问题处理。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Let me read your order back.",
          "I’ll repeat the order for you."
        ],
        recommendedResponses: [
          "Okay.",
          "Yes, that is correct.",
          "Can you change the drink?"
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Let me repeat your order.",
            chinese: "我给您重复确认一下订单。"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Okay.",
            chinese: "好的。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Ten wings, fries, and a Coke. Is that correct?",
            chinese: "十个鸡翅、薯条和一杯可乐。对吗？"
          }
        ],
        vocabularyNotes: [
          {
            term: "repeat your order",
            chinese: "重复确认您的订单",
            pronunciation: "ri-PEET-yer-OR-der",
            note: "收银员把订单读一遍，避免点错。",
            example: "I will repeat it for you."
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
        english: "Your order is almost ready.",
        chinese: "您的订单快好了。",
        scenario: "确认订单、等待时间、叫号取餐、外卖取餐和顾客问题处理。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Your order is nearly ready.",
          "It is almost ready."
        ],
        recommendedResponses: [
          "Okay, thank you.",
          "How much longer?",
          "I’ll wait here."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Your order is almost ready.",
            chinese: "您的订单快好了。"
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
            term: "almost ready",
            chinese: "快好了",
            pronunciation: "AWL-mohst RED-ee",
            note: "告诉顾客订单马上可以取。",
            example: "The food is almost ready."
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
        english: "Let me check your order.",
        chinese: "我帮您查一下订单。",
        scenario: "解释小费屏幕、查看小票和处理订单确认。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "I’ll check your order for you.",
          "Let me look up your order."
        ],
        recommendedResponses: [
          "Thank you.",
          "Here is my receipt.",
          "The order is under Maria."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Let me check your order.",
            chinese: "我帮您查一下订单。"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Thank you. Here is my receipt.",
            chinese: "谢谢。这是我的小票。"
          }
        ],
        vocabularyNotes: [
          {
            term: "check your order",
            chinese: "查您的订单",
            pronunciation: "chek-yer-OR-der",
            note: "顾客有问题或取餐时，前台查看订单信息。",
            example: "I will check it now."
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
        scenario: "解释小费屏幕、查看小票和处理订单确认。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "May I see your receipt?",
          "Could you show me your receipt?"
        ],
        recommendedResponses: [
          "Sure, here it is.",
          "I do not have the receipt.",
          "I have the order confirmation on my phone."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Can you show me the receipt?",
            chinese: "您能给我看一下小票吗？"
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
            term: "show me the receipt",
            chinese: "给我看一下小票",
            pronunciation: "show-mee-thuh-ri-SEET",
            note: "处理订单问题时请顾客出示购买凭证。",
            example: "Show me the receipt."
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
        scenario: "确认订单、等待时间、叫号取餐、外卖取餐和顾客问题处理。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Did you order in store or online?",
          "Was this an online order?"
        ],
        recommendedResponses: [
          "I ordered online.",
          "I placed it in the store.",
          "It was through DoorDash."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Was this order placed in store or online?",
            chinese: "这个订单是在店里下的，还是网上下的？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I ordered online.",
            chinese: "我是网上下的单。"
          }
        ],
        vocabularyNotes: [
          {
            term: "placed online",
            chinese: "网上下单",
            pronunciation: "playst-on-LINE",
            note: "订单是通过网站或外卖平台下的。",
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
        english: "Let me get the manager.",
        chinese: "我去请经理过来。",
        scenario: "确认订单、等待时间、叫号取餐、外卖取餐和顾客问题处理。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "I will get the manager for you.",
          "Let me ask the manager to help."
        ],
        recommendedResponses: [
          "Okay, thank you.",
          "Yes, please.",
          "I would like to speak with the manager."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "Let me get the manager.",
            chinese: "我去请经理过来。"
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
            term: "get the manager",
            chinese: "请经理过来",
            pronunciation: "get-thuh-MAN-uh-jer",
            note: "遇到投诉、退款或复杂问题时请经理处理。",
            example: "Please get the manager."
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
        scenario: "确认订单、等待时间、叫号取餐、外卖取餐和顾客问题处理。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "I’m sorry. Let me check your order.",
          "I’ll get the fries for you now.",
          "We’ll fix that right away."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "My order is missing fries.",
            chinese: "我的订单里少了薯条。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "I’m sorry. I’ll get the fries for you now.",
            chinese: "很抱歉。我现在给您拿薯条。"
          }
        ],
        vocabularyNotes: [
          {
            term: "missing fries",
            chinese: "少了薯条",
            pronunciation: "MIS-ing fryz",
            note: "订单里应该有薯条但没有放进去。",
            example: "The drink is missing."
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
        scenario: "确认订单、等待时间、叫号取餐、外卖取餐和顾客问题处理。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "This is not what I ordered.",
          "This order is different from what I asked for."
        ],
        recommendedResponses: [
          "I’m sorry. Let me check your order.",
          "We will remake it for you.",
          "Let me fix that right away."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "This isn't what I ordered.",
            chinese: "这不是我点的。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "I’m sorry. Let me check your order and fix it.",
            chinese: "很抱歉。我帮您查一下订单并处理。"
          }
        ],
        vocabularyNotes: [
          {
            term: "what I ordered",
            chinese: "我点的东西",
            pronunciation: "wuht-ai-OR-derd",
            note: "顾客说明拿到的餐品和自己点的不一样。",
            example: "This is what I ordered."
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
        scenario: "顾客进店时欢迎、开始点餐和说明套餐。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "Are you ready to order?",
          "Are you ready to order now?"
        ],
        recommendedResponses: [
          "Yes, I’m ready.",
          "I need a minute, please.",
          "Can I ask a question first?"
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "前台员工要说",
            english: "Hi! Are you ready to order?",
            chinese: "您好！现在可以点餐了吗？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Yes, I’m ready.",
            chinese: "是的，我准备好了。"
          }
        ],
        vocabularyNotes: [
          {
            term: "ready to order",
            chinese: "准备好点餐",
            pronunciation: "RED-ee-toh-OR-der",
            note: "前台询问顾客是否已经决定要点什么。",
            example: "Are you ready to order?"
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
        scenario: "顾客进店时欢迎、开始点餐和说明套餐。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "The combo includes fries and a drink.",
          "Fries and a drink come with it."
        ],
        recommendedResponses: [
          "Great, I’ll take the combo.",
          "Can I change the drink?",
          "Can I get no fries?"
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "前台员工要说",
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
        scenario: "顾客进店时欢迎、开始点餐和说明套餐。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
          "I’ll get the combo, please.",
          "I’ll take the meal combo."
        ],
        recommendedResponses: [
          "Sure. What drink would you like?",
          "Okay, the combo.",
          "What flavor would you like?"
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Okay, I'll take the combo.",
            chinese: "好的，我要套餐。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "前台员工要说",
            english: "Sure. What drink would you like?",
            chinese: "好的。您想要什么饮料？"
          }
        ],
        vocabularyNotes: [
          {
            term: "take the combo",
            chinese: "要套餐",
            pronunciation: "tayk-thuh-KOM-boh",
            note: "顾客决定选择套餐时这样说。",
            example: "I’ll take the combo."
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
        scenario: "解释小费屏幕、查看小票和处理订单确认。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "前台员工要说",
            english: "I'm sorry. Can I see your receipt or order confirmation?",
            chinese: "很抱歉。可以让我看一下您的小票或订单确认吗？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Here is my receipt.",
            chinese: "这是我的小票。"
          }
        ],
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
        scenario: "现金、刷卡、感应付款、找零、付款失败和收据。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "前台员工要说",
            english: "It looks like the card didn't go through.",
            chinese: "看起来这张卡没有支付成功。"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I try again?",
            chinese: "我可以再试一次吗？"
          }
        ],
        vocabularyNotes: [
          {
            term: "go through",
            chinese: "支付成功；通过",
            pronunciation: "goh-throo",
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
        scenario: "现金、刷卡、感应付款、找零、付款失败和收据。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I try the card again?",
            chinese: "我可以再试一次这张卡吗？"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "前台员工要说",
            english: "Yes. Please wait for the screen first.",
            chinese: "可以。请先等屏幕提示。"
          }
        ],
        vocabularyNotes: [
          {
            term: "try the card again",
            chinese: "再试一次这张卡",
            pronunciation: "try-thuh-kard-uh-GEN",
            note: "付款失败后请求再刷或再感应一次。",
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
        scenario: "现金、刷卡、感应付款、找零、付款失败和收据。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "前台员工要说",
            english: "Yes. Please wait for the screen, then tap or insert the card again.",
            chinese: "可以。请等屏幕提示后，再次感应或插入银行卡。"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Okay, I will wait.",
            chinese: "好的，我等一下。"
          }
        ],
        vocabularyNotes: [
          {
            term: "tap or insert",
            chinese: "感应或插卡",
            pronunciation: "tap-or-in-SERT",
            note: "tap 是感应；insert 是插入芯片卡。",
            example: "Tap or insert the card."
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
        scenario: "现金、刷卡、感应付款、找零、付款失败和收据。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "前台员工要说",
            english: "Your total is twelve forty-five.",
            chinese: "总共是12.45美元。"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I pay by card?",
            chinese: "我可以刷卡吗？"
          }
        ],
        vocabularyNotes: [
          {
            term: "your total",
            chinese: "您的总价",
            pronunciation: "yer-TOH-tul",
            note: "收银时报出顾客需要支付的总金额。",
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
        scenario: "现金、刷卡、感应付款、找零、付款失败和收据。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Here's twenty dollars.",
            chinese: "给您二十美元。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "前台员工要说",
            english: "Thank you. Your change is seven fifty-five.",
            chinese: "谢谢。找您七块五毛五。"
          }
        ],
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
        scenario: "现金、刷卡、感应付款、找零、付款失败和收据。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
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
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I get a receipt, please?",
            chinese: "可以给我一张小票吗？"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "前台员工要说",
            english: "Sure, here you go.",
            chinese: "当然，给您。"
          }
        ],
        vocabularyNotes: [
          {
            term: "get a receipt",
            chinese: "拿一张小票",
            pronunciation: "get-uh-ri-SEET",
            note: "顾客付款后请求小票。",
            example: "Can I get a receipt?"
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
        chinese: "这份订单我输错了。",
        scenario: "确认订单、等待时间、叫号取餐、外卖取餐和顾客问题处理。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
        role: "Staff",
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
        speakerRole: "Staff",
        speakerRoleZh: "员工要说",
        difficulty: "Level 2",
        variants: [
          "I entered this order wrong.",
          "I made an error on this order."
        ],
        recommendedResponses: [
          "Ask the supervisor to fix it.",
          "Can you correct it before payment?",
          "Void it and enter it again."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "员工要说",
            english: "I made a mistake on this order.",
            chinese: "这份订单我输错了。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Void it and enter it again before payment.",
            chinese: "付款前取消并重新输入。"
          }
        ],
        vocabularyNotes: [
          {
            term: "made a mistake",
            chinese: "犯了错误；弄错了",
            pronunciation: "mayd-uh-mis-TAYK",
            note: "前台发现订单输入错误时这样说明。",
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
        english: "Please confirm the pickup on your phone.",
        chinese: "请在手机上确认取餐。",
        scenario: "解释小费屏幕、查看小票和处理订单确认。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
        role: "Staff",
        roleZh: "前台员工要说",
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
        speakerRole: "Staff",
        speakerRoleZh: "前台员工要说",
        difficulty: "Level 1",
        variants: [
          "Please mark the order as picked up.",
          "Confirm the pickup in the app, please."
        ],
        recommendedResponses: [
          "Okay, I’ll confirm it now.",
          "It is confirmed.",
          "My phone is loading."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "前台员工要说",
            english: "Please confirm the pickup on your phone.",
            chinese: "请在手机上确认取餐。"
          },
          {
            speakerRole: "Delivery Driver",
            speakerRoleZh: "外卖司机可能会说",
            english: "Okay, I’ll confirm it now.",
            chinese: "好的，我现在确认。"
          }
        ],
        vocabularyNotes: [
          {
            term: "confirm the pickup",
            chinese: "确认已经取餐",
            pronunciation: "kun-FURM-thuh-PIK-up",
            note: "外卖司机拿到订单后，在平台手机上确认取餐。",
            example: "Please confirm the pickup."
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
        english: "I'm picking up an Uber Eats order for Maria.",
        chinese: "我来取 Maria 的 Uber Eats 订单。",
        scenario: "现金、刷卡、感应付款、找零、付款失败和收据。",
        importance: "前台要快速听懂顾客需求、正确点单收款，并礼貌处理取餐和订单问题。",
        role: "Delivery Driver",
        roleZh: "外卖司机可能会说",
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
        speakerRole: "Delivery Driver",
        speakerRoleZh: "外卖司机可能会说",
        difficulty: "Level 2",
        variants: [
          "I have an Uber Eats pickup for Maria.",
          "I’m here for Maria’s Uber Eats order."
        ],
        recommendedResponses: [
          "Let me check the order.",
          "It will be ready in five minutes.",
          "Please confirm the pickup on your phone."
        ],
        dialogue: [
          {
            speakerRole: "Delivery Driver",
            speakerRoleZh: "外卖司机可能会说",
            english: "I'm picking up an Uber Eats order for Maria.",
            chinese: "我来取 Maria 的 Uber Eats 订单。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "前台员工要说",
            english: "Let me check. It will be ready in three minutes.",
            chinese: "我查一下。三分钟后好。"
          },
          {
            speakerRole: "Delivery Driver",
            speakerRoleZh: "外卖司机可能会说",
            english: "Okay, thank you.",
            chinese: "好的，谢谢。"
          }
        ],
        vocabularyNotes: [
          {
            term: "Uber Eats order",
            chinese: "Uber Eats 外卖订单",
            pronunciation: "OO-ber-eets OR-der",
            note: "外卖司机取餐时说明平台和顾客姓名。",
            example: "Uber Eats order for Sam."
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
        english: "One item is missing from my order.",
        chinese: "我的订单少了一样东西。",
        scenario: "顾客发现少餐、错餐、错口味或漏饮料时，店员需要先道歉、核对订单并解决。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
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
          "Something is missing from my order.",
          "One item is not in the bag."
        ],
        recommendedResponses: [
          "I'm sorry. Let me check your order.",
          "Which item is missing?",
          "I'll get the missing item for you."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "One item is missing from my order.",
            chinese: "我的订单少了一样东西。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "I'm sorry. Let me check your order.",
            chinese: "很抱歉。我查一下您的订单。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "I'll get the missing item for you now.",
            chinese: "我现在帮您把少的东西补上。"
          }
        ],
        vocabularyNotes: [
          {
            term: "missing from my order",
            chinese: "我的订单里缺少",
            pronunciation: "MIS-ing from my OR-der",
            note: "顾客说明订单里少了某样东西。",
            example: "The drink is missing from my order."
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
        scenario: "顾客发现少餐、错餐、错口味或漏饮料时，店员需要先道歉、核对订单并解决。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Staff",
        roleZh: "店员要说",
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
        speakerRoleZh: "店员要说",
        variants: [
          "I'm sorry. What item is missing?",
          "Sorry, which item did you not receive?"
        ],
        recommendedResponses: [
          "The fries are missing.",
          "We did not get the drink.",
          "One sauce is missing."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "I'm sorry. Which item is missing?",
            chinese: "很抱歉。少的是哪一样？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "The fries are missing.",
            chinese: "薯条少了。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "I'll get them for you now.",
            chinese: "我现在帮您补上。"
          }
        ],
        vocabularyNotes: [
          {
            term: "which item",
            chinese: "哪一样东西",
            pronunciation: "which-EYE-tem",
            note: "询问顾客具体少了哪一项。",
            example: "Which item is wrong?"
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
        chinese: "薯条少了。",
        scenario: "顾客发现少餐、错餐、错口味或漏饮料时，店员需要先道歉、核对订单并解决。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
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
          "I did not get the fries.",
          "There are no fries in the bag."
        ],
        recommendedResponses: [
          "I'm sorry. I'll get the fries for you.",
          "Let me check your order first.",
          "We'll fix that right away."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "The fries are missing.",
            chinese: "薯条少了。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "I'm sorry. I'll get the fries for you now.",
            chinese: "很抱歉。我现在帮您补薯条。"
          }
        ],
        vocabularyNotes: [
          {
            term: "fries are missing",
            chinese: "薯条少了",
            pronunciation: "fries-ar-MIS-ing",
            note: "顾客说明袋子里没有应有的薯条。",
            example: "The sauce is missing."
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
        chinese: "我想给这份订单退款。",
        scenario: "顾客发现少餐、错餐、错口味或漏饮料时，店员需要先道歉、核对订单并解决。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
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
          "Can I get a refund for this order?",
          "I want a refund, please."
        ],
        recommendedResponses: [
          "Let me get the manager for you.",
          "I can check the order first.",
          "Was this order placed online or in store?"
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I'd like a refund for this order.",
            chinese: "我想给这份订单退款。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "I understand. Let me get the manager for you.",
            chinese: "我明白。我帮您叫经理。"
          }
        ],
        vocabularyNotes: [
          {
            term: "refund",
            chinese: "退款",
            pronunciation: "REE-fund",
            note: "顾客要求把已付款项退回。",
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
        english: "Which delivery app are you picking up for?",
        chinese: "你是来取哪个外卖平台的订单？",
        scenario: "外卖司机到店取餐时，店员核对平台、姓名、订单号和手机确认取餐。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Staff",
        roleZh: "店员要说",
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
        speakerRoleZh: "店员要说",
        variants: [
          "What delivery app is the order from?",
          "Are you picking up for Uber Eats or DoorDash?"
        ],
        recommendedResponses: [
          "I'm with DoorDash.",
          "It's an Uber Eats order.",
          "I'm picking up from Skip."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "Which delivery app are you picking up for?",
            chinese: "你是来取哪个外卖平台的订单？"
          },
          {
            speakerRole: "Driver",
            speakerRoleZh: "外卖司机可能会说",
            english: "I'm picking up an Uber Eats order.",
            chinese: "我来取 Uber Eats 的订单。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "What is the customer name?",
            chinese: "顾客姓名是什么？"
          }
        ],
        vocabularyNotes: [
          {
            term: "delivery app",
            chinese: "外卖平台",
            pronunciation: "di-LIV-er-ee app",
            note: "指 Uber Eats、DoorDash 等外卖软件。",
            example: "Which delivery app is it?"
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
        scenario: "外卖司机到店取餐时，店员核对平台、姓名、订单号和手机确认取餐。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
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
          "I placed the order on an app.",
          "I ordered it online through the app."
        ],
        recommendedResponses: [
          "Which app did you use?",
          "May I see the order on your phone?",
          "Let me check the app order."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I ordered through a delivery app.",
            chinese: "我是通过外卖平台下单的。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "Which app did you use?",
            chinese: "您用的是哪个平台？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Uber Eats.",
            chinese: "Uber Eats。"
          }
        ],
        vocabularyNotes: [
          {
            term: "through a delivery app",
            chinese: "通过外卖平台",
            pronunciation: "throo uh di-LIV-er-ee app",
            note: "表示订单不是店内点的，而是在外卖软件上下的。",
            example: "I paid through the app."
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
        chinese: "我是来取 Jordan 的 742 号订单。",
        scenario: "外卖司机到店取餐时，店员核对平台、姓名、订单号和手机确认取餐。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
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
          "I have order 742 for Jordan.",
          "I'm here for Jordan's order, number 742."
        ],
        recommendedResponses: [
          "Let me check that order.",
          "It is almost ready.",
          "Please confirm pickup when I hand it to you."
        ],
        dialogue: [
          {
            speakerRole: "Driver",
            speakerRoleZh: "外卖司机可能会说",
            english: "I'm picking up order 742 for Jordan.",
            chinese: "我是来取 Jordan 的 742 号订单。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "Let me check that order.",
            chinese: "我查一下这个订单。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "It will be ready in five minutes.",
            chinese: "大概五分钟后好。"
          }
        ],
        vocabularyNotes: [
          {
            term: "picking up order",
            chinese: "取订单",
            pronunciation: "PIK-ing-up OR-der",
            note: "司机说明自己是来取哪一份外卖订单。",
            example: "I am picking up order 12."
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
        chinese: "我是 DoorDash 的司机。",
        scenario: "外卖司机到店取餐时，店员核对平台、姓名、订单号和手机确认取餐。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
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
          "I'm picking up for DoorDash.",
          "This is a DoorDash pickup."
        ],
        recommendedResponses: [
          "What is the customer name?",
          "What is the order number?",
          "Please wait. I will check it."
        ],
        dialogue: [
          {
            speakerRole: "Driver",
            speakerRoleZh: "外卖司机可能会说",
            english: "I'm with DoorDash.",
            chinese: "我是 DoorDash 的司机。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "What is the customer name?",
            chinese: "顾客姓名是什么？"
          },
          {
            speakerRole: "Driver",
            speakerRoleZh: "外卖司机可能会说",
            english: "It's for Maria.",
            chinese: "是 Maria 的订单。"
          }
        ],
        vocabularyNotes: [
          {
            term: "with DoorDash",
            chinese: "DoorDash 平台的",
            pronunciation: "with DOOR-dash",
            note: "司机用来说明自己代表哪个外卖平台取餐。",
            example: "I'm with Uber Eats."
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
        english: "The order is ready. Please confirm the pickup in the app.",
        chinese: "订单好了。请在 App 里确认取餐。",
        scenario: "外卖司机到店取餐时，店员核对平台、姓名、订单号和手机确认取餐。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Staff",
        roleZh: "店员要说",
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
        speakerRoleZh: "店员要说",
        variants: [
          "Your order is ready. Please confirm pickup on your phone.",
          "Please mark the order as picked up in the app."
        ],
        recommendedResponses: [
          "Okay, I'll confirm it now.",
          "It is confirmed.",
          "The app is not letting me confirm it."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "The order is ready. Please confirm the pickup in the app.",
            chinese: "订单好了。请在 App 里确认取餐。"
          },
          {
            speakerRole: "Driver",
            speakerRoleZh: "外卖司机可能会说",
            english: "Okay, I'll confirm it now.",
            chinese: "好的，我现在确认。"
          },
          {
            speakerRole: "Driver",
            speakerRoleZh: "外卖司机可能会说",
            english: "It is confirmed.",
            chinese: "已经确认了。"
          }
        ],
        vocabularyNotes: [
          {
            term: "confirm the pickup",
            chinese: "确认取餐",
            pronunciation: "kun-FIRM the PIK-up",
            note: "司机在外卖软件里确认已经拿到餐。",
            example: "Confirm the pickup now."
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
        english: "I'd like to place an order for pickup.",
        chinese: "我想下一个自取订单。",
        scenario: "外卖司机到店取餐时，店员核对平台、姓名、订单号和手机确认取餐。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
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
          "I want to place a pickup order.",
          "Can I order for pickup?"
        ],
        recommendedResponses: [
          "Sure. What would you like?",
          "What time would you like to pick it up?",
          "May I have your name for the order?"
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I'd like to place an order for pickup.",
            chinese: "我想下一个自取订单。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "Sure. What would you like?",
            chinese: "可以。您想点什么？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Ten wings, please.",
            chinese: "十个鸡翅。"
          }
        ],
        vocabularyNotes: [
          {
            term: "order for pickup",
            chinese: "自取订单",
            pronunciation: "OR-der for PIK-up",
            note: "顾客电话或柜台下单，稍后自己来取。",
            example: "This is for pickup."
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
        english: "What time would you like to pick it up?",
        chinese: "您想几点来取？",
        scenario: "外卖司机到店取餐时，店员核对平台、姓名、订单号和手机确认取餐。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Staff",
        roleZh: "店员要说",
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
        speakerRoleZh: "店员要说",
        variants: [
          "When would you like to pick it up?",
          "What pickup time do you want?"
        ],
        recommendedResponses: [
          "At noon, please.",
          "In about twenty minutes.",
          "As soon as possible, please."
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "What time would you like to pick it up?",
            chinese: "您想几点来取？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "At noon, please.",
            chinese: "中午十二点。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "Okay. It will be ready at noon.",
            chinese: "好的。中午会准备好。"
          }
        ],
        vocabularyNotes: [
          {
            term: "pick it up",
            chinese: "来取",
            pronunciation: "pik-it-up",
            note: "顾客到店把已经下好的订单拿走。",
            example: "Pick it up at six."
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
        scenario: "外卖司机到店取餐时，店员核对平台、姓名、订单号和手机确认取餐。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
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
          "At noon tomorrow.",
          "I will pick it up tomorrow at noon."
        ],
        recommendedResponses: [
          "Okay. We will have it ready then.",
          "May I have your name for the order?",
          "Your pickup time is tomorrow at noon."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Tomorrow at noon.",
            chinese: "明天中午十二点。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "Okay. May I have your name for the order?",
            chinese: "好的。可以告诉我订单姓名吗？"
          }
        ],
        vocabularyNotes: [
          {
            term: "at noon",
            chinese: "中午十二点",
            pronunciation: "at-noon",
            note: "表示具体取餐时间是中午 12 点。",
            example: "Meet me at noon."
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
        english: "What is the customer’s name?",
        chinese: "顾客姓名是什么？",
        scenario: "外卖司机到店取餐时，店员核对平台、姓名、订单号和手机确认取餐。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Driver",
        roleZh: "外卖司机可能会说",
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
        speakerRole: "Driver",
        speakerRoleZh: "外卖司机可能会说",
        variants: [
          "What name is on the order?",
          "Who is the order for?"
        ],
        recommendedResponses: [
          "It's for Maria.",
          "The customer name is Jordan.",
          "The order is under Alex."
        ],
        dialogue: [
          {
            speakerRole: "Driver",
            speakerRoleZh: "外卖司机可能会说",
            english: "What is the customer’s name?",
            chinese: "顾客姓名是什么？"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "The name is Maria. Please wait a moment.",
            chinese: "名字是 Maria。请稍等。"
          }
        ],
        vocabularyNotes: [
          {
            term: "customer’s name",
            chinese: "顾客姓名",
            pronunciation: "KUS-tuh-merz name",
            note: "用姓名核对外卖订单。",
            example: "What's the customer name?"
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
        scenario: "外卖司机到店取餐时，店员核对平台、姓名、订单号和手机确认取餐。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Staff",
        roleZh: "店员要说",
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
        speakerRoleZh: "店员要说",
        variants: [
          "The tablet is not working, so the order didn't print.",
          "The app order did not print from the tablet."
        ],
        recommendedResponses: [
          "Can you check the app order on my phone?",
          "How long will it take?",
          "Should I wait here?"
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "The delivery tablet is down, and this order didn't print.",
            chinese: "外卖平板出故障了，这份订单没有打印出来。"
          },
          {
            speakerRole: "Driver",
            speakerRoleZh: "外卖司机可能会说",
            english: "Can you check the order on my phone?",
            chinese: "你可以看我手机上的订单吗？"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "Yes. Let me check it now.",
            chinese: "可以。我现在核对。"
          }
        ],
        vocabularyNotes: [
          {
            term: "tablet is down",
            chinese: "平板出故障",
            pronunciation: "TAB-let iz down",
            note: "店里的外卖平板不能正常接单或打印。",
            example: "The system is down."
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
        english: "Thank you for calling. How may I help you?",
        chinese: "感谢来电。有什么可以帮您？",
        scenario: "顾客打电话查询订单、投诉、要求补做或留下联系方式等待回电。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Agent",
        roleZh: "电话客服要说",
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
        speakerRoleZh: "电话客服要说",
        variants: [
          "Thanks for calling. How can I help?",
          "Thank you for calling the restaurant."
        ],
        recommendedResponses: [
          "I need help with my order.",
          "I want to check my pickup order.",
          "One item is missing from my order."
        ],
        dialogue: [
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "Thank you for calling. How may I help you?",
            chinese: "感谢来电。有什么可以帮您？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I need help with my order.",
            chinese: "我的订单需要帮助。"
          },
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "Sure. May I have your order number?",
            chinese: "可以。请告诉我订单号码。"
          }
        ],
        vocabularyNotes: [
          {
            term: "How may I help you",
            chinese: "有什么可以帮您",
            pronunciation: "how-may-ai-HELP-yoo",
            note: "电话客服接电话时的礼貌开场白。",
            example: "How can I help you?"
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
        scenario: "顾客打电话查询订单、投诉、要求补做或留下联系方式等待回电。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRoleZh: "顾客可能会说",
        variants: [
          "I have a problem with my order.",
          "Something is wrong with my order."
        ],
        recommendedResponses: [
          "May I have your order number?",
          "What seems to be the problem?",
          "Was it a pickup or delivery order?"
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I need help with my order.",
            chinese: "我的订单需要帮助。"
          },
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "Sure. What seems to be the problem?",
            chinese: "好的。具体是什么问题？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "One item is missing.",
            chinese: "少了一样东西。"
          }
        ],
        vocabularyNotes: [
          {
            term: "help with my order",
            chinese: "帮我处理订单",
            pronunciation: "help-with-my-OR-der",
            note: "顾客打电话说明订单有问题。",
            example: "I need help with this order."
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
        scenario: "顾客打电话查询订单、投诉、要求补做或留下联系方式等待回电。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Agent",
        roleZh: "电话客服要说",
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
        speakerRoleZh: "电话客服要说",
        variants: [
          "What is your order number?",
          "Can you give me the order number?"
        ],
        recommendedResponses: [
          "It's 742.",
          "I cannot find it.",
          "Could you say that again?"
        ],
        dialogue: [
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "May I have your order number?",
            chinese: "可以告诉我您的订单号码吗？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "It's 742.",
            chinese: "是 742。"
          },
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "Thank you. Let me check it.",
            chinese: "谢谢。我查一下。"
          }
        ],
        vocabularyNotes: [
          {
            term: "order number",
            chinese: "订单号码",
            pronunciation: "OR-der NUM-ber",
            note: "用来查找具体订单的号码。",
            example: "My order number is 742."
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
        scenario: "顾客打电话查询订单、投诉、要求补做或留下联系方式等待回电。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRoleZh: "顾客可能会说",
        variants: [
          "I don't see the order number.",
          "I cannot find the number on the receipt."
        ],
        recommendedResponses: [
          "Can you give me your phone number instead?",
          "What name is on the order?",
          "Was it placed through an app?"
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I can't find my order number.",
            chinese: "我找不到订单号码。"
          },
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "No problem. What name is on the order?",
            chinese: "没关系。订单姓名是什么？"
          }
        ],
        vocabularyNotes: [
          {
            term: "find my order number",
            chinese: "找到我的订单号码",
            pronunciation: "find-my-OR-der-NUM-ber",
            note: "顾客找不到用于查询的订单号码。",
            example: "I found my order number."
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
        english: "Yes, that is correct.",
        chinese: "是的，您说得对。",
        scenario: "顾客打电话查询订单、投诉、要求补做或留下联系方式等待回电。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Yes, that's right.",
          "Yes, the order is correct."
        ],
        recommendedResponses: [
          "Great. We will start the order now.",
          "Thank you. It will be ready soon.",
          "Okay. Your total is on the receipt."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Yes, that is correct.",
            chinese: "是的，您说得对。"
          },
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "Great. We will start the order now.",
            chinese: "好的。我们现在开始做。"
          }
        ],
        vocabularyNotes: [
          {
            term: "that is correct",
            chinese: "那是正确的",
            pronunciation: "that-iz-kuh-REKT",
            note: "确认对方复述的信息没有错。",
            example: "That's correct."
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
        chinese: "谢谢您的等待。",
        scenario: "顾客打电话查询订单、投诉、要求补做或留下联系方式等待回电。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Agent",
        roleZh: "电话客服要说",
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
        speakerRoleZh: "电话客服要说",
        variants: [
          "Thanks for waiting.",
          "Thank you for staying on the line."
        ],
        recommendedResponses: [
          "No problem.",
          "Did you find my order?",
          "What should I do next?"
        ],
        dialogue: [
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "Thank you for holding.",
            chinese: "谢谢您的等待。"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "No problem. Did you find my order?",
            chinese: "没关系。你找到我的订单了吗？"
          },
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "Yes. It will be ready in five minutes.",
            chinese: "找到了。五分钟后好。"
          }
        ],
        vocabularyNotes: [
          {
            term: "holding",
            chinese: "在线等待",
            pronunciation: "HOHL-ding",
            note: "电话中请顾客等待后，再感谢对方没有挂断。",
            example: "Thanks for holding."
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
        chinese: "我的订单到哪里了？",
        scenario: "顾客打电话查询订单、投诉、要求补做或留下联系方式等待回电。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRoleZh: "顾客可能会说",
        difficulty: "Level 1",
        variants: [
          "What is the status of my order?",
          "Is my order ready yet?"
        ],
        recommendedResponses: [
          "Let me check the order status.",
          "It is still being prepared.",
          "It will be ready in about five minutes."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Where is my order?",
            chinese: "我的订单到哪里了？"
          },
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "Let me check the order status.",
            chinese: "我查一下订单状态。"
          },
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "It will be ready in about five minutes.",
            chinese: "大概五分钟后好。"
          }
        ],
        vocabularyNotes: [
          {
            term: "order status",
            chinese: "订单状态",
            pronunciation: "OR-der STAY-tus",
            note: "用来询问订单是否已准备好或送出。",
            example: "Check the order status."
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
        chinese: "什么时候能送到？",
        scenario: "顾客打电话查询订单、投诉、要求补做或留下联系方式等待回电。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRoleZh: "顾客可能会说",
        difficulty: "Level 1",
        variants: [
          "What time will it arrive?",
          "How long will delivery take?"
        ],
        recommendedResponses: [
          "It should arrive in about twenty minutes.",
          "The driver is on the way.",
          "Please check the delivery app for live updates."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "When will it arrive?",
            chinese: "什么时候能送到？"
          },
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "The driver is on the way.",
            chinese: "司机已经在路上。"
          },
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "It should arrive in about twenty minutes.",
            chinese: "大概二十分钟后到。"
          }
        ],
        vocabularyNotes: [
          {
            term: "arrive",
            chinese: "到达",
            pronunciation: "uh-RIVE",
            note: "询问外卖或包裹什么时候送到。",
            example: "The driver will arrive soon."
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
        english: "The manager will call you back.",
        chinese: "经理会给您回电话。",
        scenario: "顾客打电话查询订单、投诉、要求补做或留下联系方式等待回电。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Agent",
        roleZh: "电话客服要说",
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
        speakerRoleZh: "电话客服要说",
        difficulty: "Level 3",
        variants: [
          "A manager will call you back soon.",
          "The manager will return your call."
        ],
        recommendedResponses: [
          "Thank you.",
          "Can I leave my phone number?",
          "When should I expect the call?"
        ],
        dialogue: [
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "The manager will call you back.",
            chinese: "经理会给您回电话。"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I leave my phone number?",
            chinese: "我可以留下电话号码吗？"
          },
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "Yes, please.",
            chinese: "可以，请说。"
          }
        ],
        vocabularyNotes: [
          {
            term: "call you back",
            chinese: "给您回电话",
            pronunciation: "call-yoo-back",
            note: "表示稍后再打电话联系顾客。",
            example: "I will call you back."
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
        chinese: "这个东西送到时已经损坏了。",
        scenario: "顾客打电话查询订单、投诉、要求补做或留下联系方式等待回电。",
        importance: "外卖和投诉场景要快速核对信息、礼貌道歉并给出下一步，避免订单继续出错。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRoleZh: "顾客可能会说",
        difficulty: "Level 1",
        variants: [
          "This item is damaged.",
          "It was damaged when it arrived."
        ],
        recommendedResponses: [
          "I'm sorry about that. Can you send a photo?",
          "Let me check the order details.",
          "The manager will review it and call you back."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "The item arrived damaged.",
            chinese: "这个东西送到时已经损坏了。"
          },
          {
            speakerRole: "Agent",
            speakerRoleZh: "电话客服要说",
            english: "I'm sorry about that. Can you send a photo?",
            chinese: "很抱歉。您可以发一张照片吗？"
          },
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Yes, I can.",
            chinese: "可以。"
          }
        ],
        vocabularyNotes: [
          {
            term: "arrived damaged",
            chinese: "送到时损坏",
            pronunciation: "uh-RIVED DAM-ijd",
            note: "说明东西在送达时已经坏了。",
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
        english: "Call 911 now.",
        chinese: "现在打 911。",
        scenario: "餐厅出现火灾、燃气、停电、冒烟或疏散风险时，员工必须短句报告并按安全步骤处理。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
        role: "Staff",
        roleZh: "店员要说",
        audioNormal: "/audio/en-US/emergency_safety_002-normal.mp3",
        audioSlow: "/audio/en-US/emergency_safety_002-slow.mp3",
        isFree: false,
        safetyLevel: "emergency",
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
        speakerRoleZh: "店员要说",
        variants: [
          "Call emergency services now.",
          "Call for help now."
        ],
        recommendedResponses: [
          "I'm calling now.",
          "I will call 911 right away.",
          "Should I stay with the customer?"
        ],
        dialogue: [
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "Call 911 now.",
            chinese: "现在打 911。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "I'm calling now.",
            chinese: "我现在打。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "Stay calm and tell them the address.",
            chinese: "保持冷静，告诉他们地址。"
          }
        ],
        vocabularyNotes: [
          {
            term: "Call 911",
            chinese: "打 911",
            pronunciation: "call nine-one-one",
            note: "北美紧急情况时拨打的急救、消防或报警电话。",
            example: "Call 911 right away."
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
        english: "The customer cannot breathe.",
        chinese: "顾客无法呼吸。",
        scenario: "餐厅出现火灾、燃气、停电、冒烟或疏散风险时，员工必须短句报告并按安全步骤处理。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
        role: "Worker",
        roleZh: "员工要说",
        audioNormal: "/audio/en-US/emergency_safety_004-normal.mp3",
        audioSlow: "/audio/en-US/emergency_safety_004-slow.mp3",
        isFree: false,
        safetyLevel: "emergency",
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
        speakerRole: "Worker",
        speakerRoleZh: "员工要说",
        variants: [
          "The customer is having trouble breathing.",
          "The customer cannot catch their breath."
        ],
        recommendedResponses: [
          "Call 911 now.",
          "Bring the first-aid kit.",
          "Do not leave the customer alone."
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "The customer cannot breathe.",
            chinese: "顾客无法呼吸。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Call 911 now. Bring the first-aid kit.",
            chinese: "现在打 911。把急救包拿来。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "I'm calling now.",
            chinese: "我现在打。"
          }
        ],
        vocabularyNotes: [
          {
            term: "cannot breathe",
            chinese: "无法呼吸",
            pronunciation: "KAN-not breeth",
            note: "严重紧急情况，必须立即求助。",
            example: "He cannot breathe."
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
        scenario: "餐厅出现火灾、燃气、停电、冒烟或疏散风险时，员工必须短句报告并按安全步骤处理。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "The exit is blocked.",
          "Something is blocking the emergency exit."
        ],
        recommendedResponses: [
          "Move the boxes away now.",
          "Tell the manager immediately.",
          "Keep the exit clear."
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "The emergency exit is blocked.",
            chinese: "紧急出口被挡住了。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Move the boxes away now and keep it clear.",
            chinese: "现在把箱子移开，保持出口畅通。"
          }
        ],
        vocabularyNotes: [
          {
            term: "emergency exit",
            chinese: "紧急出口",
            pronunciation: "ee-MER-jen-see EK-sit",
            note: "火灾或疏散时用来离开的出口。",
            example: "Keep the emergency exit clear."
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
        scenario: "餐厅出现火灾、燃气、停电、冒烟或疏散风险时，员工必须短句报告并按安全步骤处理。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "The power is out.",
          "We lost power."
        ],
        recommendedResponses: [
          "Stop using the equipment.",
          "Use the flashlight and wait for instructions.",
          "Tell the manager right away."
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "The power went out.",
            chinese: "停电了。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Stop using the equipment and wait here.",
            chinese: "停止使用设备，在这里等。"
          },
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "Okay. I will stay away from the machines.",
            chinese: "好的。我会离机器远一点。"
          }
        ],
        vocabularyNotes: [
          {
            term: "power went out",
            chinese: "停电了",
            pronunciation: "POW-er went out",
            note: "电力突然中断，设备可能不能安全使用。",
            example: "The power is out."
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
        scenario: "后厨遇到热油、刀具、炸炉或烫伤割伤风险时，员工要及时提醒和报告。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "I cut myself.",
          "My finger is cut."
        ],
        recommendedResponses: [
          "Put pressure on it.",
          "Where is the first-aid kit?",
          "Tell the supervisor right away."
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
            english: "Put pressure on it. I will get the first-aid kit.",
            chinese: "按住伤口。我去拿急救包。"
          }
        ],
        vocabularyNotes: [
          {
            term: "cut my finger",
            chinese: "切到手指",
            pronunciation: "kut-my-FING-ger",
            note: "刀具造成手指割伤。",
            example: "I cut my hand."
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
        scenario: "后厨遇到热油、刀具、炸炉或烫伤割伤风险时，员工要及时提醒和报告。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "My hand got burned.",
          "I burned myself."
        ],
        recommendedResponses: [
          "Move away from the heat.",
          "Tell the manager right away.",
          "Where is the first-aid kit?"
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "I burned my hand.",
            chinese: "我烫到手了。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Move away from the fryer. I will get help.",
            chinese: "离炸炉远一点。我去找人帮忙。"
          }
        ],
        vocabularyNotes: [
          {
            term: "burned my hand",
            chinese: "烫到手",
            pronunciation: "burnd-my-hand",
            note: "被热油、热锅或热表面烫伤手。",
            example: "She burned her hand."
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
        english: "Where is the first-aid kit?",
        chinese: "急救包在哪里？",
        scenario: "员工或顾客受伤、流血、无法呼吸或需要急救时，必须快速联系主管和紧急服务。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "Where can I find the first-aid kit?",
          "Do we have a first-aid kit?"
        ],
        recommendedResponses: [
          "It's in the office.",
          "It's on the wall by the sink.",
          "I will get it for you."
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "Where is the first-aid kit?",
            chinese: "急救包在哪里？"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "It's in the office. I will get it.",
            chinese: "在办公室。我去拿。"
          }
        ],
        vocabularyNotes: [
          {
            term: "first-aid kit",
            chinese: "急救包",
            pronunciation: "first-ayd kit",
            note: "放创可贴、纱布等简单急救用品的盒子。",
            example: "Get the first-aid kit."
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
        scenario: "餐厅出现火灾、燃气、停电、冒烟或疏散风险时，员工必须短句报告并按安全步骤处理。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "Get the manager now.",
          "Tell the manager immediately."
        ],
        recommendedResponses: [
          "I'm calling the manager now.",
          "The manager is on the way.",
          "Should I stop the machine?"
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "Call the manager right away.",
            chinese: "马上叫经理。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "I'm calling the manager now.",
            chinese: "我现在叫经理。"
          }
        ],
        vocabularyNotes: [
          {
            term: "right away",
            chinese: "马上",
            pronunciation: "rite-uh-WAY",
            note: "表示不能等，要立刻行动。",
            example: "Come here right away."
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
        english: "I smell gas.",
        chinese: "我闻到煤气味。",
        scenario: "餐厅出现火灾、燃气、停电、冒烟或疏散风险时，员工必须短句报告并按安全步骤处理。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "There is a gas smell.",
          "It smells like gas."
        ],
        recommendedResponses: [
          "Stop using the equipment.",
          "Do not turn anything on.",
          "Call the manager now."
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "I smell gas.",
            chinese: "我闻到煤气味。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Stop using the equipment and step away.",
            chinese: "停止使用设备，离开那里。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "I will call the manager now.",
            chinese: "我现在叫经理。"
          }
        ],
        vocabularyNotes: [
          {
            term: "smell gas",
            chinese: "闻到煤气味",
            pronunciation: "smel-gas",
            note: "可能有燃气泄漏，不能继续操作设备。",
            example: "I smell gas near the stove."
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
        scenario: "员工或顾客受伤、流血、无法呼吸或需要急救时，必须快速联系主管和紧急服务。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "The guard is not on the slicer.",
          "The slicer does not have the guard."
        ],
        recommendedResponses: [
          "Do not use the slicer.",
          "Tell the manager right away.",
          "Use another task for now."
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
            english: "Do not use the slicer. I will check it.",
            chinese: "不要用切片机。我来检查。"
          }
        ],
        vocabularyNotes: [
          {
            term: "slicer guard",
            chinese: "切片机防护罩",
            pronunciation: "SLY-ser gard",
            note: "保护手不接触刀片的安全部件。",
            example: "The slicer guard is loose."
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
        english: "Keep the knife pointed down.",
        chinese: "让刀尖朝下。",
        scenario: "后厨遇到热油、刀具、炸炉或烫伤割伤风险时，员工要及时提醒和报告。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "Point the knife down.",
          "Keep the knife facing down."
        ],
        recommendedResponses: [
          "Okay, I will keep it pointed down.",
          "Thanks for reminding me.",
          "I will put it down safely."
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "Keep the knife pointed down.",
            chinese: "让刀尖朝下。"
          },
          {
            speakerRole: "Coworker",
            speakerRoleZh: "同事可能会说",
            english: "Okay, I will carry it safely.",
            chinese: "好的，我会安全拿着。"
          }
        ],
        vocabularyNotes: [
          {
            term: "pointed down",
            chinese: "朝下",
            pronunciation: "POIN-ted down",
            note: "拿刀时刀尖朝下，减少误伤别人。",
            example: "Keep it pointed down."
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
        scenario: "餐厅出现火灾、燃气、停电、冒烟或疏散风险时，员工必须短句报告并按安全步骤处理。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "The shelf is not steady.",
          "This shelf may fall."
        ],
        recommendedResponses: [
          "Do not put more boxes on it.",
          "Move away from the shelf.",
          "Tell the manager before using it."
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
            english: "Do not put anything else on it. I will check it.",
            chinese: "不要再往上放东西。我来检查。"
          }
        ],
        vocabularyNotes: [
          {
            term: "unstable",
            chinese: "不稳",
            pronunciation: "un-STAY-bul",
            note: "架子或梯子可能晃动、倒下。",
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
        scenario: "餐厅出现火灾、燃气、停电、冒烟或疏散风险时，员工必须短句报告并按安全步骤处理。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "Can someone help me carry this?",
          "I need help lifting this."
        ],
        recommendedResponses: [
          "Yes, I can help.",
          "Wait. Do not lift it alone.",
          "Use a cart if it is too heavy."
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
            english: "Yes. Wait for me. Do not lift it alone.",
            chinese: "可以。等我一下。不要一个人抬。"
          }
        ],
        vocabularyNotes: [
          {
            term: "lift this",
            chinese: "抬这个",
            pronunciation: "lift-this",
            note: "搬重物时请求别人一起抬。",
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
        scenario: "餐厅出现火灾、燃气、停电、冒烟或疏散风险时，员工必须短句报告并按安全步骤处理。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "The ladder is shaky.",
          "This ladder does not feel safe."
        ],
        recommendedResponses: [
          "Do not climb it.",
          "Use another ladder.",
          "Tell the manager before using it."
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "The ladder is not steady.",
            chinese: "梯子不稳。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Do not climb it. Use another ladder.",
            chinese: "不要爬。换另一把梯子。"
          }
        ],
        vocabularyNotes: [
          {
            term: "not steady",
            chinese: "不稳",
            pronunciation: "not-STED-ee",
            note: "形容梯子、架子会晃，不安全。",
            example: "This chair is not steady."
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
        scenario: "餐厅出现火灾、燃气、停电、冒烟或疏散风险时，员工必须短句报告并按安全步骤处理。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "Everyone needs to leave the building.",
          "Follow the emergency exit signs.",
          "Do not go back inside."
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "The fire alarm is going off.",
            chinese: "火警警报响了。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Everyone needs to leave the building now.",
            chinese: "所有人现在都要离开建筑。"
          }
        ],
        vocabularyNotes: [
          {
            term: "going off",
            chinese: "响起来",
            pronunciation: "GO-ing off",
            note: "警报器开始响，表示有紧急情况。",
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
        scenario: "员工或顾客受伤、流血、无法呼吸或需要急救时，必须快速联系主管和紧急服务。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "I need to write an incident report.",
          "Should I fill out an incident report?"
        ],
        recommendedResponses: [
          "Yes, fill it out after you get help.",
          "Tell the manager what happened.",
          "Write the time and what happened."
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "I need to fill out an incident report.",
            chinese: "我需要填写事故报告。"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Yes. Get first aid first, then fill it out.",
            chinese: "是的。先处理伤口，然后填写。"
          }
        ],
        vocabularyNotes: [
          {
            term: "incident report",
            chinese: "事故报告",
            pronunciation: "IN-si-dent ri-PORT",
            note: "记录受伤、摔倒或安全事故的表格。",
            example: "Write an incident report."
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
        scenario: "员工或顾客受伤、流血、无法呼吸或需要急救时，必须快速联系主管和紧急服务。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "Yes, call 911 now.",
          "Call the manager and emergency services.",
          "Stay with the person until help comes."
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "Should we call emergency services?",
            chinese: "我们要叫急救或报警吗？"
          },
          {
            speakerRole: "Supervisor",
            speakerRoleZh: "主管可能会说",
            english: "Yes, call 911 now.",
            chinese: "是的，现在打 911。"
          }
        ],
        vocabularyNotes: [
          {
            term: "emergency services",
            chinese: "紧急服务",
            pronunciation: "ee-MER-jen-see SER-vuh-siz",
            note: "指急救、消防或警察等紧急帮助。",
            example: "Call emergency services now."
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
        scenario: "员工或顾客受伤、流血、无法呼吸或需要急救时，必须快速联系主管和紧急服务。",
        importance: "安全句必须短、清楚、能立刻行动，避免员工或顾客继续受伤。",
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
          "Keep the injured person still."
        ],
        recommendedResponses: [
          "Okay, I will keep people away.",
          "I will wait for emergency help.",
          "Should I call 911 now?"
        ],
        dialogue: [
          {
            speakerRole: "Worker",
            speakerRoleZh: "员工要说",
            english: "Do not move the injured person.",
            chinese: "不要移动受伤的人。"
          },
          {
            speakerRole: "Staff",
            speakerRoleZh: "店员要说",
            english: "Okay. I will keep people away and call for help.",
            chinese: "好的。我会让大家远离并求助。"
          }
        ],
        vocabularyNotes: [
          {
            term: "injured person",
            chinese: "受伤的人",
            pronunciation: "IN-jerd PER-sun",
            note: "指已经受伤、可能需要急救的人。",
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
        english: "I would like to open a bank account.",
        chinese: "我想开一个银行账户。",
        scenario: "在银行办理账户、支票、银行卡、费用和工资相关事务时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
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
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "Sure. May I see your ID?",
          "Let me check your account.",
          "You can do that here."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I would like to open a bank account.",
            chinese: "我想开一个银行账户。"
          },
          {
            speakerRole: "Bank Teller",
            speakerRoleZh: "银行柜员可能会说",
            english: "Sure. May I see your ID?",
            chinese: "可以。请给我看一下身份证件。"
          }
        ],
        vocabularyNotes: [
          {
            term: "bank account",
            chinese: "银行账户",
            pronunciation: "bank uh-KOWNT",
            note: "在这个生活场景中，银行账户是完成沟通的关键词。",
            example: "Bank account is important."
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
        english: "I am calling about the apartment.",
        chinese: "我是打电话问这套公寓的。",
        scenario: "租房、看房、询问房租押金、联系房东或报修时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "Yes, it is available.",
          "You can come see it today.",
          "The rent is due on the first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I am calling about the apartment.",
            chinese: "我是打电话问这套公寓的。"
          },
          {
            speakerRole: "Landlord",
            speakerRoleZh: "房东可能会说",
            english: "Yes, it is available.",
            chinese: "是的，还可以。"
          }
        ],
        vocabularyNotes: [
          {
            term: "calling about",
            chinese: "打电话询问",
            pronunciation: "CALL-ing uh-BOWT",
            note: "在这个生活场景中，打电话询问是完成沟通的关键词。",
            example: "Calling about is important."
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
        english: "Is the apartment still available?",
        chinese: "这套公寓还可以租吗？",
        scenario: "租房、看房、询问房租押金、联系房东或报修时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Do you know if the apartment still available?",
          "Can you tell me if the apartment still available?"
        ],
        recommendedResponses: [
          "Yes, it is available.",
          "You can come see it today.",
          "The rent is due on the first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Is the apartment still available?",
            chinese: "这套公寓还可以租吗？"
          },
          {
            speakerRole: "Landlord",
            speakerRoleZh: "房东可能会说",
            english: "Yes, it is available.",
            chinese: "是的，还可以。"
          }
        ],
        vocabularyNotes: [
          {
            term: "still available",
            chinese: "还可以租",
            pronunciation: "stil uh-VAY-luh-bul",
            note: "在这个生活场景中，还可以租是完成沟通的关键词。",
            example: "Still available is important."
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
        english: "Is there a monthly fee?",
        chinese: "有月费吗？",
        scenario: "在银行办理账户、支票、银行卡、费用和工资相关事务时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Do you know if there a monthly fee?",
          "Can you tell me if there a monthly fee?"
        ],
        recommendedResponses: [
          "Sure. May I see your ID?",
          "Let me check your account.",
          "You can do that here."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Is there a monthly fee?",
            chinese: "有月费吗？"
          },
          {
            speakerRole: "Bank Teller",
            speakerRoleZh: "银行柜员可能会说",
            english: "Sure. May I see your ID?",
            chinese: "可以。请给我看一下身份证件。"
          }
        ],
        vocabularyNotes: [
          {
            term: "monthly fee",
            chinese: "月费",
            pronunciation: "MUNTH-lee fee",
            note: "在这个生活场景中，月费是完成沟通的关键词。",
            example: "Monthly fee is important."
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
        scenario: "日常坐公交、地铁、问路、换乘或充值交通卡时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you tell me where can I load my transit card?",
          "Do you know where can I load my transit card?"
        ],
        recommendedResponses: [
          "It takes about twenty minutes.",
          "Get off at Main Street.",
          "You can pay by card."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Where can I load my transit card?",
            chinese: "我在哪里可以给公交卡充值？"
          },
          {
            speakerRole: "Transit Staff",
            speakerRoleZh: "交通工作人员可能会说",
            english: "It takes about twenty minutes.",
            chinese: "大概二十分钟。"
          }
        ],
        vocabularyNotes: [
          {
            term: "load my transit card",
            chinese: "给公交卡充值",
            pronunciation: "load-my TRAN-zit card",
            note: "在这个生活场景中，给公交卡充值是完成沟通的关键词。",
            example: "Load my transit card is important."
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
        scenario: "日常坐公交、地铁、问路、换乘或充值交通卡时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "What is the cost of the monthly pass?",
          "What is the price of the monthly pass?"
        ],
        recommendedResponses: [
          "It takes about twenty minutes.",
          "Get off at Main Street.",
          "You can pay by card."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "How much is the monthly pass?",
            chinese: "月票多少钱？"
          },
          {
            speakerRole: "Transit Staff",
            speakerRoleZh: "交通工作人员可能会说",
            english: "It takes about twenty minutes.",
            chinese: "大概二十分钟。"
          }
        ],
        vocabularyNotes: [
          {
            term: "monthly pass",
            chinese: "月票",
            pronunciation: "MUNTH-lee pass",
            note: "在这个生活场景中，月票是完成沟通的关键词。",
            example: "Monthly pass is important."
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
        scenario: "在银行办理账户、支票、银行卡、费用和工资相关事务时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "Sure. May I see your ID?",
          "Let me check your account.",
          "You can do that here."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I get paid by direct deposit.",
            chinese: "我的工资是直接存进银行账户。"
          },
          {
            speakerRole: "Bank Teller",
            speakerRoleZh: "银行柜员可能会说",
            english: "Sure. May I see your ID?",
            chinese: "可以。请给我看一下身份证件。"
          }
        ],
        vocabularyNotes: [
          {
            term: "direct deposit",
            chinese: "直接存款",
            pronunciation: "di-REKT di-POZ-it",
            note: "在这个生活场景中，直接存款是完成沟通的关键词。",
            example: "Direct deposit is important."
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
        scenario: "在银行办理账户、支票、银行卡、费用和工资相关事务时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "I would like to deposit this check.",
          "I have to to deposit this check."
        ],
        recommendedResponses: [
          "Sure. May I see your ID?",
          "Let me check your account.",
          "You can do that here."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I need to deposit this check.",
            chinese: "我需要存这张支票。"
          },
          {
            speakerRole: "Bank Teller",
            speakerRoleZh: "银行柜员可能会说",
            english: "Sure. May I see your ID?",
            chinese: "可以。请给我看一下身份证件。"
          }
        ],
        vocabularyNotes: [
          {
            term: "deposit this check",
            chinese: "存这张支票",
            pronunciation: "di-POZ-it this chek",
            note: "在这个生活场景中，存这张支票是完成沟通的关键词。",
            example: "Deposit this check is important."
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
        scenario: "办理手机套餐、网络、账单、流量、付款或服务故障时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "Let me check your account.",
          "We can change your plan.",
          "Try restarting your phone first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "My phone has no service.",
            chinese: "我的手机没有信号。"
          },
          {
            speakerRole: "Phone Rep",
            speakerRoleZh: "手机客服可能会说",
            english: "Let me check your account.",
            chinese: "我查一下你的账户。"
          }
        ],
        vocabularyNotes: [
          {
            term: "no service",
            chinese: "没有信号",
            pronunciation: "no-SER-vis",
            note: "在这个生活场景中，没有信号是完成沟通的关键词。",
            example: "No service is important."
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
        scenario: "办理手机套餐、网络、账单、流量、付款或服务故障时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "I would like more data on my plan.",
          "I have to more data on my plan."
        ],
        recommendedResponses: [
          "Let me check your account.",
          "We can change your plan.",
          "Try restarting your phone first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I need more data on my plan.",
            chinese: "我的套餐需要更多流量。"
          },
          {
            speakerRole: "Phone Rep",
            speakerRoleZh: "手机客服可能会说",
            english: "Let me check your account.",
            chinese: "我查一下你的账户。"
          }
        ],
        vocabularyNotes: [
          {
            term: "more data",
            chinese: "更多流量",
            pronunciation: "more DAY-tuh",
            note: "在这个生活场景中，更多流量是完成沟通的关键词。",
            example: "More data is important."
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
        english: "Are utilities included?",
        chinese: "水电等费用包含吗？",
        scenario: "租房、看房、询问房租押金、联系房东或报修时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "Yes, it is available.",
          "You can come see it today.",
          "The rent is due on the first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Are utilities included?",
            chinese: "水电等费用包含吗？"
          },
          {
            speakerRole: "Landlord",
            speakerRoleZh: "房东可能会说",
            english: "Yes, it is available.",
            chinese: "是的，还可以。"
          }
        ],
        vocabularyNotes: [
          {
            term: "utilities",
            chinese: "水电等杂费",
            pronunciation: "yoo-TIL-uh-teez",
            note: "在这个生活场景中，水电等杂费是完成沟通的关键词。",
            example: "Utilities is important."
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
        scenario: "去药店、诊所、预约医生或说明简单症状时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Is it possible to book an appointment?",
          "Could I book an appointment?"
        ],
        recommendedResponses: [
          "You can ask the pharmacist.",
          "Please follow the label directions.",
          "You may want to see a doctor."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I book an appointment?",
            chinese: "我可以预约吗？"
          },
          {
            speakerRole: "Receptionist",
            speakerRoleZh: "前台接待可能会说",
            english: "You can ask the pharmacist.",
            chinese: "你可以问药剂师。"
          }
        ],
        vocabularyNotes: [
          {
            term: "book an appointment",
            chinese: "预约",
            pronunciation: "book-an uh-POINT-ment",
            note: "在这个生活场景中，预约是完成沟通的关键词。",
            example: "Book an appointment is important."
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
        scenario: "去药店、诊所、预约医生或说明简单症状时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you tell me where is the nearest walk-in clinic?",
          "Do you know where is the nearest walk-in clinic?"
        ],
        recommendedResponses: [
          "You can ask the pharmacist.",
          "Please follow the label directions.",
          "You may want to see a doctor."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Where is the nearest walk-in clinic?",
            chinese: "最近的免预约诊所在哪里？"
          },
          {
            speakerRole: "Receptionist",
            speakerRoleZh: "前台接待可能会说",
            english: "You can ask the pharmacist.",
            chinese: "你可以问药剂师。"
          }
        ],
        vocabularyNotes: [
          {
            term: "walk-in clinic",
            chinese: "免预约诊所",
            pronunciation: "WAWK-in KLIN-ik",
            note: "在这个生活场景中，免预约诊所是完成沟通的关键词。",
            example: "Walk-in clinic is important."
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
        english: "Can you speak more slowly?",
        chinese: "你可以说慢一点吗？",
        scenario: "日常电话和柜台沟通中询问联系人、费用或请对方说慢一点。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Could you speak more slowly?",
          "Are you able to speak more slowly?"
        ],
        recommendedResponses: [
          "Yes, there is a small fee.",
          "I can give you the right number.",
          "Of course. I will speak slowly."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can you speak more slowly?",
            chinese: "你可以说慢一点吗？"
          },
          {
            speakerRole: "Clerk",
            speakerRoleZh: "店员可能会说",
            english: "Yes, there is a small fee.",
            chinese: "是的，有一点费用。"
          }
        ],
        vocabularyNotes: [
          {
            term: "speak more slowly",
            chinese: "说慢一点",
            pronunciation: "speek more SLOH-lee",
            note: "在这个生活场景中，说慢一点是完成沟通的关键词。",
            example: "Speak more slowly is important."
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
        chinese: "我在找一个房间租。",
        scenario: "租房、看房、询问房租押金、联系房东或报修时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "Yes, it is available.",
          "You can come see it today.",
          "The rent is due on the first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I am looking for a room to rent.",
            chinese: "我在找一个房间租。"
          },
          {
            speakerRole: "Landlord",
            speakerRoleZh: "房东可能会说",
            english: "Yes, it is available.",
            chinese: "是的，还可以。"
          }
        ],
        vocabularyNotes: [
          {
            term: "room to rent",
            chinese: "出租房间",
            pronunciation: "room-to-rent",
            note: "在这个生活场景中，出租房间是完成沟通的关键词。",
            example: "Room to rent is important."
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
        chinese: "房租什么时候该交？",
        scenario: "租房、看房、询问房租押金、联系房东或报修时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "Yes, it is available.",
          "You can come see it today.",
          "The rent is due on the first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "When is the rent due?",
            chinese: "房租什么时候该交？"
          },
          {
            speakerRole: "Landlord",
            speakerRoleZh: "房东可能会说",
            english: "Yes, it is available.",
            chinese: "是的，还可以。"
          }
        ],
        vocabularyNotes: [
          {
            term: "rent due",
            chinese: "房租到期该交",
            pronunciation: "rent-doo",
            note: "在这个生活场景中，房租到期该交是完成沟通的关键词。",
            example: "Rent due is important."
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
        scenario: "日常电话和柜台沟通中询问联系人、费用或请对方说慢一点。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Is it possible to pay by e-transfer?",
          "Could I pay by e-transfer?"
        ],
        recommendedResponses: [
          "Yes, there is a small fee.",
          "I can give you the right number.",
          "Of course. I will speak slowly."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I pay by e-transfer?",
            chinese: "我可以用电子转账付款吗？"
          },
          {
            speakerRole: "Clerk",
            speakerRoleZh: "店员可能会说",
            english: "Yes, there is a small fee.",
            chinese: "是的，有一点费用。"
          }
        ],
        vocabularyNotes: [
          {
            term: "e-transfer",
            chinese: "电子转账",
            pronunciation: "ee-TRANS-fer",
            note: "在这个生活场景中，电子转账是完成沟通的关键词。",
            example: "E-transfer is important."
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
        scenario: "在银行办理账户、支票、银行卡、费用和工资相关事务时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "I would like to change my address.",
          "I have to to change my address."
        ],
        recommendedResponses: [
          "Sure. May I see your ID?",
          "Let me check your account.",
          "You can do that here."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I need to change my address.",
            chinese: "我需要更改我的地址。"
          },
          {
            speakerRole: "Bank Teller",
            speakerRoleZh: "银行柜员可能会说",
            english: "Sure. May I see your ID?",
            chinese: "可以。请给我看一下身份证件。"
          }
        ],
        vocabularyNotes: [
          {
            term: "change my address",
            chinese: "更改我的地址",
            pronunciation: "chaynj-my-AD-res",
            note: "在这个生活场景中，更改我的地址是完成沟通的关键词。",
            example: "Change my address is important."
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
        scenario: "填写表格、索要收据副本、邮寄包裹或处理文件时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Could you print this form for me?",
          "Are you able to print this form for me?"
        ],
        recommendedResponses: [
          "Yes, I can help with that.",
          "Please write your name here.",
          "I can email you a copy."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can you print this form for me?",
            chinese: "你可以帮我打印这张表吗？"
          },
          {
            speakerRole: "Clerk",
            speakerRoleZh: "店员可能会说",
            english: "Yes, I can help with that.",
            chinese: "可以，我可以帮你。"
          }
        ],
        vocabularyNotes: [
          {
            term: "print this form",
            chinese: "打印这张表",
            pronunciation: "print-this form",
            note: "在这个生活场景中，打印这张表是完成沟通的关键词。",
            example: "Print this form is important."
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
        scenario: "日常生活中买工作用品、改约、拿确认号码或处理基本事务时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you tell me where can I buy work shoes?",
          "Do you know where can I buy work shoes?"
        ],
        recommendedResponses: [
          "Yes, I can help.",
          "Please keep the confirmation number.",
          "The next available time is Monday."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Where can I buy work shoes?",
            chinese: "我在哪里可以买工作鞋？"
          },
          {
            speakerRole: "Clerk",
            speakerRoleZh: "店员可能会说",
            english: "Yes, I can help.",
            chinese: "可以，我可以帮你。"
          }
        ],
        vocabularyNotes: [
          {
            term: "work shoes",
            chinese: "工作鞋",
            pronunciation: "work-shooz",
            note: "在这个生活场景中，工作鞋是完成沟通的关键词。",
            example: "Work shoes is important."
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
        scenario: "日常生活中买工作用品、改约、拿确认号码或处理基本事务时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "I would like non-slip shoes for work.",
          "I have to non-slip shoes for work."
        ],
        recommendedResponses: [
          "Yes, I can help.",
          "Please keep the confirmation number.",
          "The next available time is Monday."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I need non-slip shoes for work.",
            chinese: "我工作需要防滑鞋。"
          },
          {
            speakerRole: "Clerk",
            speakerRoleZh: "店员可能会说",
            english: "Yes, I can help.",
            chinese: "可以，我可以帮你。"
          }
        ],
        vocabularyNotes: [
          {
            term: "non-slip shoes",
            chinese: "防滑鞋",
            pronunciation: "non-slip shooz",
            note: "在这个生活场景中，防滑鞋是完成沟通的关键词。",
            example: "Non-slip shoes is important."
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
        scenario: "填写表格、索要收据副本、邮寄包裹或处理文件时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Is it possible to get a copy of the receipt?",
          "Could I get a copy of the receipt?"
        ],
        recommendedResponses: [
          "Yes, I can help with that.",
          "Please write your name here.",
          "I can email you a copy."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I get a copy of the receipt?",
            chinese: "我可以要一份收据副本吗？"
          },
          {
            speakerRole: "Clerk",
            speakerRoleZh: "店员可能会说",
            english: "Yes, I can help with that.",
            chinese: "可以，我可以帮你。"
          }
        ],
        vocabularyNotes: [
          {
            term: "copy of the receipt",
            chinese: "收据副本",
            pronunciation: "KOP-ee of the ri-SEET",
            note: "在这个生活场景中，收据副本是完成沟通的关键词。",
            example: "Copy of the receipt is important."
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
        scenario: "租房、看房、询问房租押金、联系房东或报修时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Is it possible to get directions to this address?",
          "Could I get directions to this address?"
        ],
        recommendedResponses: [
          "Yes, it is available.",
          "You can come see it today.",
          "The rent is due on the first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I get directions to this address?",
            chinese: "你可以告诉我去这个地址怎么走吗？"
          },
          {
            speakerRole: "Landlord",
            speakerRoleZh: "房东可能会说",
            english: "Yes, it is available.",
            chinese: "是的，还可以。"
          }
        ],
        vocabularyNotes: [
          {
            term: "directions",
            chinese: "路线；怎么走",
            pronunciation: "di-REK-shunz",
            note: "在这个生活场景中，路线；怎么走是完成沟通的关键词。",
            example: "Directions is important."
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
        scenario: "日常坐公交、地铁、问路、换乘或充值交通卡时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "It takes about twenty minutes.",
          "Get off at Main Street.",
          "You can pay by card."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "How long does it take by bus?",
            chinese: "坐公交要多久？"
          },
          {
            speakerRole: "Transit Staff",
            speakerRoleZh: "交通工作人员可能会说",
            english: "It takes about twenty minutes.",
            chinese: "大概二十分钟。"
          }
        ],
        vocabularyNotes: [
          {
            term: "by bus",
            chinese: "坐公交",
            pronunciation: "by-bus",
            note: "在这个生活场景中，坐公交是完成沟通的关键词。",
            example: "By bus is important."
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
        scenario: "日常坐公交、地铁、问路、换乘或充值交通卡时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "It takes about twenty minutes.",
          "Get off at Main Street.",
          "You can pay by card."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Does this bus stop near the restaurant?",
            chinese: "这路公交会停在餐厅附近吗？"
          },
          {
            speakerRole: "Transit Staff",
            speakerRoleZh: "交通工作人员可能会说",
            english: "It takes about twenty minutes.",
            chinese: "大概二十分钟。"
          }
        ],
        vocabularyNotes: [
          {
            term: "stop near",
            chinese: "停在附近",
            pronunciation: "stop-neer",
            note: "在这个生活场景中，停在附近是完成沟通的关键词。",
            example: "Stop near is important."
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
        scenario: "日常坐公交、地铁、问路、换乘或充值交通卡时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "It takes about twenty minutes.",
          "Get off at Main Street.",
          "You can pay by card."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I missed my bus.",
            chinese: "我错过公交了。"
          },
          {
            speakerRole: "Transit Staff",
            speakerRoleZh: "交通工作人员可能会说",
            english: "It takes about twenty minutes.",
            chinese: "大概二十分钟。"
          }
        ],
        vocabularyNotes: [
          {
            term: "missed my bus",
            chinese: "错过公交",
            pronunciation: "mist-my-bus",
            note: "在这个生活场景中，错过公交是完成沟通的关键词。",
            example: "Missed my bus is important."
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
        scenario: "日常坐公交、地铁、问路、换乘或充值交通卡时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "It takes about twenty minutes.",
          "Get off at Main Street.",
          "You can pay by card."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "The bus is running late.",
            chinese: "公交晚点了。"
          },
          {
            speakerRole: "Transit Staff",
            speakerRoleZh: "交通工作人员可能会说",
            english: "It takes about twenty minutes.",
            chinese: "大概二十分钟。"
          }
        ],
        vocabularyNotes: [
          {
            term: "running late",
            chinese: "晚点；迟到",
            pronunciation: "RUN-ing layt",
            note: "在这个生活场景中，晚点；迟到是完成沟通的关键词。",
            example: "Running late is important."
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
        scenario: "在银行办理账户、支票、银行卡、费用和工资相关事务时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Is it possible to cash this check here?",
          "Could I cash this check here?"
        ],
        recommendedResponses: [
          "Sure. May I see your ID?",
          "Let me check your account.",
          "You can do that here."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I cash this check here?",
            chinese: "我可以在这里兑现这张支票吗？"
          },
          {
            speakerRole: "Bank Teller",
            speakerRoleZh: "银行柜员可能会说",
            english: "Sure. May I see your ID?",
            chinese: "可以。请给我看一下身份证件。"
          }
        ],
        vocabularyNotes: [
          {
            term: "cash this check",
            chinese: "兑现这张支票",
            pronunciation: "cash-this-chek",
            note: "在这个生活场景中，兑现这张支票是完成沟通的关键词。",
            example: "Cash this check is important."
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
        scenario: "在银行办理账户、支票、银行卡、费用和工资相关事务时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "Sure. May I see your ID?",
          "Let me check your account.",
          "You can do that here."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "What ID do I need?",
            chinese: "我需要什么身份证件？"
          },
          {
            speakerRole: "Bank Teller",
            speakerRoleZh: "银行柜员可能会说",
            english: "Sure. May I see your ID?",
            chinese: "可以。请给我看一下身份证件。"
          }
        ],
        vocabularyNotes: [
          {
            term: "photo ID",
            chinese: "带照片的身份证件",
            pronunciation: "FOH-toh eye-DEE",
            note: "在这个生活场景中，带照片的身份证件是完成沟通的关键词。",
            example: "Photo ID is important."
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
        scenario: "在银行办理账户、支票、银行卡、费用和工资相关事务时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "Sure. May I see your ID?",
          "Let me check your account.",
          "You can do that here."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "My debit card is not working.",
            chinese: "我的借记卡不能用了。"
          },
          {
            speakerRole: "Bank Teller",
            speakerRoleZh: "银行柜员可能会说",
            english: "Sure. May I see your ID?",
            chinese: "可以。请给我看一下身份证件。"
          }
        ],
        vocabularyNotes: [
          {
            term: "debit card",
            chinese: "借记卡",
            pronunciation: "DEB-it card",
            note: "在这个生活场景中，借记卡是完成沟通的关键词。",
            example: "Debit card is important."
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
        scenario: "在银行办理账户、支票、银行卡、费用和工资相关事务时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Is it possible to set up online banking?",
          "Could I set up online banking?"
        ],
        recommendedResponses: [
          "Sure. May I see your ID?",
          "Let me check your account.",
          "You can do that here."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I set up online banking?",
            chinese: "我可以开通网上银行吗？"
          },
          {
            speakerRole: "Bank Teller",
            speakerRoleZh: "银行柜员可能会说",
            english: "Sure. May I see your ID?",
            chinese: "可以。请给我看一下身份证件。"
          }
        ],
        vocabularyNotes: [
          {
            term: "online banking",
            chinese: "网上银行",
            pronunciation: "ON-line BANK-ing",
            note: "在这个生活场景中，网上银行是完成沟通的关键词。",
            example: "Online banking is important."
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
        scenario: "办理手机套餐、网络、账单、流量、付款或服务故障时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "Let me check your account.",
          "We can change your plan.",
          "Try restarting your phone first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "My phone bill is too high.",
            chinese: "我的手机账单太高了。"
          },
          {
            speakerRole: "Phone Rep",
            speakerRoleZh: "手机客服可能会说",
            english: "Let me check your account.",
            chinese: "我查一下你的账户。"
          }
        ],
        vocabularyNotes: [
          {
            term: "phone bill",
            chinese: "手机账单",
            pronunciation: "fohn-bil",
            note: "在这个生活场景中，手机账单是完成沟通的关键词。",
            example: "Phone bill is important."
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
        scenario: "办理手机套餐、网络、账单、流量、付款或服务故障时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Is it possible to change to a cheaper plan?",
          "Could I change to a cheaper plan?"
        ],
        recommendedResponses: [
          "Let me check your account.",
          "We can change your plan.",
          "Try restarting your phone first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I change to a cheaper plan?",
            chinese: "我可以换成便宜一点的套餐吗？"
          },
          {
            speakerRole: "Phone Rep",
            speakerRoleZh: "手机客服可能会说",
            english: "Let me check your account.",
            chinese: "我查一下你的账户。"
          }
        ],
        vocabularyNotes: [
          {
            term: "cheaper plan",
            chinese: "更便宜的套餐",
            pronunciation: "CHEE-per plan",
            note: "在这个生活场景中，更便宜的套餐是完成沟通的关键词。",
            example: "Cheaper plan is important."
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
        chinese: "我需要一张 SIM 卡。",
        scenario: "办理手机套餐、网络、账单、流量、付款或服务故障时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "I would like a SIM card.",
          "I have to a SIM card."
        ],
        recommendedResponses: [
          "Let me check your account.",
          "We can change your plan.",
          "Try restarting your phone first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I need a SIM card.",
            chinese: "我需要一张 SIM 卡。"
          },
          {
            speakerRole: "Phone Rep",
            speakerRoleZh: "手机客服可能会说",
            english: "Let me check your account.",
            chinese: "我查一下你的账户。"
          }
        ],
        vocabularyNotes: [
          {
            term: "SIM card",
            chinese: "手机 SIM 卡",
            pronunciation: "sim-card",
            note: "在这个生活场景中，手机 SIM 卡是完成沟通的关键词。",
            example: "SIM card is important."
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
        scenario: "办理手机套餐、网络、账单、流量、付款或服务故障时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "Let me check your account.",
          "We can change your plan.",
          "Try restarting your phone first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "My internet is not working.",
            chinese: "我的网络不能用了。"
          },
          {
            speakerRole: "Phone Rep",
            speakerRoleZh: "手机客服可能会说",
            english: "Let me check your account.",
            chinese: "我查一下你的账户。"
          }
        ],
        vocabularyNotes: [
          {
            term: "internet is not working",
            chinese: "网络不能用",
            pronunciation: "IN-ter-net iz-not WER-king",
            note: "在这个生活场景中，网络不能用是完成沟通的关键词。",
            example: "Internet is not working is important."
          }
        ],
        listenRepeatCount: 3,
        speakRepeatCount: 5
      },
          {
        id: "daily_life_039",
        moduleId: "daily_life",
        moduleTitle: "北美基本生活英语",
        scenarioId: "daily_life_phone_internet",
        scenarioTitle: "坐公交和问路",
        sequence: 4,
        english: "Can you reset my password?",
        chinese: "你可以帮我重置密码吗？",
        scenario: "办理手机套餐、网络、账单、流量、付款或服务故障时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Could you reset my password?",
          "Are you able to reset my password?"
        ],
        recommendedResponses: [
          "Let me check your account.",
          "We can change your plan.",
          "Try restarting your phone first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can you reset my password?",
            chinese: "你可以帮我重置密码吗？"
          },
          {
            speakerRole: "Phone Rep",
            speakerRoleZh: "手机客服可能会说",
            english: "Let me check your account.",
            chinese: "我查一下你的账户。"
          }
        ],
        vocabularyNotes: [
          {
            term: "reset my password",
            chinese: "重置我的密码",
            pronunciation: "ree-SET-my PASS-word",
            note: "在这个生活场景中，重置我的密码是完成沟通的关键词。",
            example: "Reset my password is important."
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
        scenario: "租房、看房、询问房租押金、联系房东或报修时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Do you know if laundry included?",
          "Can you tell me if laundry included?"
        ],
        recommendedResponses: [
          "Yes, it is available.",
          "You can come see it today.",
          "The rent is due on the first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Is laundry included?",
            chinese: "洗衣设施包含吗？"
          },
          {
            speakerRole: "Landlord",
            speakerRoleZh: "房东可能会说",
            english: "Yes, it is available.",
            chinese: "是的，还可以。"
          }
        ],
        vocabularyNotes: [
          {
            term: "laundry included",
            chinese: "包含洗衣设施",
            pronunciation: "LAWN-dree in-KLOO-ded",
            note: "在这个生活场景中，包含洗衣设施是完成沟通的关键词。",
            example: "Laundry included is important."
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
        scenario: "租房、看房、询问房租押金、联系房东或报修时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Do you know if parking included?",
          "Can you tell me if parking included?"
        ],
        recommendedResponses: [
          "Yes, it is available.",
          "You can come see it today.",
          "The rent is due on the first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Is parking included?",
            chinese: "停车位包含吗？"
          },
          {
            speakerRole: "Landlord",
            speakerRoleZh: "房东可能会说",
            english: "Yes, it is available.",
            chinese: "是的，还可以。"
          }
        ],
        vocabularyNotes: [
          {
            term: "parking included",
            chinese: "包含停车位",
            pronunciation: "PAR-king in-KLOO-ded",
            note: "在这个生活场景中，包含停车位是完成沟通的关键词。",
            example: "Parking included is important."
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
        scenario: "租房、看房、询问房租押金、联系房东或报修时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Is it possible to see the room today?",
          "Could I see the room today?"
        ],
        recommendedResponses: [
          "Yes, it is available.",
          "You can come see it today.",
          "The rent is due on the first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I see the room today?",
            chinese: "我今天可以看房间吗？"
          },
          {
            speakerRole: "Landlord",
            speakerRoleZh: "房东可能会说",
            english: "Yes, it is available.",
            chinese: "是的，还可以。"
          }
        ],
        vocabularyNotes: [
          {
            term: "see the room",
            chinese: "看房间",
            pronunciation: "see-the-room",
            note: "在这个生活场景中，看房间是完成沟通的关键词。",
            example: "See the room is important."
          }
        ],
        listenRepeatCount: 3,
        speakRepeatCount: 5
      },
          {
        id: "daily_life_043",
        moduleId: "daily_life",
        moduleTitle: "北美基本生活英语",
        scenarioId: "daily_life_rent_housing",
        scenarioTitle: "银行和存工资支票",
        sequence: 5,
        english: "How much is the deposit?",
        chinese: "押金是多少？",
        scenario: "租房、看房、询问房租押金、联系房东或报修时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "What is the cost of the deposit?",
          "What is the price of the deposit?"
        ],
        recommendedResponses: [
          "Yes, it is available.",
          "You can come see it today.",
          "The rent is due on the first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "How much is the deposit?",
            chinese: "押金是多少？"
          },
          {
            speakerRole: "Landlord",
            speakerRoleZh: "房东可能会说",
            english: "Yes, it is available.",
            chinese: "是的，还可以。"
          }
        ],
        vocabularyNotes: [
          {
            term: "deposit",
            chinese: "押金",
            pronunciation: "di-POZ-it",
            note: "在这个生活场景中，押金是完成沟通的关键词。",
            example: "Deposit is important."
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
        scenario: "租房、看房、询问房租押金、联系房东或报修时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "Yes, it is available.",
          "You can come see it today.",
          "The rent is due on the first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "When can I move in?",
            chinese: "我什么时候可以搬进去？"
          },
          {
            speakerRole: "Landlord",
            speakerRoleZh: "房东可能会说",
            english: "Yes, it is available.",
            chinese: "是的，还可以。"
          }
        ],
        vocabularyNotes: [
          {
            term: "move in",
            chinese: "搬进去",
            pronunciation: "moov-in",
            note: "在这个生活场景中，搬进去是完成沟通的关键词。",
            example: "Move in is important."
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
        scenario: "去药店、诊所、预约医生或说明简单症状时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "I would like something for a headache.",
          "I have to something for a headache."
        ],
        recommendedResponses: [
          "You can ask the pharmacist.",
          "Please follow the label directions.",
          "You may want to see a doctor."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I need something for a headache.",
            chinese: "我需要治头痛的药。"
          },
          {
            speakerRole: "Pharmacist",
            speakerRoleZh: "药剂师可能会说",
            english: "You can ask the pharmacist.",
            chinese: "你可以问药剂师。"
          }
        ],
        vocabularyNotes: [
          {
            term: "headache",
            chinese: "头痛",
            pronunciation: "HED-ayk",
            note: "在这个生活场景中，头痛是完成沟通的关键词。",
            example: "Headache is important."
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
        scenario: "去药店、诊所、预约医生或说明简单症状时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "I would like something for a cough.",
          "I have to something for a cough."
        ],
        recommendedResponses: [
          "You can ask the pharmacist.",
          "Please follow the label directions.",
          "You may want to see a doctor."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I need something for a cough.",
            chinese: "我需要治咳嗽的药。"
          },
          {
            speakerRole: "Pharmacist",
            speakerRoleZh: "药剂师可能会说",
            english: "You can ask the pharmacist.",
            chinese: "你可以问药剂师。"
          }
        ],
        vocabularyNotes: [
          {
            term: "cough",
            chinese: "咳嗽",
            pronunciation: "kawf",
            note: "在这个生活场景中，咳嗽是完成沟通的关键词。",
            example: "Cough is important."
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
        scenario: "去药店、诊所、预约医生或说明简单症状时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Is it possible to talk to the pharmacist?",
          "Could I talk to the pharmacist?"
        ],
        recommendedResponses: [
          "You can ask the pharmacist.",
          "Please follow the label directions.",
          "You may want to see a doctor."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I talk to the pharmacist?",
            chinese: "我可以和药剂师说一下吗？"
          },
          {
            speakerRole: "Pharmacist",
            speakerRoleZh: "药剂师可能会说",
            english: "You can ask the pharmacist.",
            chinese: "你可以问药剂师。"
          }
        ],
        vocabularyNotes: [
          {
            term: "pharmacist",
            chinese: "药剂师",
            pronunciation: "FAR-muh-sist",
            note: "在这个生活场景中，药剂师是完成沟通的关键词。",
            example: "Pharmacist is important."
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
        scenario: "去药店、诊所、预约医生或说明简单症状时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "You can ask the pharmacist.",
          "Please follow the label directions.",
          "You may want to see a doctor."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "How often should I take this?",
            chinese: "这个多久吃一次？"
          },
          {
            speakerRole: "Pharmacist",
            speakerRoleZh: "药剂师可能会说",
            english: "You can ask the pharmacist.",
            chinese: "你可以问药剂师。"
          }
        ],
        vocabularyNotes: [
          {
            term: "how often",
            chinese: "多久一次",
            pronunciation: "how-AW-fen",
            note: "在这个生活场景中，多久一次是完成沟通的关键词。",
            example: "How often is important."
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
        scenario: "去药店、诊所、预约医生或说明简单症状时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "You can ask the pharmacist.",
          "Please follow the label directions.",
          "You may want to see a doctor."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Should I take it with food?",
            chinese: "这个要和食物一起吃吗？"
          },
          {
            speakerRole: "Pharmacist",
            speakerRoleZh: "药剂师可能会说",
            english: "You can ask the pharmacist.",
            chinese: "你可以问药剂师。"
          }
        ],
        vocabularyNotes: [
          {
            term: "with food",
            chinese: "和食物一起",
            pronunciation: "with-food",
            note: "在这个生活场景中，和食物一起是完成沟通的关键词。",
            example: "With food is important."
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
        scenario: "去药店、诊所、预约医生或说明简单症状时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        variants: [
          "I am having a fever.",
          "I’ve got a fever."
        ],
        recommendedResponses: [
          "You can ask the pharmacist.",
          "Please follow the label directions.",
          "You may want to see a doctor."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I have a fever.",
            chinese: "我发烧了。"
          },
          {
            speakerRole: "Receptionist",
            speakerRoleZh: "前台接待可能会说",
            english: "You can ask the pharmacist.",
            chinese: "你可以问药剂师。"
          }
        ],
        vocabularyNotes: [
          {
            term: "fever",
            chinese: "发烧",
            pronunciation: "FEE-ver",
            note: "在这个生活场景中，发烧是完成沟通的关键词。",
            example: "Fever is important."
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
        scenario: "去药店、诊所、预约医生或说明简单症状时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        difficulty: "Level 1",
        variants: [
          "I am having stomach pain.",
          "I’ve got stomach pain."
        ],
        recommendedResponses: [
          "You can ask the pharmacist.",
          "Please follow the label directions.",
          "You may want to see a doctor."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I have stomach pain.",
            chinese: "我肚子痛。"
          },
          {
            speakerRole: "Receptionist",
            speakerRoleZh: "前台接待可能会说",
            english: "You can ask the pharmacist.",
            chinese: "你可以问药剂师。"
          }
        ],
        vocabularyNotes: [
          {
            term: "stomach pain",
            chinese: "肚子痛",
            pronunciation: "STUH-muk payn",
            note: "在这个生活场景中，肚子痛是完成沟通的关键词。",
            example: "Stomach pain is important."
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
        scenario: "去药店、诊所、预约医生或说明简单症状时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        difficulty: "Level 1",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "You can ask the pharmacist.",
          "Please follow the label directions.",
          "You may want to see a doctor."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I feel dizzy.",
            chinese: "我头晕。"
          },
          {
            speakerRole: "Receptionist",
            speakerRoleZh: "前台接待可能会说",
            english: "You can ask the pharmacist.",
            chinese: "你可以问药剂师。"
          }
        ],
        vocabularyNotes: [
          {
            term: "dizzy",
            chinese: "头晕",
            pronunciation: "DIZ-ee",
            note: "在这个生活场景中，头晕是完成沟通的关键词。",
            example: "Dizzy is important."
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
        scenario: "日常生活中买工作用品、改约、拿确认号码或处理基本事务时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        difficulty: "Level 1",
        variants: [
          "I would like to reschedule my appointment.",
          "I have to to reschedule my appointment."
        ],
        recommendedResponses: [
          "Yes, I can help.",
          "Please keep the confirmation number.",
          "The next available time is Monday."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I need to reschedule my appointment.",
            chinese: "我需要改预约时间。"
          },
          {
            speakerRole: "Receptionist",
            speakerRoleZh: "前台接待可能会说",
            english: "Yes, I can help.",
            chinese: "可以，我可以帮你。"
          }
        ],
        vocabularyNotes: [
          {
            term: "reschedule my appointment",
            chinese: "改预约时间",
            pronunciation: "ree-SKED-jool my uh-POINT-ment",
            note: "在这个生活场景中，改预约时间是完成沟通的关键词。",
            example: "Reschedule my appointment is important."
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
        scenario: "日常生活中买工作用品、改约、拿确认号码或处理基本事务时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        difficulty: "Level 1",
        variants: [
          "Could you give me a confirmation number?",
          "Are you able to give me a confirmation number?"
        ],
        recommendedResponses: [
          "Yes, I can help.",
          "Please keep the confirmation number.",
          "The next available time is Monday."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can you give me a confirmation number?",
            chinese: "你可以给我一个确认号码吗？"
          },
          {
            speakerRole: "Receptionist",
            speakerRoleZh: "前台接待可能会说",
            english: "Yes, I can help.",
            chinese: "可以，我可以帮你。"
          }
        ],
        vocabularyNotes: [
          {
            term: "confirmation number",
            chinese: "确认号码",
            pronunciation: "kon-fer-MAY-shun NUM-ber",
            note: "在这个生活场景中，确认号码是完成沟通的关键词。",
            example: "Confirmation number is important."
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
        scenario: "填写表格、索要收据副本、邮寄包裹或处理文件时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        difficulty: "Level 1",
        variants: [
          "I would like help filling out this form.",
          "I have to help filling out this form."
        ],
        recommendedResponses: [
          "Yes, I can help with that.",
          "Please write your name here.",
          "I can email you a copy."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "I need help filling out this form.",
            chinese: "我需要帮忙填写这张表。"
          },
          {
            speakerRole: "Clerk",
            speakerRoleZh: "店员可能会说",
            english: "Yes, I can help with that.",
            chinese: "可以，我可以帮你。"
          }
        ],
        vocabularyNotes: [
          {
            term: "filling out this form",
            chinese: "填写这张表",
            pronunciation: "FIL-ing out this form",
            note: "在这个生活场景中，填写这张表是完成沟通的关键词。",
            example: "Filling out this form is important."
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
        scenario: "填写表格、索要收据副本、邮寄包裹或处理文件时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        difficulty: "Level 1",
        variants: [
          "Could you email me a copy?",
          "Are you able to email me a copy?"
        ],
        recommendedResponses: [
          "Yes, I can help with that.",
          "Please write your name here.",
          "I can email you a copy."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can you email me a copy?",
            chinese: "你可以发一份副本到我邮箱吗？"
          },
          {
            speakerRole: "Clerk",
            speakerRoleZh: "店员可能会说",
            english: "Yes, I can help with that.",
            chinese: "可以，我可以帮你。"
          }
        ],
        vocabularyNotes: [
          {
            term: "email me a copy",
            chinese: "发一份副本到我邮箱",
            pronunciation: "EE-mayl mee uh KOP-ee",
            note: "在这个生活场景中，发一份副本到我邮箱是完成沟通的关键词。",
            example: "Email me a copy is important."
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
        scenario: "日常电话和柜台沟通中询问联系人、费用或请对方说慢一点。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        difficulty: "Level 1",
        variants: [
          "Can you help me with this?",
          "I need help with this."
        ],
        recommendedResponses: [
          "Yes, there is a small fee.",
          "I can give you the right number.",
          "Of course. I will speak slowly."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Who should I contact about this?",
            chinese: "这件事我应该联系谁？"
          },
          {
            speakerRole: "Clerk",
            speakerRoleZh: "店员可能会说",
            english: "Yes, there is a small fee.",
            chinese: "是的，有一点费用。"
          }
        ],
        vocabularyNotes: [
          {
            term: "contact about this",
            chinese: "就这件事联系",
            pronunciation: "KON-takt uh-BOWT this",
            note: "在这个生活场景中，就这件事联系是完成沟通的关键词。",
            example: "Contact about this is important."
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
        scenario: "办理手机套餐、网络、账单、流量、付款或服务故障时使用。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        difficulty: "Level 2",
        variants: [
          "Is it possible to make a payment plan?",
          "Could I make a payment plan?"
        ],
        recommendedResponses: [
          "Let me check your account.",
          "We can change your plan.",
          "Try restarting your phone first."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Can I make a payment plan?",
            chinese: "我可以分期付款吗？"
          },
          {
            speakerRole: "Phone Rep",
            speakerRoleZh: "手机客服可能会说",
            english: "Let me check your account.",
            chinese: "我查一下你的账户。"
          }
        ],
        vocabularyNotes: [
          {
            term: "payment plan",
            chinese: "分期付款计划",
            pronunciation: "PAY-ment plan",
            note: "在这个生活场景中，分期付款计划是完成沟通的关键词。",
            example: "Payment plan is important."
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
        scenario: "日常电话和柜台沟通中询问联系人、费用或请对方说慢一点。",
        importance: "这些句子帮助新移民在交通、银行、手机、租房和看病等日常场景中完成基本沟通。",
        role: "Customer",
        roleZh: "顾客可能会说",
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
        speakerRole: "Customer",
        speakerRoleZh: "顾客可能会说",
        difficulty: "Level 1",
        variants: [
          "Do you know if there a fee for this?",
          "Can you tell me if there a fee for this?"
        ],
        recommendedResponses: [
          "Yes, there is a small fee.",
          "I can give you the right number.",
          "Of course. I will speak slowly."
        ],
        dialogue: [
          {
            speakerRole: "Customer",
            speakerRoleZh: "顾客可能会说",
            english: "Is there a fee for this?",
            chinese: "这个有费用吗？"
          },
          {
            speakerRole: "Clerk",
            speakerRoleZh: "店员可能会说",
            english: "Yes, there is a small fee.",
            chinese: "是的，有一点费用。"
          }
        ],
        vocabularyNotes: [
          {
            term: "fee",
            chinese: "费用",
            pronunciation: "fee-sound",
            note: "在这个生活场景中，费用是完成沟通的关键词。",
            example: "Fee is important."
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
