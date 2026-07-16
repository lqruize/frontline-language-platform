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
      title: "听不懂、确认和同事沟通",
      description: "听不清、没理解、找主管、和同事配合。",
      targetCount: 50,
      publishedCount: 35
    },
    {
      id: "shift_pay",
      title: "排班、工资、请假和交接班",
      description: "班次、打卡、工资、请假、交接班。",
      targetCount: 40,
      publishedCount: 35
    },
    {
      id: "food_safety",
      title: "食品卫生、手套、发网和食品存放",
      description: "洗手、手套、发网、日期标签、食品存放。",
      targetCount: 50,
      publishedCount: 35
    },
    {
      id: "kitchen_cleaning",
      title: "后厨备菜、炸炉、洗碗和清洁",
      description: "备菜、洗碗、三槽水池、炸炉、拖地、关店清洁。",
      targetCount: 110,
      publishedCount: 80
    },
    {
      id: "front_counter",
      title: "前台、点餐、收银和小费",
      description: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      targetCount: 100,
      publishedCount: 75
    },
    {
      id: "delivery_complaints",
      title: "外卖、电话、投诉和顾客问题",
      description: "外卖取餐、电话订单、少餐错餐、退款和顾客投诉。",
      targetCount: 60,
      publishedCount: 45
    },
    {
      id: "emergency_safety",
      title: "安全、受伤和紧急情况",
      description: "热油、刀具、滑倒、受伤、机器故障和紧急报告。",
      targetCount: 50,
      publishedCount: 35
    },
    {
      id: "daily_life",
      title: "北美基本生活英语",
      description: "公交、银行、手机、租房、药店、看医生。",
      targetCount: 60,
      publishedCount: 50
    }
  ],
  freeScenarioIds: [
    "communication_first_day",
    "shift_pay_pay_overtime",
    "food_safety_handwashing_gloves",
    "kitchen_cleaning_line_orders",
    "front_counter_greeting_order",
    "delivery_complaints_missing_wrong_order",
    "emergency_safety_general",
    "daily_life_bank_paycheck",
    "kitchen_cleaning_prep_work",
    "front_counter_combo_sauce_drink"
  ],
  stats: {
    libraryCount: 520,
    publishedCount: 390,
    moduleCount: 8,
    scenarioCount: 50,
    freeScenarioCount: 10,
    reusedFromPreviousCourses: 350,
    newlyAdded: 170,
    dedupedOrPolished: 11,
    enrichedPublishedCount: 390,
    level1Count: 112,
    level2Count: 237,
    level3Count: 41,
    variantsCount: 390,
    recommendedResponsesCount: 390,
    dialogueScenarioCount: 50,
    vocabularyNotesCount: 390
  },
  items: [
    {
      id: "communication_001",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 1,
      english: "Please start with this task.",
      chinese: "请先做这项工作。",
      scenario: "主管告诉员工当天首先需要完成的工作。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please do this first.",
        "Start with this task.",
        "Do this one first."
      ],
      recommendedResponses: [
        "Okay, I’ll do it now.",
        "Got it.",
        "Can you show me how?",
        "Which part should I do first?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Please start with this task.",
          chinese: "请先做这项工作。"
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
          term: "start with",
          chinese: "重点词组",
          pronunciation: "start with",
          note: "这句话里的工作关键词。",
          example: "Please start with this task."
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
      scenarioTitle: "没听懂和重复确认",
      sequence: 2,
      english: "Which task should I do first?",
      chinese: "我应该先做哪项工作？",
      scenario: "员工同时收到多个任务，需要确认处理顺序。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_002-normal.mp3",
      audioSlow: "/audio/en-US/communication_002-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "What should I do first?",
        "Which one comes first?",
        "Where should I start?"
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
          english: "Which task should I do first?",
          chinese: "我应该先做哪项工作？"
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
          term: "Which task",
          chinese: "重点词组",
          pronunciation: "Which task",
          note: "这句话里的工作关键词。",
          example: "Which task should I do first?"
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
      scenario: "主管明确任务需要完成的时间。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_003-normal.mp3",
      audioSlow: "/audio/en-US/communication_003-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      scenarioTitle: "没听懂和重复确认",
      sequence: 4,
      english: "I understand the task.",
      chinese: "我明白这项工作。",
      scenario: "员工表示已经听懂主管的指令。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_004-normal.mp3",
      audioSlow: "/audio/en-US/communication_004-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please i understand the task."
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
          english: "I understand the task.",
          chinese: "我明白这项工作。"
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
          term: "understand task",
          chinese: "重点词组",
          pronunciation: "understand task",
          note: "这句话里的工作关键词。",
          example: "I understand the task."
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
      scenarioTitle: "没听懂和重复确认",
      sequence: 5,
      english: "Please repeat the instructions back to me.",
      chinese: "请把指令复述一遍。",
      scenario: "主管通过让员工复述来确认重要指令已被正确理解。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_005-normal.mp3",
      audioSlow: "/audio/en-US/communication_005-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Can you repeat the instructions back to me?",
        "Could you please repeat the instructions back to me?"
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
          english: "Please repeat the instructions back to me.",
          chinese: "请把指令复述一遍。"
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
          term: "repeat instructions",
          chinese: "重点词组",
          pronunciation: "repeat instructions",
          note: "这句话里的工作关键词。",
          example: "Please repeat the instructions back to me."
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
      scenarioTitle: "没听懂和重复确认",
      sequence: 6,
      english: "Can you show me an example?",
      chinese: "可以给我看一个示例吗？",
      scenario: "员工通过示范确认质量标准或操作方法。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_006-normal.mp3",
      audioSlow: "/audio/en-US/communication_006-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
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
          chinese: "重点词组",
          pronunciation: "show me",
          note: "这句话里的工作关键词。",
          example: "Can you show me an example?"
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
      scenario: "培训人员先演示，再让员工练习。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Trainer",
      roleZh: "培训人员可能会说",
      audioNormal: "/audio/en-US/communication_007-normal.mp3",
      audioSlow: "/audio/en-US/communication_007-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      scenario: "防止员工因害怕提问而错误操作。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_008-normal.mp3",
      audioSlow: "/audio/en-US/communication_008-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      scenario: "员工被安排执行尚未培训或未获授权的任务。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_009-normal.mp3",
      audioSlow: "/audio/en-US/communication_009-slow.mp3",
      isFree: true,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      scenario: "主管明确员工不能越权执行高风险或专业任务。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_010-normal.mp3",
      audioSlow: "/audio/en-US/communication_010-slow.mp3",
      isFree: true,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      sequence: 11,
      english: "I need help with this task.",
      chinese: "这项工作我需要帮助。",
      scenario: "员工发现任务需要更多人手、经验或设备。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get help with this task.",
        "I have to get help with this task."
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
          chinese: "重点词组",
          pronunciation: "need help",
          note: "这句话里的工作关键词。",
          example: "I need help with this task."
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
      scenario: "主管要求员工及时沟通进度问题。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_012-normal.mp3",
      audioSlow: "/audio/en-US/communication_012-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      scenario: "员工报告设备问题导致任务延迟。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_013-normal.mp3",
      audioSlow: "/audio/en-US/communication_013-slow.mp3",
      isFree: true,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      sequence: 14,
      english: "Do not keep using damaged equipment.",
      chinese: "不要继续使用损坏的设备。",
      scenario: "防止员工继续使用故障工具或自行维修。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please don’t keep using damaged equipment."
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
          english: "Do not keep using damaged equipment.",
          chinese: "不要继续使用损坏的设备。"
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
          term: "not keep",
          chinese: "重点词组",
          pronunciation: "not keep",
          note: "这句话里的工作关键词。",
          example: "Do not keep using damaged equipment."
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
      scenario: "避免员工使用不合适的替代工具。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_015-normal.mp3",
      audioSlow: "/audio/en-US/communication_015-slow.mp3",
      isFree: true,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      sequence: 16,
      english: "The approved tool is not available.",
      chinese: "批准使用的工具现在没有。",
      scenario: "员工无法找到规定工具，避免自行替代。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The approved tool is not available."
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
          english: "The approved tool is not available.",
          chinese: "批准使用的工具现在没有。"
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
          term: "approved tool",
          chinese: "重点词组",
          pronunciation: "approved tool",
          note: "这句话里的工作关键词。",
          example: "The approved tool is not available."
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
      sequence: 17,
      english: "Please correct this before continuing.",
      chinese: "继续之前请先把这个问题改正。",
      scenario: "主管发现质量或流程问题，要求员工先纠正。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Can you correct this before continuing?",
        "Could you please correct this before continuing?"
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
          english: "Please correct this before continuing.",
          chinese: "继续之前请先把这个问题改正。"
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
          term: "correct before",
          chinese: "重点词组",
          pronunciation: "correct before",
          note: "这句话里的工作关键词。",
          example: "Please correct this before continuing."
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
      sequence: 18,
      english: "Please redo this part.",
      chinese: "请把这一部分重做。",
      scenario: "主管要求员工重新完成未达标准的部分。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Can you redo this part?",
        "Could you please redo this part?"
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
          english: "Please redo this part.",
          chinese: "请把这一部分重做。"
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
          term: "redo part",
          chinese: "重点词组",
          pronunciation: "redo part",
          note: "这句话里的工作关键词。",
          example: "Please redo this part."
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
      scenario: "主管发现员工因赶速度造成错误。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_019-normal.mp3",
      audioSlow: "/audio/en-US/communication_019-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      scenario: "发生即时危险时先停止作业并按应急流程报告。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_020-normal.mp3",
      audioSlow: "/audio/en-US/communication_020-slow.mp3",
      isFree: true,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      scenario: "建立不隐瞒错误的工作沟通方式。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_021-normal.mp3",
      audioSlow: "/audio/en-US/communication_021-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      scenario: "不同公司报备方式不同，应遵循本公司的正式政策。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_022-normal.mp3",
      audioSlow: "/audio/en-US/communication_022-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      sequence: 23,
      english: "You were absent without notifying anyone.",
      chinese: "你缺勤但没有通知任何人。",
      scenario: "主管就未按程序报备的缺勤与员工沟通。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "You were absent without notifying anyone."
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
          english: "You were absent without notifying anyone.",
          chinese: "你缺勤但没有通知任何人。"
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
          term: "were absent",
          chinese: "重点词组",
          pronunciation: "were absent",
          note: "这句话里的工作关键词。",
          example: "You were absent without notifying anyone."
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
      sequence: 24,
      english: "Please review the attendance policy.",
      chinese: "请查看公司的出勤政策。",
      scenario: "人事要求员工理解本公司的迟到、缺勤和报备流程。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "HR",
      speakerRoleZh: "人事人员可能会说",
      variants: [
        "Can you review the attendance policy?",
        "Could you please review the attendance policy?"
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
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
          term: "review attendance",
          chinese: "重点词组",
          pronunciation: "review attendance",
          note: "这句话里的工作关键词。",
          example: "Please review the attendance policy."
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
      scenario: "主管就绩效、纪律或个人问题与员工进行私下沟通。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_025-normal.mp3",
      audioSlow: "/audio/en-US/communication_025-slow.mp3",
      isFree: true,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      sequence: 26,
      english: "This is a documented coaching conversation.",
      chinese: "这是一次有记录的辅导谈话。",
      scenario: "主管说明本次绩效沟通将形成记录。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "This one is a documented coaching conversation.",
        "This item is a documented coaching conversation."
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
          english: "This is a documented coaching conversation.",
          chinese: "这是一次有记录的辅导谈话。"
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
          term: "documented coaching",
          chinese: "重点词组",
          pronunciation: "documented coaching",
          note: "这句话里的工作关键词。",
          example: "This is a documented coaching conversation."
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
      scenario: "主管说明绩效改进目标和复核时间。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_027-normal.mp3",
      audioSlow: "/audio/en-US/communication_027-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      scenario: "员工希望保留绩效或纪律沟通记录。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_028-normal.mp3",
      audioSlow: "/audio/en-US/communication_028-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      scenario: "员工在签署工作文件前请求阅读和解释。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_029-normal.mp3",
      audioSlow: "/audio/en-US/communication_029-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      scenario: "关键工位没有接班人员时，员工报告主管。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_030-normal.mp3",
      audioSlow: "/audio/en-US/communication_030-slow.mp3",
      isFree: true,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      scenarioTitle: "没听懂和重复确认",
      sequence: 31,
      english: "Can you check my work before I leave?",
      chinese: "我离开前可以帮我检查一下工作吗？",
      scenario: "员工在下班前请求主管确认工作已完成。",
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
        "employee"
      ],
      active: true,
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
      scenario: "主管鼓励员工及时报告问题。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/communication_032-normal.mp3",
      audioSlow: "/audio/en-US/communication_032-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      sequence: 33,
      english: "Good job following the procedure.",
      chinese: "你按照流程完成得很好。",
      scenario: "主管对员工正确执行流程给予正向反馈。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Good job following the procedure."
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
          english: "Good job following the procedure.",
          chinese: "你按照流程完成得很好。"
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
          term: "Good job",
          chinese: "重点词组",
          pronunciation: "Good job",
          note: "这句话里的工作关键词。",
          example: "Good job following the procedure."
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
      scenario: "员工主动询问绩效改进方向。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_034-normal.mp3",
      audioSlow: "/audio/en-US/communication_034-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "workplace",
        "supervisor",
        "employee"
      ],
      active: true,
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
      scenarioTitle: "没听懂和重复确认",
      sequence: 35,
      english: "Can you repeat the last part?",
      chinese: "你可以重复最后一部分吗？",
      scenario: "对方说了一长串，你只漏听最后一部分。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_035-normal.mp3",
      audioSlow: "/audio/en-US/communication_035-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "communication",
        "supplement"
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
        "Can you say that again?",
        "Can you write it down?",
        "Let me confirm first."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Can you repeat the last part?",
          chinese: "你可以重复最后一部分吗？"
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
          term: "repeat last",
          chinese: "重点词组",
          pronunciation: "repeat last",
          note: "这句话里的工作关键词。",
          example: "Can you repeat the last part?"
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
      scenarioTitle: "没听懂和重复确认",
      sequence: 36,
      english: "Do you mean this tray or that tray?",
      chinese: "你是说这个托盘还是那个托盘？",
      scenario: "任务里有两个相似物品，需要确认。",
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
      id: "communication_037",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_first_day",
      scenarioTitle: "第一天报到和找主管",
      sequence: 37,
      english: "Should I ask the manager first?",
      chinese: "我应该先问经理吗？",
      scenario: "不确定自己有没有权限处理。",
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
      scenario: "第一天或新岗位上说明自己需要示范。",
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
      scenarioTitle: "没听懂和重复确认",
      sequence: 42,
      english: "Is this the right container?",
      chinese: "这是正确的容器吗？",
      scenario: "存放食材或打包时确认容器。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_042-normal.mp3",
      audioSlow: "/audio/en-US/communication_042-slow.mp3",
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
      scenarioTitle: "没听懂和重复确认",
      sequence: 44,
      english: "I heard “fries.” Is that correct?",
      chinese: "我听到的是“薯条”，对吗？",
      scenario: "用复述确认听到的关键词。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_044-normal.mp3",
      audioSlow: "/audio/en-US/communication_044-slow.mp3",
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
      scenarioTitle: "没听懂和重复确认",
      sequence: 47,
      english: "Should I stop what I am doing?",
      chinese: "我要先停下手上的事吗？",
      scenario: "主管插入新任务时确认。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_047-normal.mp3",
      audioSlow: "/audio/en-US/communication_047-slow.mp3",
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
      id: "communication_048",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "没听懂和重复确认",
      sequence: 48,
      english: "I can do that, but I need gloves first.",
      chinese: "我可以做，但我需要先戴手套。",
      scenario: "接受任务同时确认卫生要求。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_048-normal.mp3",
      audioSlow: "/audio/en-US/communication_048-slow.mp3",
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
      id: "communication_049",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "没听懂和重复确认",
      sequence: 49,
      english: "Can you say the order number again?",
      chinese: "你可以再说一次订单号吗？",
      scenario: "订单号听不清。",
      importance: "避免装懂和误做任务，是上班第一天最重要的工作表达。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/communication_049-normal.mp3",
      audioSlow: "/audio/en-US/communication_049-slow.mp3",
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
      id: "communication_050",
      moduleId: "communication",
      moduleTitle: "听不懂、确认和同事沟通",
      scenarioId: "communication_repeat_confirm",
      scenarioTitle: "没听懂和重复确认",
      sequence: 50,
      english: "Do you want this now or later?",
      chinese: "你要我现在做还是晚点做？",
      scenario: "确认任务时间。",
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
      id: "shift_pay_001",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_pay_overtime",
      scenarioTitle: "工资、加班和到账",
      sequence: 1,
      english: "Let me confirm the quantity, pickup time, and payment requirements with you.",
      chinese: "我和您确认一下数量、取餐时间和付款要求。",
      scenario: "顾客需要团体餐，员工确认人数、取餐时间和是否需要预付款或经理协助。",
      importance: "排班和工资说不清，会直接影响收入和工作安排。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/shift_pay_001-normal.mp3",
      audioSlow: "/audio/en-US/shift_pay_001-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "shift_pay",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Let me confirm the quantity, pickup time, and payment requirements with you."
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
          english: "Let me confirm the quantity, pickup time, and payment requirements with you.",
          chinese: "我和您确认一下数量、取餐时间和付款要求。"
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
          term: "Let me",
          chinese: "重点词组",
          pronunciation: "Let me",
          note: "这句话里的工作关键词。",
          example: "Let me confirm the quantity, pickup time, and payment requirements with you."
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
      active: true,
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
      scenario: "关键岗位离开前需要通知主管和完成交接。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Can you notify me before leaving your work area?",
        "Could you please notify me before leaving your work area?"
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
          english: "Please notify me before leaving your work area.",
          chinese: "离开工作区域前请先通知我。"
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
          term: "notify me",
          chinese: "重点词组",
          pronunciation: "notify me",
          note: "这句话里的工作关键词。",
          example: "Please notify me before leaving your work area."
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
      scenarioTitle: "排班和换班",
      sequence: 4,
      english: "I am going to be late for my shift.",
      chinese: "我上班会迟到。",
      scenario: "员工提前报告可能迟到。",
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
        "employee"
      ],
      active: true,
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
      sequence: 5,
      english: "I am sick and cannot come to work today.",
      chinese: "我生病了，今天不能来上班。",
      scenario: "员工按照公司制度报告因病不能出勤。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I am sick and cannot come to work today."
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
          english: "I am sick and cannot come to work today.",
          chinese: "我生病了，今天不能来上班。"
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
          term: "am sick",
          chinese: "重点词组",
          pronunciation: "am sick",
          note: "这句话里的工作关键词。",
          example: "I am sick and cannot come to work today."
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
      scenarioTitle: "排班和换班",
      sequence: 6,
      english: "My schedule shows the wrong shift.",
      chinese: "我的排班显示错了。",
      scenario: "员工发现排班表与原先通知不一致。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "My schedule shows the wrong shift."
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
          english: "My schedule shows the wrong shift.",
          chinese: "我的排班显示错了。"
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
          term: "My schedule",
          chinese: "重点词组",
          pronunciation: "My schedule",
          note: "这句话里的工作关键词。",
          example: "My schedule shows the wrong shift."
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
      scenarioTitle: "排班和换班",
      sequence: 7,
      english: "Do not swap shifts without approval.",
      chinese: "未经批准不要私自换班。",
      scenario: "员工之间换班需要按公司流程获得批准。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please don’t swap shifts without approval."
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
          term: "not swap",
          chinese: "重点词组",
          pronunciation: "not swap",
          note: "这句话里的工作关键词。",
          example: "Do not swap shifts without approval."
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
      scenarioTitle: "排班和换班",
      sequence: 8,
      english: "Can I switch shifts with my coworker?",
      chinese: "我可以和同事换班吗？",
      scenario: "员工请求与同事调整班次。",
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
        "employee"
      ],
      active: true,
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
      sequence: 9,
      english: "Please complete the handoff before you leave.",
      chinese: "离开前请完成交接。",
      scenario: "班次结束前向接班人员说明未完成任务和问题。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Can you complete the handoff before you leave?",
        "Could you please complete the handoff before you leave?"
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
          chinese: "重点词组",
          pronunciation: "complete handoff",
          note: "这句话里的工作关键词。",
          example: "Please complete the handoff before you leave."
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
      sequence: 10,
      english: "This task is not finished yet.",
      chinese: "这项工作还没有完成。",
      scenario: "员工向下一班说明未完成工作。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This one task is not finished yet.",
        "This item task is not finished yet."
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
          term: "task not",
          chinese: "重点词组",
          pronunciation: "task not",
          note: "这句话里的工作关键词。",
          example: "This task is not finished yet."
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
      scenarioTitle: "排班和换班",
      sequence: 11,
      english: "Record the issue in the shift log.",
      chinese: "把这个问题记录在班次日志里。",
      scenario: "重要问题需书面记录，避免只依赖口头交接。",
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
        "employee"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 12,
      english: "Who is closing tonight?",
      chinese: "今晚谁关店？",
      scenario: "确认关店人员安排。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Who is closing tonight, please?"
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
          term: "Who closing",
          chinese: "重点词组",
          pronunciation: "Who closing",
          note: "这句话里的工作关键词。",
          example: "Who is closing tonight?"
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
      scenarioTitle: "排班和换班",
      sequence: 13,
      english: "Who is opening tomorrow?",
      chinese: "明天谁开店？",
      scenario: "确认第二天开店班。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Who is opening tomorrow, please?"
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
          term: "Who opening",
          chinese: "重点词组",
          pronunciation: "Who opening",
          note: "这句话里的工作关键词。",
          example: "Who is opening tomorrow?"
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
      scenarioTitle: "排班和换班",
      sequence: 14,
      english: "Can I switch shifts with Kevin?",
      chinese: "我可以和 Kevin 换班吗？",
      scenario: "想和同事换班。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I switch shifts with Kevin, please?"
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
          term: "switch shifts",
          chinese: "重点词组",
          pronunciation: "switch shifts",
          note: "这句话里的工作关键词。",
          example: "Can I switch shifts with Kevin?"
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
      scenarioTitle: "排班和换班",
      sequence: 15,
      english: "I can stay thirty minutes longer.",
      chinese: "我可以多留三十分钟。",
      scenario: "忙的时候主动说明可以加一点时间。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 16,
      english: "I need to leave on time today.",
      chinese: "我今天需要准时下班。",
      scenario: "当天有事，不能加班。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 17,
      english: "Was my break recorded?",
      chinese: "我的休息时间记录了吗？",
      scenario: "确认休息和工时记录。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Was my break recorded, please?"
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
          term: "Was my",
          chinese: "重点词组",
          pronunciation: "Was my",
          note: "这句话里的工作关键词。",
          example: "Was my break recorded?"
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
      scenarioTitle: "排班和换班",
      sequence: 18,
      english: "I worked from ten to four.",
      chinese: "我是从十点工作到四点。",
      scenario: "向经理说明实际工时。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 19,
      english: "My direct deposit has not arrived yet.",
      chinese: "我的工资直接存款还没到账。",
      scenario: "工资没有进银行账户。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 20,
      english: "Can you check my time sheet?",
      chinese: "你可以帮我查一下工时表吗？",
      scenario: "工时表可能有错误。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 21,
      english: "I need to call in sick today.",
      chinese: "我今天需要请病假。",
      scenario: "生病无法上班时打电话说明。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 22,
      english: "Can I take my break now?",
      chinese: "我现在可以休息吗？",
      scenario: "确认是否可以开始休息。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 23,
      english: "What time should I come in tomorrow?",
      chinese: "我明天几点来上班？",
      scenario: "确认明天上班时间。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 24,
      english: "Can you send me the new schedule?",
      chinese: "你可以把新排班发给我吗？",
      scenario: "排班更新后请求确认。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 25,
      english: "I think my overtime is missing.",
      chinese: "我觉得我的加班时间少算了。",
      scenario: "工资单里加班不对。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 26,
      english: "Who should I give the handoff note to?",
      chinese: "我应该把交接说明给谁？",
      scenario: "下班前交接。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 27,
      english: "The next shift is not here yet.",
      chinese: "下一班的人还没来。",
      scenario: "交班时下一班未到。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 28,
      english: "I can cover the first hour.",
      chinese: "我可以先顶第一个小时。",
      scenario: "帮忙临时顶班。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 29,
      english: "I cannot work that day.",
      chinese: "那天我不能上班。",
      scenario: "无法接受某天排班。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I cannot work that day."
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
          chinese: "重点词组",
          pronunciation: "cannot work",
          note: "这句话里的工作关键词。",
          example: "I cannot work that day."
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
      scenarioTitle: "排班和换班",
      sequence: 30,
      english: "Can I update my availability?",
      chinese: "我可以更新我的可上班时间吗？",
      scenario: "可上班时间变化。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I update my availability, please?"
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
          term: "update my",
          chinese: "重点词组",
          pronunciation: "update my",
          note: "这句话里的工作关键词。",
          example: "Can I update my availability?"
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
      scenarioTitle: "排班和换班",
      sequence: 31,
      english: "I need this day off for an appointment.",
      chinese: "我这天需要请假去预约。",
      scenario: "因预约请假。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 32,
      english: "Can I come in earlier tomorrow?",
      chinese: "我明天可以早点来上班吗？",
      scenario: "想提前上班或补时间。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 33,
      english: "Can I leave early if it is slow?",
      chinese: "如果不忙，我可以早点走吗？",
      scenario: "店里不忙时询问是否能早退。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 34,
      english: "Who approves time-off requests?",
      chinese: "谁批准请假申请？",
      scenario: "不知道请假要找谁。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Who approves time-off requests, please?"
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
          term: "Who approves",
          chinese: "重点词组",
          pronunciation: "Who approves",
          note: "这句话里的工作关键词。",
          example: "Who approves time-off requests?"
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
      scenarioTitle: "排班和换班",
      sequence: 35,
      english: "I submitted my availability last week.",
      chinese: "我上周已经提交了可上班时间。",
      scenario: "排班和自己提交的时间不一致。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "排班和换班",
      sequence: 36,
      english: "I am scheduled for the wrong day.",
      chinese: "我被排到了错误的日期。",
      scenario: "发现排班日期不对。",
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
      id: "shift_pay_037",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班和换班",
      sequence: 37,
      english: "Can you fix my clock-in time?",
      chinese: "你可以帮我修正上班打卡时间吗？",
      scenario: "忘记或打错上班卡。",
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
      id: "shift_pay_038",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班和换班",
      sequence: 38,
      english: "Can you fix my clock-out time?",
      chinese: "你可以帮我修正下班打卡时间吗？",
      scenario: "忘记或打错下班卡。",
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
      id: "shift_pay_039",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班和换班",
      sequence: 39,
      english: "I covered a shift yesterday.",
      chinese: "我昨天帮别人顶班了。",
      scenario: "解释额外工时来源。",
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
      id: "shift_pay_040",
      moduleId: "shift_pay",
      moduleTitle: "排班、工资、请假和交接班",
      scenarioId: "shift_pay_schedule",
      scenarioTitle: "排班和换班",
      sequence: 40,
      english: "Should I write this in the handoff book?",
      chinese: "我要把这个写在交接本里吗？",
      scenario: "交接需要留下记录。",
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
      id: "food_safety_001",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手、手套和发网",
      sequence: 1,
      english: "What comes with the combo?",
      chinese: "套餐里包括什么？",
      scenario: "顾客第一次来店里，不熟悉套餐内容，员工引导完成点餐。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "What exactly comes with the combo?",
        "What comes with the combo, please?"
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "I can fix that for you."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "What comes with the combo?",
          chinese: "套餐里包括什么？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "What comes",
          chinese: "重点词组",
          pronunciation: "What comes",
          note: "这句话里的工作关键词。",
          example: "What comes with the combo?"
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 2,
      english: "Sorry, could you repeat that a little more slowly?",
      chinese: "不好意思，您可以说慢一点再重复一遍吗？",
      scenario: "餐厅较吵，员工没有听清顾客的餐品或数量，请顾客重复并确认。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/food_safety_002-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_002-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 3,
      english: "Can I get that without onions?",
      chinese: "这个可以不要洋葱吗？",
      scenario: "顾客要求去掉某种配料并增加另一种配料，员工确认可能产生的加价。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Can I get that without onions, please?"
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "I can fix that for you."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "Can I get that without onions?",
          chinese: "这个可以不要洋葱吗？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "get without",
          chinese: "重点词组",
          pronunciation: "get without",
          note: "这句话里的工作关键词。",
          example: "Can I get that without onions?"
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 4,
      english: "I'm sorry, we're sold out of that today.",
      chinese: "很抱歉，这款今天已经卖完了。",
      scenario: "顾客点的餐品已经售罄，员工道歉并提供替代选择。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/food_safety_004-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_004-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 5,
      english: "What do you recommend instead?",
      chinese: "那您建议我换成什么？",
      scenario: "顾客点的餐品已经售罄，员工道歉并提供替代选择。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "What exactly do you recommend instead?",
        "What do you recommend instead, please?"
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "I can fix that for you."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "What do you recommend instead?",
          chinese: "那您建议我换成什么？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "What recommend",
          chinese: "重点词组",
          pronunciation: "What recommend",
          note: "这句话里的工作关键词。",
          example: "What do you recommend instead?"
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 6,
      english: "What milder flavors do you have?",
      chinese: "你们有什么不太辣的口味？",
      scenario: "顾客无法接受餐品辣度，员工确认订单并提供可执行的替代方案。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "What exactly milder flavors do you have?",
        "What milder flavors do you have, please?"
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "I can fix that for you."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "What milder flavors do you have?",
          chinese: "你们有什么不太辣的口味？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "What milder",
          chinese: "重点词组",
          pronunciation: "What milder",
          note: "这句话里的工作关键词。",
          example: "What milder flavors do you have?"
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 7,
      english: "What's the name on the order?",
      chinese: "订单上的姓名是什么？",
      scenario: "顾客到店领取网上订单，员工通过姓名或订单号核对。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "What's the name on the order, please?"
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
          english: "What's the name on the order?",
          chinese: "订单上的姓名是什么？"
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
          term: "What's name",
          chinese: "重点词组",
          pronunciation: "What's name",
          note: "这句话里的工作关键词。",
          example: "What's the name on the order?"
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
      scenarioTitle: "食品存放和日期标签",
      sequence: 8,
      english: "I’ll send help. I’ll update the wait time.",
      chinese: "我会叫人帮忙。我会更新等待时间。",
      scenario: "厨房订单积压，后厨员工向主管请求支援，并让前台更新顾客等待时间。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "I’ll get help and update the wait time.",
        "I’ll ask someone to help and change the wait time."
      ],
      recommendedResponses: [
        "I’ll wash my hands now.",
        "I’ll put on new gloves.",
        "Where are the clean gloves?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "I’ll send help. I’ll update the wait time.",
          chinese: "我会叫人帮忙。我会更新等待时间。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I’ll wash my hands now.",
          chinese: "我现在去洗手。"
        }
      ],
      vocabularyNotes: [
        {
          term: "wait time",
          chinese: "等待时间",
          pronunciation: "wait time",
          note: "顾客需要等多久。",
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 9,
      english: "What is still available?",
      chinese: "现在还有什么可以点？",
      scenario: "顾客在临近关店时进门，员工礼貌说明剩余营业时间、可售餐品和堂食限制。到关店时间后，应按照门店安全流程处理入口，同时确保店内人员能够安全离开，不得阻挡紧急出口。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "What exactly is still available?",
        "What is still available, please?"
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "I can fix that for you."
      ],
      dialogue: [
        {
          speakerRole: "Customer",
          speakerRoleZh: "顾客",
          english: "What is still available?",
          chinese: "现在还有什么可以点？"
        },
        {
          speakerRole: "Staff",
          speakerRoleZh: "员工",
          english: "Let me check your order.",
          chinese: "我帮你查一下订单。"
        }
      ],
      vocabularyNotes: [
        {
          term: "What still",
          chinese: "重点词组",
          pronunciation: "What still",
          note: "这句话里的工作关键词。",
          example: "What is still available?"
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 10,
      english: "That’s correct. Label the cup and check the bag.",
      chinese: "对。给杯子贴标签，并检查袋子。",
      scenario: "前台把顾客少酱、酱放旁边等要求传到后厨，后厨复述确认。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/food_safety_010-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_010-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 11,
      english: "Let me repeat what I understood.",
      chinese: "我把我理解的内容复述一遍。",
      scenario: "员工主动复述任务，减少语言误解。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Let me repeat what I understood."
      ],
      recommendedResponses: [
        "Can you say that again?",
        "Can you write it down?",
        "Let me confirm first."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Let me repeat what I understood.",
          chinese: "我把我理解的内容复述一遍。"
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
          term: "Let me",
          chinese: "重点词组",
          pronunciation: "Let me",
          note: "这句话里的工作关键词。",
          example: "Let me repeat what I understood."
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 12,
      english: "Could you explain that again more slowly?",
      chinese: "可以再慢一点解释一遍吗？",
      scenario: "员工因英语或环境噪声没有完全听懂指令。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_012-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_012-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee"
      ],
      active: true,
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 13,
      english: "What exactly needs to be corrected?",
      chinese: "具体需要改正什么？",
      scenario: "员工需要具体了解错误所在。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "What exactly exactly needs to be corrected?",
        "What exactly needs to be corrected, please?"
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
          english: "What exactly needs to be corrected?",
          chinese: "具体需要改正什么？"
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
          term: "What exactly",
          chinese: "重点词组",
          pronunciation: "What exactly",
          note: "这句话里的工作关键词。",
          example: "What exactly needs to be corrected?"
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 14,
      english: "What is the expected production rate?",
      chinese: "规定的生产速度是多少？",
      scenario: "员工询问产量或效率目标。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "What exactly is the expected production rate?",
        "What is the expected production rate, please?"
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
          english: "What is the expected production rate?",
          chinese: "规定的生产速度是多少？"
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
          term: "What expected",
          chinese: "重点词组",
          pronunciation: "What expected",
          note: "这句话里的工作关键词。",
          example: "What is the expected production rate?"
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 15,
      english: "Can you explain what improvement is expected?",
      chinese: "可以说明具体需要改进什么吗？",
      scenario: "员工要求主管提供具体、可衡量的改进内容。",
      importance: "食品卫生要求经常被检查，听懂能避免违规和污染风险。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/food_safety_015-normal.mp3",
      audioSlow: "/audio/en-US/food_safety_015-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "food_safety",
        "workplace",
        "supervisor",
        "communication",
        "employee"
      ],
      active: true,
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
      scenarioTitle: "生熟分开和交叉污染",
      sequence: 16,
      english: "Keep raw chicken below cooked food.",
      chinese: "把生鸡肉放在熟食下面。",
      scenario: "冰箱里存放食物时避免交叉污染。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Keep raw chicken below cooked food."
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
          english: "Keep raw chicken below cooked food.",
          chinese: "把生鸡肉放在熟食下面。"
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
          term: "Keep raw",
          chinese: "重点词组",
          pronunciation: "Keep raw",
          note: "这句话里的工作关键词。",
          example: "Keep raw chicken below cooked food."
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
      scenarioTitle: "生熟分开和交叉污染",
      sequence: 17,
      english: "Do not use the same cutting board for raw meat and vegetables.",
      chinese: "不要用同一块砧板切生肉和蔬菜。",
      scenario: "备菜时区分砧板。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please don’t use the same cutting board for raw meat and vegetables."
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
          english: "Do not use the same cutting board for raw meat and vegetables.",
          chinese: "不要用同一块砧板切生肉和蔬菜。"
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
          example: "Do not use the same cutting board for raw meat and vegetables."
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
      scenarioTitle: "食品存放和日期标签",
      sequence: 18,
      english: "Check the expiration date first.",
      chinese: "先检查保质期。",
      scenario: "使用食材前确认日期。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Check the expiration date first."
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
          english: "Check the expiration date first.",
          chinese: "先检查保质期。"
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
          term: "Check expiration",
          chinese: "重点词组",
          pronunciation: "Check expiration",
          note: "这句话里的工作关键词。",
          example: "Check the expiration date first."
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
      scenarioTitle: "食品存放和日期标签",
      sequence: 19,
      english: "This container needs a date label.",
      chinese: "这个容器需要日期标签。",
      scenario: "备好食材后贴标签。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This one container needs a date label.",
        "This item container needs a date label."
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
          english: "This container needs a date label.",
          chinese: "这个容器需要日期标签。"
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
          term: "container needs",
          chinese: "重点词组",
          pronunciation: "container needs",
          note: "这句话里的工作关键词。",
          example: "This container needs a date label."
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
      scenarioTitle: "食品存放和日期标签",
      sequence: 20,
      english: "Put the lid on before you store it.",
      chinese: "存放前把盖子盖上。",
      scenario: "食材放冰箱前。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Put the lid on before you store it."
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
          english: "Put the lid on before you store it.",
          chinese: "存放前把盖子盖上。"
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
          term: "Put lid",
          chinese: "重点词组",
          pronunciation: "Put lid",
          note: "这句话里的工作关键词。",
          example: "Put the lid on before you store it."
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
      scenarioTitle: "食品存放和日期标签",
      sequence: 21,
      english: "Do not leave food out too long.",
      chinese: "不要把食物放在外面太久。",
      scenario: "食品离开冷藏或热保温太久有风险。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please don’t leave food out too long."
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
          english: "Do not leave food out too long.",
          chinese: "不要把食物放在外面太久。"
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
          term: "not leave",
          chinese: "重点词组",
          pronunciation: "not leave",
          note: "这句话里的工作关键词。",
          example: "Do not leave food out too long."
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
      scenarioTitle: "食品存放和日期标签",
      sequence: 22,
      english: "This needs to go back in the cooler.",
      chinese: "这个需要放回冷藏柜。",
      scenario: "食材用完后归位。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This one needs to go back in the cooler.",
        "This item needs to go back in the cooler."
      ],
      recommendedResponses: [
        "For here, please.",
        "To go, please.",
        "It’s for takeout."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "This needs to go back in the cooler.",
          chinese: "这个需要放回冷藏柜。"
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
      active: true,
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 24,
      english: "Change the gloves before making the salad.",
      chinese: "做沙拉前换手套。",
      scenario: "从生食或清洁任务切换到即食食品。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Change the gloves before making the salad."
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
          english: "Change the gloves before making the salad.",
          chinese: "做沙拉前换手套。"
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
      active: true,
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
      scenarioTitle: "食品存放和日期标签",
      sequence: 26,
      english: "Check the cooler temperature.",
      chinese: "检查冷藏柜温度。",
      scenario: "开店或交接时检查温度。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please check the cooler temperature."
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
          english: "Check the cooler temperature.",
          chinese: "检查冷藏柜温度。"
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
          term: "Check cooler",
          chinese: "重点词组",
          pronunciation: "Check cooler",
          note: "这句话里的工作关键词。",
          example: "Check the cooler temperature."
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
      scenarioTitle: "食品存放和日期标签",
      sequence: 27,
      english: "Check the freezer temperature.",
      chinese: "检查冷冻柜温度。",
      scenario: "确认冷冻食品安全存放。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please check the freezer temperature."
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
          english: "Check the freezer temperature.",
          chinese: "检查冷冻柜温度。"
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
          term: "Check freezer",
          chinese: "重点词组",
          pronunciation: "Check freezer",
          note: "这句话里的工作关键词。",
          example: "Check the freezer temperature."
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
      scenarioTitle: "食品存放和日期标签",
      sequence: 28,
      english: "This food is past the use-by date.",
      chinese: "这个食物已经过了使用日期。",
      scenario: "发现过期或超期食品。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "This one food is past the use-by date.",
        "This item food is past the use-by date."
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
          english: "This food is past the use-by date.",
          chinese: "这个食物已经过了使用日期。"
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
          term: "food past",
          chinese: "重点词组",
          pronunciation: "food past",
          note: "这句话里的工作关键词。",
          example: "This food is past the use-by date."
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
      active: true,
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
      scenarioTitle: "食品存放和日期标签",
      sequence: 30,
      english: "Do not put hot food straight into the cooler.",
      chinese: "不要把热食物直接放进冷藏柜。",
      scenario: "热食冷却和存放。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "生熟分开和交叉污染",
      sequence: 31,
      english: "Let it cool before you cover it.",
      chinese: "盖起来之前先让它冷却。",
      scenario: "熟食冷却流程。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Let it cool before you cover it."
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
          english: "Let it cool before you cover it.",
          chinese: "盖起来之前先让它冷却。"
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
          term: "Let cool",
          chinese: "重点词组",
          pronunciation: "Let cool",
          note: "这句话里的工作关键词。",
          example: "Let it cool before you cover it."
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
      active: true,
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
      scenarioTitle: "生熟分开和交叉污染",
      sequence: 33,
      english: "Do not touch ready-to-eat food with bare hands.",
      chinese: "不要徒手接触即食食品。",
      scenario: "制作沙拉、面包或熟食。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please don’t touch ready-to-eat food with bare hands."
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
          english: "Do not touch ready-to-eat food with bare hands.",
          chinese: "不要徒手接触即食食品。"
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
          term: "not touch",
          chinese: "重点词组",
          pronunciation: "not touch",
          note: "这句话里的工作关键词。",
          example: "Do not touch ready-to-eat food with bare hands."
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
      active: true,
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
      scenarioTitle: "食品存放和日期标签",
      sequence: 35,
      english: "This needs to be covered in the fridge.",
      chinese: "这个放冰箱里需要盖好。",
      scenario: "冰箱存放食品。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "食品存放和日期标签",
      sequence: 36,
      english: "Keep chemicals away from food.",
      chinese: "把化学品远离食物。",
      scenario: "清洁用品存放。",
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
      scenarioTitle: "生熟分开和交叉污染",
      sequence: 38,
      english: "Use the red cutting board for raw meat.",
      chinese: "生肉用红色砧板。",
      scenario: "厨房用颜色区分砧板。",
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
      id: "food_safety_039",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_raw_cooked",
      scenarioTitle: "生熟分开和交叉污染",
      sequence: 39,
      english: "Use the green cutting board for vegetables.",
      chinese: "蔬菜用绿色砧板。",
      scenario: "厨房用颜色区分砧板。",
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
      id: "food_safety_040",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_raw_cooked",
      scenarioTitle: "生熟分开和交叉污染",
      sequence: 40,
      english: "Change the towel if it touches the floor.",
      chinese: "抹布碰到地上就要换。",
      scenario: "保持抹布卫生。",
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
      id: "food_safety_041",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_storage_label",
      scenarioTitle: "食品存放和日期标签",
      sequence: 41,
      english: "Do not put clean utensils on a dirty surface.",
      chinese: "不要把干净餐具放在脏表面上。",
      scenario: "餐具洗好后存放。",
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
      scenarioTitle: "洗手、手套和发网",
      sequence: 45,
      english: "Wash your hands after taking out trash.",
      chinese: "倒完垃圾后要洗手。",
      scenario: "从垃圾任务回到食品任务。",
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
      id: "food_safety_046",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_handwashing_gloves",
      scenarioTitle: "洗手、手套和发网",
      sequence: 46,
      english: "Wash your hands after using your phone.",
      chinese: "用完手机后要洗手。",
      scenario: "手机可能污染手。",
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
      id: "food_safety_047",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_raw_cooked",
      scenarioTitle: "生熟分开和交叉污染",
      sequence: 47,
      english: "Do not eat on the prep table.",
      chinese: "不要在备餐台上吃东西。",
      scenario: "工作区卫生要求。",
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
      id: "food_safety_048",
      moduleId: "food_safety",
      moduleTitle: "食品卫生、手套、发网和食品存放",
      scenarioId: "food_safety_raw_cooked",
      scenarioTitle: "生熟分开和交叉污染",
      sequence: 48,
      english: "Store raw seafood separately.",
      chinese: "把生海鲜分开存放。",
      scenario: "避免交叉污染和过敏风险。",
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
      scenarioTitle: "生熟分开和交叉污染",
      sequence: 50,
      english: "Use separate utensils for allergen orders.",
      chinese: "过敏订单要使用单独的工具。",
      scenario: "处理过敏订单时避免交叉接触。",
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      scenarioTitle: "垃圾袋和回收",
      sequence: 11,
      english: "Double-check the bag before you seal it.",
      chinese: "封袋前再核对一遍。",
      scenario: "打包完成前按小票逐项核对，减少少餐和错餐。",
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
        "food_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Double-check the bag before you seal it."
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
          english: "Double-check the bag before you seal it.",
          chinese: "封袋前再核对一遍。"
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
          term: "Double-check bag",
          chinese: "重点词组",
          pronunciation: "Double-check bag",
          note: "这句话里的工作关键词。",
          example: "Double-check the bag before you seal it."
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      scenarioTitle: "备菜、切菜和称重",
      sequence: 13,
      english: "Label the bag with the customer's name.",
      chinese: "在袋子上写上顾客的名字。",
      scenario: "电话订单、网络订单或自取订单需要用姓名区分时使用。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_013-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_013-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Label the bag with the customer's name."
      ],
      recommendedResponses: [
        "I’ll wash my hands now.",
        "I’ll put on new gloves.",
        "Where are the clean gloves?"
      ],
      dialogue: [
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "Label the bag with the customer's name.",
          chinese: "在袋子上写上顾客的名字。"
        },
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "I’ll wash my hands now.",
          chinese: "我现在去洗手。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Label bag",
          chinese: "重点词组",
          pronunciation: "Label bag",
          note: "这句话里的工作关键词。",
          example: "Label the bag with the customer's name."
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      scenarioTitle: "垃圾袋和回收",
      sequence: 22,
      english: "Sweep the dining area.",
      chinese: "把用餐区扫一下。",
      scenario: "清理顾客用餐区的碎屑和垃圾。",
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
        "food_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please sweep the dining area."
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
          term: "Sweep dining",
          chinese: "重点词组",
          pronunciation: "Sweep dining",
          note: "这句话里的工作关键词。",
          example: "Sweep the dining area."
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
      scenarioTitle: "垃圾袋和回收",
      sequence: 23,
      english: "Take out the trash before closing.",
      chinese: "关店前把垃圾倒掉。",
      scenario: "关店流程中清空垃圾桶并更换垃圾袋。",
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
        "food_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Take out the trash before closing."
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
          term: "Take out",
          chinese: "重点词组",
          pronunciation: "Take out",
          note: "这句话里的工作关键词。",
          example: "Take out the trash before closing."
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      scenarioTitle: "擦桌子、柜台和饮料台",
      sequence: 25,
      english: "Clean the drink station.",
      chinese: "清洁饮料区。",
      scenario: "清洁饮料机周围、滴水盘及顾客使用区域。",
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
        "food_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please clean the drink station."
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
          english: "Clean the drink station.",
          chinese: "清洁饮料区。"
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
          term: "Clean drink",
          chinese: "重点词组",
          pronunciation: "Clean drink",
          note: "这句话里的工作关键词。",
          example: "Clean the drink station."
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
      scenarioTitle: "备菜、切菜和称重",
      sequence: 26,
      english: "Turn off the open sign.",
      chinese: "把营业灯关掉。",
      scenario: "停止营业后关闭或切换门口营业标识。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_026-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_026-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Turn off the open sign."
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
          term: "Turn off",
          chinese: "重点词组",
          pronunciation: "Turn off",
          note: "这句话里的工作关键词。",
          example: "Turn off the open sign."
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
      scenarioTitle: "扫地、拖地和地垫",
      sequence: 27,
      english: "Follow the closing procedure for the front door.",
      chinese: "按照关店流程处理前门。",
      scenario: "关店时按照门店流程和当地消防要求处理前门；防止新顾客进入的同时，必须确保店内人员能够安全离开，不能锁住或阻挡紧急出口。",
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
        "food_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Follow the closing procedure for the front door."
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
          english: "Follow the closing procedure for the front door.",
          chinese: "按照关店流程处理前门。"
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
          term: "Follow closing",
          chinese: "重点词组",
          pronunciation: "Follow closing",
          note: "这句话里的工作关键词。",
          example: "Follow the closing procedure for the front door."
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      scenarioTitle: "扫地、拖地和地垫",
      sequence: 29,
      english: "The floor is still wet.",
      chinese: "地面还是湿的。",
      scenario: "清洁后地面仍湿滑时及时报告，避免过早撤掉警示牌。",
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
        "food_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "后厨员工要说",
      variants: [
        "The floor is still wet."
      ],
      recommendedResponses: [
        "Okay, I’ll be careful.",
        "Got it.",
        "I’ll do that safely."
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
          term: "floor still",
          chinese: "重点词组",
          pronunciation: "floor still",
          note: "这句话里的工作关键词。",
          example: "The floor is still wet."
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
      scenarioTitle: "扫地、拖地和地垫",
      sequence: 30,
      english: "Put up the wet floor sign.",
      chinese: "放上小心地滑警示牌。",
      scenario: "发现湿滑地面时先设置警示并限制通行，再进行清理。",
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
        "food_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Put up the wet floor sign."
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
          pronunciation: "wet floor sign",
          note: "地面湿时提醒别人小心。",
          example: "Put out the wet floor sign."
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
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      active: true,
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
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      active: true,
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
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      scenarioTitle: "备菜、切菜和称重",
      sequence: 43,
      english: "Prep more sauce cups.",
      chinese: "再准备一些酱料杯。",
      scenario: "高峰前或酱杯不足时，按标准份量提前准备。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_043-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_043-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please prep more sauce cups."
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
          term: "Prep more",
          chinese: "重点词组",
          pronunciation: "Prep more",
          note: "这句话里的工作关键词。",
          example: "Prep more sauce cups."
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
      active: true,
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
      active: true,
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
      active: true,
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
      scenarioTitle: "关店清洁和补货",
      sequence: 47,
      english: "Add gloves to the supply list.",
      chinese: "把手套加到物料清单上。",
      scenario: "手套库存不足时，记录所需尺寸和数量。",
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
        "food_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Add gloves to the supply list."
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
          english: "Add gloves to the supply list.",
          chinese: "把手套加到物料清单上。"
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
      scenarioTitle: "关店清洁和补货",
      sequence: 48,
      english: "Count the inventory before we close.",
      chinese: "关店前盘点库存。",
      scenario: "关店前盘点关键原料和包装用品，为次日采购和备货提供依据。",
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
        "food_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Count the inventory before we close."
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
          chinese: "重点词组",
          pronunciation: "Count inventory",
          note: "这句话里的工作关键词。",
          example: "Count the inventory before we close."
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
      scenarioTitle: "炸炉、烤箱和设备清洁",
      sequence: 49,
      english: "This box needs to stay refrigerated.",
      chinese: "这一箱需要一直冷藏。",
      scenario: "收到或移动需冷藏原料时，立即放入指定冷藏设备。",
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
        "food_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "This one box needs to stay refrigerated.",
        "This item box needs to stay refrigerated."
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
          english: "This box needs to stay refrigerated.",
          chinese: "这一箱需要一直冷藏。"
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
          term: "box needs",
          chinese: "重点词组",
          pronunciation: "box needs",
          note: "这句话里的工作关键词。",
          example: "This box needs to stay refrigerated."
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
      active: true,
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
      active: true,
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
      active: true,
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
      active: true,
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
      scenarioTitle: "炸炉、烤箱和设备清洁",
      sequence: 54,
      english: "We cannot guarantee that there will be no cross-contact.",
      chinese: "我们无法保证完全不会发生过敏原交叉接触。",
      scenario: "餐厅使用共用设备、炸油或操作台时，如实说明不能保证完全无过敏原。",
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
        "food_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "We cannot guarantee that there will be no cross-contact."
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
          chinese: "重点词组",
          pronunciation: "cannot guarantee",
          note: "这句话里的工作关键词。",
          example: "We cannot guarantee that there will be no cross-contact."
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
      isFree: true,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      active: true,
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
      isFree: true,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      scenarioTitle: "扫地、拖地和地垫",
      sequence: 58,
      english: "Do not serve food that fell on the floor.",
      chinese: "掉到地上的食物不能提供给顾客。",
      scenario: "任何掉到地面或受污染的食品都必须丢弃并重新制作。",
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
        "food_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Please don’t serve food that fell on the floor."
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
          term: "not serve",
          chinese: "重点词组",
          pronunciation: "not serve",
          note: "这句话里的工作关键词。",
          example: "Do not serve food that fell on the floor."
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
      isFree: true,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      active: true,
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
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      scenarioTitle: "备菜、切菜和称重",
      sequence: 63,
      english: "Keep cleaning chemicals away from food and prep areas.",
      chinese: "清洁化学品要远离食品和备餐区域。",
      scenario: "清洁剂、消毒剂等化学品必须按门店和当地规定存放，避免污染食品、器具和备餐表面。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_063-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_063-slow.mp3",
      isFree: true,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Keep cleaning chemicals away from food and prep areas."
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
          chinese: "重点词组",
          pronunciation: "Keep cleaning",
          note: "这句话里的工作关键词。",
          example: "Keep cleaning chemicals away from food and prep areas."
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
      scenarioTitle: "擦桌子、柜台和饮料台",
      sequence: 64,
      english: "Do not thaw meat on the counter. Follow the procedure.",
      chinese: "不要把肉放在台面上解冻。按流程操作。",
      scenario: "冷冻肉类不得随意在室温台面解冻。具体可用方法、时间和水温要求应以当地法规及门店食品安全流程为准。",
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
        "food_service"
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
          term: "thaw meat",
          chinese: "解冻肉类",
          pronunciation: "thaw meat",
          note: "把冷冻肉变软变可用。",
          example: "Do not thaw meat on the counter."
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
      scenarioTitle: "备菜、切菜和称重",
      sequence: 65,
      english: "Label and date the prep container before putting it away.",
      chinese: "把备料盒收起来之前，要贴标签并写上日期。",
      scenario: "自制备料、分装酱料或开封原料放入冷藏设备前，按门店要求填写品名、日期、废弃日期或员工缩写。",
      importance: "后厨工作靠短指令推进，听懂流程能更快上手。",
      role: "Supervisor",
      roleZh: "主管可能会说",
      audioNormal: "/audio/en-US/kitchen_cleaning_065-normal.mp3",
      audioSlow: "/audio/en-US/kitchen_cleaning_065-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Label and date the prep container before putting it away."
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
          term: "Label and",
          chinese: "重点词组",
          pronunciation: "Label and",
          note: "这句话里的工作关键词。",
          example: "Label and date the prep container before putting it away."
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
      scenarioTitle: "扫地、拖地和地垫",
      sequence: 66,
      english: "Check and record the holding temperature.",
      chinese: "检查并记录食品的保温或冷藏温度。",
      scenario: "热食保温和冷食冷藏应达到门店及当地法规规定的温度。由于美国和加拿大不同地区的具体数值可能不同，课程主句不写成全球统一数字。",
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
        "food_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Supervisor",
      speakerRoleZh: "主管可能会说",
      variants: [
        "Check and record the holding temperature."
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
          term: "Check and",
          chinese: "重点词组",
          pronunciation: "Check and",
          note: "这句话里的工作关键词。",
          example: "Check and record the holding temperature."
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 67,
      english: "Follow the fryer safety procedure when filtering or changing the oil.",
      chinese: "过滤或更换炸油时，要按照炸炉安全流程操作。",
      scenario: "处理高温炸油可能造成严重烫伤。未经培训的员工不应独自操作，应使用门店规定的防护用品和设备流程。",
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
        "food_service"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "kitchen",
        "teamwork",
        "food_service"
      ],
      active: true,
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
      scenarioTitle: "扫地、拖地和地垫",
      sequence: 69,
      english: "Let me check the ingredient information and ask the kitchen.",
      chinese: "我核对一下配料信息，并向厨房确认。",
      scenario: "顾客说明花生过敏，员工不凭记忆作保证，而是核对配料和交叉接触风险。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Let me check the ingredient information and ask the kitchen."
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
          term: "Let me",
          chinese: "重点词组",
          pronunciation: "Let me",
          note: "这句话里的工作关键词。",
          example: "Let me check the ingredient information and ask the kitchen."
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
      scenarioTitle: "炸炉、烤箱和设备清洁",
      sequence: 70,
      english: "Is the same fryer used for other foods?",
      chinese: "这些食物是不是共用同一个炸炉？",
      scenario: "顾客说明花生过敏，员工不凭记忆作保证，而是核对配料和交叉接触风险。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Is this the same fryer used for other foods?"
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
          term: "same fryer",
          chinese: "重点词组",
          pronunciation: "same fryer",
          note: "这句话里的工作关键词。",
          example: "Is the same fryer used for other foods?"
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
      scenarioTitle: "炸炉、烤箱和设备清洁",
      sequence: 71,
      english: "We cannot guarantee no cross-contact.",
      chinese: "我们不能保证完全没有交叉接触。",
      scenario: "顾客说明花生过敏，员工不凭记忆作保证，而是核对配料和交叉接触风险。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "We can’t promise there is no cross-contact.",
        "There may be cross-contact."
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
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
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "kitchen_cleaning",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 80,
      english: "Add dish soap to the sink.",
      chinese: "往水槽里加洗洁精。",
      scenario: "洗碗区开始清洗前，需要往水槽里加入洗碗清洁剂。",
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
        "release_v1"
      ],
      active: true,
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 81,
      english: "Use the dish detergent.",
      chinese: "使用洗碗清洁剂。",
      scenario: "主管提醒员工使用餐具专用洗碗清洁剂，不要随便用其他化学品。",
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
        "release_v1"
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
      id: "kitchen_cleaning_082",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 82,
      english: "Fill the sink with warm water.",
      chinese: "往水槽里放温水。",
      scenario: "准备洗碗水槽时，员工需要放入温水。",
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
        "release_v1"
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 83,
      english: "Scrape the food off first.",
      chinese: "先把食物残渣刮掉。",
      scenario: "洗盘子前先刮掉食物残渣，避免堵塞水槽或洗碗机。",
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
        "release_v1"
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 84,
      english: "Rinse the dishes first.",
      chinese: "先把盘子冲洗一下。",
      scenario: "盘子进入清洗流程前，先冲掉明显残渣。",
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
        "release_v1"
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
      id: "kitchen_cleaning_085",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 85,
      english: "Wash the dishes in the first sink.",
      chinese: "在第一个水槽里清洗餐具。",
      scenario: "三槽水池流程中，第一个水槽用于清洗。",
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
        "release_v1"
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
      id: "kitchen_cleaning_086",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 86,
      english: "Rinse them in the second sink.",
      chinese: "在第二个水槽里冲洗。",
      scenario: "三槽水池流程中，第二个水槽用于冲洗掉清洁剂。",
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
        "release_v1"
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 87,
      english: "Sanitize them in the third sink.",
      chinese: "在第三个水槽里消毒。",
      scenario: "三槽水池流程中，第三个水槽用于餐具消毒。",
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
        "release_v1"
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 88,
      english: "Check the sanitizer concentration.",
      chinese: "检查消毒液浓度。",
      scenario: "使用消毒剂前需要检查浓度，避免太弱或太强。",
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
        "release_v1"
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 89,
      english: "Use a test strip.",
      chinese: "使用测试纸。",
      scenario: "员工用消毒液浓度测试纸检查 sanitizer 是否合格。",
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
        "release_v1"
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 90,
      english: "The sanitizer is too weak.",
      chinese: "消毒液浓度太低。",
      scenario: "测试结果显示 sanitizer 浓度太低，需要更换或重新配制。",
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
        "release_v1"
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 91,
      english: "The sanitizer is too strong.",
      chinese: "消毒液浓度太高。",
      scenario: "消毒剂浓度过高也不合适，员工需要停止使用并确认处理方法。",
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
        "release_v1"
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 92,
      english: "Change the sanitizer water.",
      chinese: "更换消毒水。",
      scenario: "消毒水变脏或浓度不合格时需要更换。",
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
        "release_v1"
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 93,
      english: "Let the dishes air-dry.",
      chinese: "让餐具自然风干。",
      scenario: "消毒后的餐具应自然风干，不应用毛巾擦干。",
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
        "release_v1"
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 94,
      english: "Don’t dry them with a towel.",
      chinese: "不要用毛巾擦干。",
      scenario: "主管提醒员工不要用毛巾擦干已消毒餐具，避免再次污染。",
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
        "release_v1"
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 95,
      english: "Put the clean dishes away.",
      chinese: "把干净餐具收好。",
      scenario: "餐具自然风干后，员工需要把干净餐具放回指定位置。",
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
        "release_v1"
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 96,
      english: "These dishes are still greasy.",
      chinese: "这些餐具还有油。",
      scenario: "餐具洗完后仍然有油，需要重新清洗。",
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
        "release_v1"
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 97,
      english: "These dishes are still dirty.",
      chinese: "这些餐具还没洗干净。",
      scenario: "发现餐具没洗干净时，应重新清洗，不能直接收起来。",
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
        "release_v1"
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
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 98,
      english: "Wash them again.",
      chinese: "再洗一遍。",
      scenario: "主管要求员工把没洗干净的餐具重新洗一遍。",
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
        "release_v1"
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
      id: "kitchen_cleaning_099",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 99,
      english: "The dishwasher is full.",
      chinese: "洗碗机满了。",
      scenario: "洗碗机装满后，员工需要确认是否启动。",
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
        "release_v1"
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
      id: "kitchen_cleaning_100",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 100,
      english: "Start the dishwasher.",
      chinese: "启动洗碗机。",
      scenario: "洗碗机装好后，主管让员工启动机器。",
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
        "release_v1"
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
      id: "kitchen_cleaning_101",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 101,
      english: "The dishwasher is not draining.",
      chinese: "洗碗机不排水。",
      scenario: "洗碗机排水异常时，需要报告并检查过滤器或停止使用。",
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
        "release_v1"
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
      id: "kitchen_cleaning_102",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 102,
      english: "The dishwasher is not getting hot enough.",
      chinese: "洗碗机温度不够高。",
      scenario: "高温洗碗机温度不足可能影响清洁和消毒效果。",
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
        "release_v1"
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
      id: "kitchen_cleaning_103",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 103,
      english: "Clean the dishwasher filter.",
      chinese: "清洗洗碗机过滤器。",
      scenario: "洗碗机过滤器需要定期清洁，防止堵塞和排水问题。",
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
        "release_v1"
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
      id: "kitchen_cleaning_104",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 104,
      english: "Don’t mix chemicals.",
      chinese: "不要混合清洁化学品。",
      scenario: "清洁剂和消毒剂不能随意混合，避免危险反应或有害气体。",
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
        "release_v1"
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
      id: "kitchen_cleaning_105",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_table_counter_cleaning",
      scenarioTitle: "擦桌子、柜台和饮料台",
      sequence: 105,
      english: "Wipe the table.",
      chinese: "把桌子擦干净。",
      scenario: "顾客离开后，员工需要擦桌子。",
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
        "release_v1"
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
      id: "kitchen_cleaning_106",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_table_counter_cleaning",
      scenarioTitle: "擦桌子、柜台和饮料台",
      sequence: 106,
      english: "Clean the table.",
      chinese: "清洁桌面。",
      scenario: "前厅员工需要清洁客人用餐桌。",
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
        "release_v1"
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
      id: "kitchen_cleaning_107",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_table_counter_cleaning",
      scenarioTitle: "擦桌子、柜台和饮料台",
      sequence: 107,
      english: "Spray the cleaner on the cloth.",
      chinese: "把清洁剂喷在抹布上。",
      scenario: "清洁桌面时，通常把一般清洁剂喷在布上，避免喷到食物附近。",
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
        "release_v1"
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
      id: "kitchen_cleaning_108",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_dishwashing",
      scenarioTitle: "洗碗机和餐具清洗",
      sequence: 108,
      english: "Don’t spray near the food.",
      chinese: "不要在食物旁边喷清洁剂。",
      scenario: "避免清洁剂喷雾接触食物或餐具。",
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
        "release_v1"
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
      scenarioTitle: "擦桌子、柜台和饮料台",
      sequence: 109,
      english: "Use the table cleaner.",
      chinese: "使用桌面清洁剂。",
      scenario: "主管提醒员工使用前厅桌面指定的一般清洁剂。",
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
        "release_v1"
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
      id: "kitchen_cleaning_110",
      moduleId: "kitchen_cleaning",
      moduleTitle: "后厨备菜、炸炉、洗碗和清洁",
      scenarioId: "kitchen_cleaning_three_sink",
      scenarioTitle: "三槽水池和消毒液浓度",
      sequence: 110,
      english: "Sanitize the table after cleaning it.",
      chinese: "清洁以后给桌面消毒。",
      scenario: "桌面清洁后，如需要食品接触表面消毒，使用 sanitizer，不是随意用 disinfectant。",
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
        "release_v1"
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
      id: "front_counter_001",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_greeting_order",
      scenarioTitle: "欢迎和开始点餐",
      sequence: 1,
      english: "What can I get for you?",
      chinese: "您想点些什么？",
      scenario: "顾客来到柜台并准备点餐时，员工用这句话开始接单。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_001-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_001-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "What exactly can I get for you?",
        "What can I get for you, please?"
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
          english: "What can I get for you?",
          chinese: "您想点些什么？"
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
          term: "What get",
          chinese: "重点词组",
          pronunciation: "What get",
          note: "这句话里的工作关键词。",
          example: "What can I get for you?"
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 2,
      english: "Would you like the combo or just the chicken?",
      chinese: "您想要套餐，还是只要鸡肉单点？",
      scenario: "顾客选好鸡肉餐品后，员工确认要套餐还是只要主餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_002-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_002-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 3,
      english: "What flavor would you like?",
      chinese: "您想要什么口味？",
      scenario: "顾客选择鸡翅、鸡柳或其他可选口味的餐品时使用。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 4,
      english: "Tossed or on the side?",
      chinese: "您想拌酱，还是把酱放在旁边？",
      scenario: "顾客选好酱汁后，员工确认酱汁要拌进食物里还是单独装。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_004-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_004-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Tossed or on the side, please?"
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
          english: "Tossed or on the side?",
          chinese: "您想拌酱，还是把酱放在旁边？"
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
      id: "front_counter_005",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_combo_sauce_drink",
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 5,
      english: "What drink would you like?",
      chinese: "您想要什么饮料？",
      scenario: "顾客点套餐或单独购买饮料时使用。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_005-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_005-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "What exactly drink would you like?",
        "What drink would you like, please?"
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
          chinese: "重点词组",
          pronunciation: "What drink",
          note: "这句话里的工作关键词。",
          example: "What drink would you like?"
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
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 7,
      english: "Anything else?",
      chinese: "还需要别的吗？",
      scenario: "主订单基本完成后，员工确认顾客是否还要加购。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_007-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_007-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
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
          speakerRoleZh: "员工",
          english: "Anything else?",
          chinese: "还需要别的吗？"
        },
        {
          speakerRole: "Supervisor",
          speakerRoleZh: "主管",
          english: "One, please.",
          chinese: "一个，谢谢。"
        }
      ],
      vocabularyNotes: [
        {
          term: "Anything else",
          chinese: "重点词组",
          pronunciation: "Anything else",
          note: "这句话里的工作关键词。",
          example: "Anything else?"
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 8,
      english: "Is that correct?",
      chinese: "这样对吗？",
      scenario: "员工复述订单后，请顾客确认内容是否正确。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_008-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_008-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Is this that correct?"
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
          chinese: "重点词组",
          pronunciation: "correct",
          note: "这句话里的工作关键词。",
          example: "Is that correct?"
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 9,
      english: "Your total is sixteen ninety-nine.",
      chinese: "总共是16.99美元。",
      scenario: "订单确认后，员工告诉顾客应付总金额。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "刷卡、现金和付款失败",
      sequence: 10,
      english: "It'll be ready in about ten minutes.",
      chinese: "大约十分钟可以做好。",
      scenario: "付款后告知顾客预计等待时间，不承诺无法保证的准确时间。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 11,
      english: "Combo or chicken only?",
      chinese: "套餐还是只要鸡肉单点？",
      scenario: "快速确认顾客要套餐还是只购买鸡肉餐品。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_011-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_011-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Combo or chicken only, please?"
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
          term: "Combo or",
          chinese: "重点词组",
          pronunciation: "Combo or",
          note: "这句话里的工作关键词。",
          example: "Combo or chicken only?"
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 12,
      english: "Combo or wings only?",
      chinese: "套餐还是只要鸡翅单点？",
      scenario: "顾客点鸡翅时确认是否需要套餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_012-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_012-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Combo or wings only, please?"
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
          term: "Combo or",
          chinese: "重点词组",
          pronunciation: "Combo or",
          note: "这句话里的工作关键词。",
          example: "Combo or wings only?"
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 13,
      english: "Would you like to make it a combo?",
      chinese: "您想升级成套餐吗？",
      scenario: "顾客只点主餐时，员工询问是否增加配菜和饮料组成套餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_013-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_013-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 14,
      english: "The combo comes with fries, toast, and a drink.",
      chinese: "套餐包括薯条、吐司和一杯饮料。",
      scenario: "顾客询问套餐包含什么时，员工说明实际配套内容。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_014-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_014-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 15,
      english: "Just the chicken, no combo?",
      chinese: "只要鸡肉单点，不要套餐，对吗？",
      scenario: "员工再次确认顾客明确不要套餐，避免漏加配菜或饮料。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_015-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_015-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 16,
      english: "Chicken only.",
      chinese: "只要鸡肉单点。",
      scenario: "顾客不要套餐，只购买鸡肉餐品时使用。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_016-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_016-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Please chicken only."
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
          chinese: "重点词组",
          pronunciation: "Chicken only",
          note: "这句话里的工作关键词。",
          example: "Chicken only."
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 17,
      english: "Wings only.",
      chinese: "只要鸡翅单点。",
      scenario: "顾客只要鸡翅，不需要薯条或饮料时使用。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_017-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_017-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Please wings only."
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
          chinese: "重点词组",
          pronunciation: "Wings only",
          note: "这句话里的工作关键词。",
          example: "Wings only."
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 18,
      english: "No combo.",
      chinese: "不要套餐。",
      scenario: "顾客明确不需要套餐时使用。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_018-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_018-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Please no combo."
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
          term: "No combo",
          chinese: "重点词组",
          pronunciation: "No combo",
          note: "这句话里的工作关键词。",
          example: "No combo."
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 19,
      english: "I don't need fries or a drink.",
      chinese: "我不需要薯条和饮料。",
      scenario: "顾客解释自己只需要主餐、不需要套餐配品时使用。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_019-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_019-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 20,
      english: "You can choose two flavors.",
      chinese: "您可以选择两种口味。",
      scenario: "订单数量允许分成两种口味时，员工向顾客说明选择方式。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 21,
      english: "Light sauce or regular sauce?",
      chinese: "少酱还是正常酱量？",
      scenario: "顾客选择拌酱后，员工确认酱汁用量。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_021-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_021-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 22,
      english: "Would you like extra sauce?",
      chinese: "您需要额外加酱吗？",
      scenario: "员工询问是否需要另外购买或增加酱料。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_022-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_022-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 23,
      english: "Tossed, please.",
      chinese: "请帮我拌酱。",
      scenario: "顾客希望酱汁直接拌进食物里时使用。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_023-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_023-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Please tossed, please."
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
          term: "Tossed,",
          chinese: "重点词组",
          pronunciation: "Tossed,",
          note: "这句话里的工作关键词。",
          example: "Tossed, please."
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 24,
      english: "Sauce on the side, please.",
      chinese: "请把酱放旁边。",
      scenario: "顾客希望保持食物原味、酱料单独装时使用。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_024-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_024-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 25,
      english: "Keep them plain.",
      chinese: "保持原味，不要拌酱。",
      scenario: "顾客不要任何酱汁或调味时使用。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_025-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_025-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Please keep them plain."
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
          term: "Keep them",
          chinese: "重点词组",
          pronunciation: "Keep them",
          note: "这句话里的工作关键词。",
          example: "Keep them plain."
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 26,
      english: "What would you like to drink?",
      chinese: "您想喝什么？",
      scenario: "套餐或单点饮料时询问顾客选择。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_026-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_026-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 27,
      english: "Which drink would you like with your combo?",
      chinese: "您的套餐想配哪种饮料？",
      scenario: "顾客点套餐后，员工确认套餐饮料。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_027-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_027-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 28,
      english: "The drink is included with the combo.",
      chinese: "套餐已经包括饮料。",
      scenario: "顾客询问套餐价格是否包括饮料时使用。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_028-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_028-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 29,
      english: "Fruit tea or milk tea?",
      chinese: "水果茶还是奶茶？",
      scenario: "餐厅提供水果茶和奶茶时，员工确认大类。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 30,
      english: "Regular ice or less ice?",
      chinese: "正常冰还是少冰？",
      scenario: "制作茶饮或冷饮前确认冰量。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 31,
      english: "Is the drink included?",
      chinese: "饮料包括在套餐里吗？",
      scenario: "顾客不确定套餐是否包括饮料时使用。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_031-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_031-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Is this the drink included?"
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
          chinese: "重点词组",
          pronunciation: "drink included",
          note: "这句话里的工作关键词。",
          example: "Is the drink included?"
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
      scenarioTitle: "套餐、酱料和饮料",
      sequence: 32,
      english: "Can I choose any drink?",
      chinese: "我可以任选饮料吗？",
      scenario: "顾客询问套餐可选择哪些饮料以及是否需要加价。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_032-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_032-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "刷卡、现金和付款失败",
      sequence: 33,
      english: "You can tap your card here.",
      chinese: "您可以在这里感应付款。",
      scenario: "顾客使用银行卡或手机感应付款时，员工指示感应位置。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_033-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_033-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "You can tap your card here."
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
          english: "You can tap your card here.",
          chinese: "您可以在这里感应付款。"
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
          term: "tap your",
          chinese: "重点词组",
          pronunciation: "tap your",
          note: "这句话里的工作关键词。",
          example: "You can tap your card here."
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
      scenarioTitle: "刷卡、现金和付款失败",
      sequence: 34,
      english: "Please follow the screen.",
      chinese: "请按照屏幕提示操作。",
      scenario: "刷卡机要求确认金额、选择小费或签名时使用。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_034-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_034-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Can you follow the screen?",
        "Could you please follow the screen?"
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
          term: "follow screen",
          chinese: "重点词组",
          pronunciation: "follow screen",
          note: "这句话里的工作关键词。",
          example: "Please follow the screen."
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
      scenarioTitle: "刷卡、现金和付款失败",
      sequence: 35,
      english: "Would you like a receipt?",
      chinese: "您需要小票吗？",
      scenario: "付款完成后询问顾客是否需要纸质或电子小票。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_035-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_035-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
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
        "Can I get it printed?"
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
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 37,
      english: "Thank you for calling. How can I help you?",
      chinese: "感谢来电。请问有什么可以帮您？",
      scenario: "接听餐厅电话时，用礼貌而简短的开场白。",
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
        "customer_service"
      ],
      active: true,
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
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 39,
      english: "Can I get your name for the order?",
      chinese: "请问订单姓名是什么？",
      scenario: "电话订单或柜台自取订单需要记录顾客姓名时使用。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_039-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_039-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I get your name for the order, please?"
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
          term: "get your",
          chinese: "重点词组",
          pronunciation: "get your",
          note: "这句话里的工作关键词。",
          example: "Can I get your name for the order?"
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 40,
      english: "Can you repeat your phone number?",
      chinese: "您可以再说一遍电话号码吗？",
      scenario: "没有听清电话号码时请求顾客重复，避免记录错误。",
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
        "customer_service"
      ],
      active: true,
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
      active: true,
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
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 43,
      english: "Let me read the order back to you.",
      chinese: "我给您把订单复述一遍。",
      scenario: "电话订单结束前完整复述，减少听错或漏项。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_043-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_043-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Let me read the order back to you."
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
          term: "Let me",
          chinese: "重点词组",
          pronunciation: "Let me",
          note: "这句话里的工作关键词。",
          example: "Let me read the order back to you."
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 44,
      english: "The total before tax is twenty-four ninety-nine.",
      chinese: "税前总额是24.99美元。",
      scenario: "需要区分税前小计和含税总额时使用。",
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
        "customer_service"
      ],
      active: true,
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
      active: true,
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
      active: true,
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
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 48,
      english: "The order is still being prepared.",
      chinese: "订单还在准备中。",
      scenario: "顾客或司机提前到店时，如实说明订单仍在制作。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_048-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_048-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "The order is still being prepared."
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
          term: "order still",
          chinese: "重点词组",
          pronunciation: "order still",
          note: "这句话里的工作关键词。",
          example: "The order is still being prepared."
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
      active: true,
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
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 51,
      english: "The driver hasn't arrived yet.",
      chinese: "司机还没有到。",
      scenario: "向顾客或平台说明餐品已准备但司机未到。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 52,
      english: "Please contact the delivery platform for driver updates.",
      chinese: "关于司机进度，请联系外卖平台。",
      scenario: "门店无法控制司机分配或位置时，礼貌引导顾客联系平台，但不要推卸餐品问题。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 53,
      english: "One of my items is missing from my order.",
      chinese: "我的订单里少了一样东西。",
      scenario: "顾客发现订单中少了一样餐品时，直接向员工说明问题。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "小费和收据",
      sequence: 54,
      english: "Let me check the receipt and packing record.",
      chinese: "我核对一下小票和打包记录。",
      scenario: "收到少餐投诉时，先核对订单和打包记录，不要直接说门店绝对没有出错。",
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
        "customer_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Let me check the receipt and packing record."
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
          english: "Let me check the receipt and packing record.",
          chinese: "我核对一下小票和打包记录。"
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
      id: "front_counter_055",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 55,
      english: "If the platform approves it, we can remake the missing item.",
      chinese: "如果平台批准，我们可以重做缺少的餐品。",
      scenario: "平台订单需要授权重做时，说明流程，不作未经批准的承诺。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 56,
      english: "It looks like there may be an issue with the delivery platform.",
      chinese: "看起来可能是外卖平台方面出现了问题。",
      scenario: "只有确认门店端无异常后，才中性说明可能涉及平台，避免直接推卸责任。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 57,
      english: "I'm sorry about that. Let me fix it for you.",
      chinese: "很抱歉。我来帮您处理。",
      scenario: "顾客报告错误、缺少餐品或其他问题时，员工先道歉并开始核查。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "小费和收据",
      sequence: 58,
      english: "Can you show me the receipt?",
      chinese: "您能给我看一下小票吗？",
      scenario: "处理错餐、少餐或退款问题前，核对小票或电子订单。",
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
        "customer_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you show me the receipt?",
        "Can you please show me the receipt?"
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
          english: "Can you show me the receipt?",
          chinese: "您能给我看一下小票吗？"
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 59,
      english: "Was this order placed in store or online?",
      chinese: "这个订单是在店里下的，还是网上下的？",
      scenario: "不同渠道的修改、退款和重做权限不同，因此先确认订单来源。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_059-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_059-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Was this order placed in store or online, please?"
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
          term: "Was order",
          chinese: "重点词组",
          pronunciation: "Was order",
          note: "这句话里的工作关键词。",
          example: "Was this order placed in store or online?"
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 60,
      english: "We can remake it right away.",
      chinese: "我们可以马上给您重做。",
      scenario: "确认门店出错且员工有权限时，向顾客提出立即重做。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 61,
      english: "Let me check whether we can issue a refund.",
      chinese: "我确认一下我们是否可以办理退款。",
      scenario: "普通员工不要直接承诺退款，应先确认订单渠道、权限和公司政策。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 62,
      english: "If approved, the refund may take a few business days.",
      chinese: "如果退款获批，可能需要几个工作日到账。",
      scenario: "退款获批后说明银行处理可能需要时间，避免承诺当天到账。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 63,
      english: "I understand the issue.",
      chinese: "我明白您遇到的问题了。",
      scenario: "听完顾客说明后，简短确认理解，再进入解决步骤；不能只说这句就结束。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 64,
      english: "Let me check with my manager.",
      chinese: "我去和经理确认一下。",
      scenario: "退款、严重投诉、权限不足或特殊例外需要经理处理时使用。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_064-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_064-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "员工要说",
      variants: [
        "Let me check with my manager."
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
          term: "Let me",
          chinese: "重点词组",
          pronunciation: "Let me",
          note: "这句话里的工作关键词。",
          example: "Let me check with my manager."
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 65,
      english: "The food is too spicy.",
      chinese: "这个食物太辣了。",
      scenario: "顾客认为辣度无法接受时，员工先了解所点口味和门店处理政策。",
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
        "customer_service"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 66,
      english: "My order is missing fries.",
      chinese: "我的订单里少了薯条。",
      scenario: "顾客指出缺少薯条时，员工核对后补做，不应先与顾客争辩。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_066-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_066-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "My order is missing fries."
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
          term: "My order",
          chinese: "重点词组",
          pronunciation: "My order",
          note: "这句话里的工作关键词。",
          example: "My order is missing fries."
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 67,
      english: "This isn't what I ordered.",
      chinese: "这不是我点的。",
      scenario: "顾客拿到错误餐品时，员工先道歉、核对订单并说明解决办法。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_067-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_067-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "customer_service"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "This one isn't what I ordered.",
        "This item isn't what I ordered."
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
          term: "isn't what",
          chinese: "重点词组",
          pronunciation: "isn't what",
          note: "这句话里的工作关键词。",
          example: "This isn't what I ordered."
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
      scenarioTitle: "欢迎和开始点餐",
      sequence: 68,
      english: "Hi! Are you ready to order?",
      chinese: "您好！现在可以点餐了吗？",
      scenario: "顾客第一次来店里，不熟悉套餐内容，员工引导完成点餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_068-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_068-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Hi! Are you ready to order, please?"
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
          term: "Hi ready",
          chinese: "重点词组",
          pronunciation: "Hi ready",
          note: "这句话里的工作关键词。",
          example: "Hi! Are you ready to order?"
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
      scenarioTitle: "欢迎和开始点餐",
      sequence: 69,
      english: "It comes with fries and a drink.",
      chinese: "套餐包括薯条和一杯饮料。",
      scenario: "顾客第一次来店里，不熟悉套餐内容，员工引导完成点餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_069-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_069-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "It comes with fries and a drink."
      ],
      recommendedResponses: [
        "Yes, please.",
        "No, thank you.",
        "Can I have it on the side?"
      ],
      dialogue: [
        {
          speakerRole: "Staff",
          speakerRoleZh: "前台员工",
          english: "It comes with fries and a drink.",
          chinese: "套餐包括薯条和一杯饮料。"
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
          term: "comes with",
          chinese: "重点词组",
          pronunciation: "comes with",
          note: "这句话里的工作关键词。",
          example: "It comes with fries and a drink."
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
      scenarioTitle: "欢迎和开始点餐",
      sequence: 70,
      english: "Okay, I'll take the combo.",
      chinese: "好的，我要套餐。",
      scenario: "顾客第一次来店里，不熟悉套餐内容，员工引导完成点餐。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_070-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_070-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Okay, I'll take the combo."
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
          term: "Okay, I'll",
          chinese: "重点词组",
          pronunciation: "Okay, I'll",
          note: "这句话里的工作关键词。",
          example: "Okay, I'll take the combo."
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 71,
      english: "Can I get two chicken sandwiches and one order of fries?",
      chinese: "我可以要两个鸡肉三明治和一份薯条吗？",
      scenario: "餐厅较吵，员工没有听清顾客的餐品或数量，请顾客重复并确认。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 72,
      english: "Two chicken sandwiches and one order of fries.",
      chinese: "两个鸡肉三明治和一份薯条。",
      scenario: "餐厅较吵，员工没有听清顾客的餐品或数量，请顾客重复并确认。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 73,
      english: "Got it. Two chicken sandwiches and one order of fries.",
      chinese: "好的，两个鸡肉三明治和一份薯条。",
      scenario: "餐厅较吵，员工没有听清顾客的餐品或数量，请顾客重复并确认。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 74,
      english: "Sure. Would you like to add anything else?",
      chinese: "可以。您还想加别的东西吗？",
      scenario: "顾客要求去掉某种配料并增加另一种配料，员工确认可能产生的加价。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 75,
      english: "Can I add extra cheese?",
      chinese: "我可以加一份额外芝士吗？",
      scenario: "顾客要求去掉某种配料并增加另一种配料，员工确认可能产生的加价。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 76,
      english: "Yes, there is an extra charge for extra cheese.",
      chinese: "可以，额外芝士需要另外收费。",
      scenario: "顾客要求去掉某种配料并增加另一种配料，员工确认可能产生的加价。",
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
      id: "front_counter_077",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 77,
      english: "I'd like the grilled chicken sandwich.",
      chinese: "我想要烤鸡三明治。",
      scenario: "顾客点的餐品已经售罄，员工道歉并提供替代选择。",
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
      id: "front_counter_078",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 78,
      english: "The crispy chicken sandwich is the closest option.",
      chinese: "脆皮鸡肉三明治是最接近的替代选择。",
      scenario: "顾客点的餐品已经售罄，员工道歉并提供替代选择。",
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
      id: "front_counter_079",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_tips_receipts",
      scenarioTitle: "小费和收据",
      sequence: 79,
      english: "I'm sorry. Can I see your receipt or order confirmation?",
      chinese: "很抱歉。可以让我看一下您的小票或订单确认吗？",
      scenario: "顾客发现拿到的餐品与订单不符，员工核对小票并安排纠正。",
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
      id: "front_counter_080",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 80,
      english: "I ordered the chicken sandwich, not the burger.",
      chinese: "我点的是鸡肉三明治，不是这个汉堡。",
      scenario: "顾客发现拿到的餐品与订单不符，员工核对小票并安排纠正。",
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
      id: "front_counter_081",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 81,
      english: "You're right. I'm sorry about the mix-up. We'll remake the correct item now.",
      chinese: "您说得对，很抱歉弄错了。我们现在给您重做正确的餐品。",
      scenario: "顾客发现拿到的餐品与订单不符，员工核对小票并安排纠正。",
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
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 83,
      english: "This is much spicier than I expected.",
      chinese: "这个比我想象的辣得多。",
      scenario: "顾客无法接受餐品辣度，员工确认订单并提供可执行的替代方案。",
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
      id: "front_counter_084",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 84,
      english: "I'm sorry. Would you like a milder replacement?",
      chinese: "很抱歉。您想换成辣度较低的吗？",
      scenario: "顾客无法接受餐品辣度，员工确认订单并提供可执行的替代方案。",
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
      id: "front_counter_085",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 85,
      english: "BBQ and plain are both mild options.",
      chinese: "烧烤味和原味都属于比较温和的选择。",
      scenario: "顾客无法接受餐品辣度，员工确认订单并提供可执行的替代方案。",
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
      scenarioTitle: "刷卡、现金和付款失败",
      sequence: 91,
      english: "It looks like the card didn't go through.",
      chinese: "看起来这张卡没有支付成功。",
      scenario: "顾客刷卡未通过，员工用中性语言说明并提供再次尝试或其他付款方式。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_091-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_091-slow.mp3",
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
      id: "front_counter_092",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "刷卡、现金和付款失败",
      sequence: 92,
      english: "Can I try the card again?",
      chinese: "我可以再试一次这张卡吗？",
      scenario: "顾客刷卡未通过，员工用中性语言说明并提供再次尝试或其他付款方式。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_092-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_092-slow.mp3",
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
      id: "front_counter_093",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "刷卡、现金和付款失败",
      sequence: 93,
      english: "Yes. Please wait for the screen, then tap or insert the card again.",
      chinese: "可以。请等屏幕提示后，再次感应或插入银行卡。",
      scenario: "顾客刷卡未通过，员工用中性语言说明并提供再次尝试或其他付款方式。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_093-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_093-slow.mp3",
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
      id: "front_counter_094",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "刷卡、现金和付款失败",
      sequence: 94,
      english: "Your total is twelve forty-five.",
      chinese: "总共是12.45美元。",
      scenario: "顾客现金付款，员工确认收到金额并报出找零。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "前台员工要说",
      audioNormal: "/audio/en-US/front_counter_094-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_094-slow.mp3",
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
      id: "front_counter_095",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "刷卡、现金和付款失败",
      sequence: 95,
      english: "Here's twenty dollars.",
      chinese: "给您二十美元。",
      scenario: "顾客现金付款，员工确认收到金额并报出找零。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_095-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_095-slow.mp3",
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
      id: "front_counter_096",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "刷卡、现金和付款失败",
      sequence: 96,
      english: "Out of twenty. Your change is seven fifty-five.",
      chinese: "收您二十美元，找您7.55美元。",
      scenario: "顾客现金付款，员工确认收到金额并报出找零。",
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
      id: "front_counter_097",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "刷卡、现金和付款失败",
      sequence: 97,
      english: "Can I get a receipt, please?",
      chinese: "可以给我一张小票吗？",
      scenario: "顾客现金付款，员工确认收到金额并报出找零。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/front_counter_097-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_097-slow.mp3",
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
      id: "front_counter_098",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_general",
      scenarioTitle: "欢迎、点餐、套餐、收银、小费、收据和找零。",
      sequence: 98,
      english: "I made a mistake on this order.",
      chinese: "这份订单我做错了。",
      scenario: "员工发现自己犯错后及时报告。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/front_counter_098-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_098-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "workplace",
        "supervisor",
        "communication",
        "employee"
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
      id: "front_counter_099",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_tips_receipts",
      scenarioTitle: "小费和收据",
      sequence: 99,
      english: "Signing confirms receipt, not necessarily agreement.",
      chinese: "签字表示已收到文件，不一定代表你同意内容。",
      scenario: "部分公司文件签字仅表示收到，具体以公司政策和文件文字为准。",
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
        "employee"
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
      id: "front_counter_100",
      moduleId: "front_counter",
      moduleTitle: "前台、点餐、收银和小费",
      scenarioId: "front_counter_payment_card_cash",
      scenarioTitle: "刷卡、现金和付款失败",
      sequence: 100,
      english: "Hi, let me know if you need any help.",
      chinese: "您好，需要帮助的话请告诉我。",
      scenario: "顾客进入商店时，店员礼貌问候并提供帮助。",
      importance: "前台表达直接影响顾客体验、订单准确和收银速度。",
      role: "Staff",
      roleZh: "店员要说",
      audioNormal: "/audio/en-US/front_counter_100-normal.mp3",
      audioSlow: "/audio/en-US/front_counter_100-slow.mp3",
      isFree: false,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "front_counter",
        "retail",
        "cashier",
        "customer_service",
        "safety"
      ],
      active: false,
      speakerRole: "Staff",
      speakerRoleZh: "店员要说",
      difficulty: "Level 2",
      variants: [],
      recommendedResponses: [],
      dialogue: [],
      vocabularyNotes: [],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_001",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_missing_wrong_order",
      scenarioTitle: "少餐、错餐和重做",
      sequence: 1,
      english: "One of my items is missing from the bag.",
      chinese: "我的袋子里少了一样东西。",
      scenario: "顾客发现外带袋里少了餐品，员工核对订单并补做。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "One of my items is missing from the bag."
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
          english: "One of my items is missing from the bag.",
          chinese: "我的袋子里少了一样东西。"
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
          example: "One of my items is missing from the bag."
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
      scenarioTitle: "少餐、错餐和重做",
      sequence: 2,
      english: "I'm sorry. Which item is missing?",
      chinese: "很抱歉。少的是哪一样？",
      scenario: "顾客发现外带袋里少了餐品，员工核对订单并补做。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "I'm sorry. Which item is missing, please?"
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
          english: "I'm sorry. Which item is missing?",
          chinese: "很抱歉。少的是哪一样？"
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
          term: "I'm sorry",
          chinese: "重点词组",
          pronunciation: "I'm sorry",
          note: "这句话里的工作关键词。",
          example: "I'm sorry. Which item is missing?"
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
      scenarioTitle: "少餐、错餐和重做",
      sequence: 3,
      english: "The fries are missing.",
      chinese: "薯条没有装进去。",
      scenario: "顾客发现外带袋里少了餐品，员工核对订单并补做。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Please the fries are missing."
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
          chinese: "重点词组",
          pronunciation: "fries missing",
          note: "这句话里的工作关键词。",
          example: "The fries are missing."
        }
      ],
      listenRepeatCount: 3,
      speakRepeatCount: 5
    },
    {
      id: "delivery_complaints_004",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_refund_manager",
      scenarioTitle: "退款和经理处理",
      sequence: 4,
      english: "I'd like a refund for this order.",
      chinese: "我想退掉这份订单并退款。",
      scenario: "顾客提出退款，普通员工不越权承诺，先确认订单渠道和经理权限。",
      importance: "外卖和投诉要先确认事实，再找经理或补救，不能乱承诺。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/delivery_complaints_004-normal.mp3",
      audioSlow: "/audio/en-US/delivery_complaints_004-slow.mp3",
      isFree: false,
      safetyLevel: "caution",
      reviewRequired: true,
      tags: [
        "restaurant",
        "delivery_complaints",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "I'd like a refund for this order."
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
      scenarioTitle: "外卖司机取餐",
      sequence: 5,
      english: "Was this order placed in store or through an app?",
      chinese: "这个订单是在店里下的，还是通过外卖平台下的？",
      scenario: "顾客提出退款，普通员工不越权承诺，先确认订单渠道和经理权限。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "Was this order placed in store or through an app, please?"
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
          english: "Was this order placed in store or through an app?",
          chinese: "这个订单是在店里下的，还是通过外卖平台下的？"
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
          term: "Was order",
          chinese: "重点词组",
          pronunciation: "Was order",
          note: "这句话里的工作关键词。",
          example: "Was this order placed in store or through an app?"
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
      scenarioTitle: "外卖司机取餐",
      sequence: 6,
      english: "I ordered through a delivery app.",
      chinese: "我是通过外卖平台下单的。",
      scenario: "顾客提出退款，普通员工不越权承诺，先确认订单渠道和经理权限。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "I ordered through a delivery app."
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
          term: "ordered through",
          chinese: "重点词组",
          pronunciation: "ordered through",
          note: "这句话里的工作关键词。",
          example: "I ordered through a delivery app."
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
      scenarioTitle: "外卖司机取餐",
      sequence: 7,
      english: "App refunds go through the platform. Let me check first.",
      chinese: "App订单退款要通过平台。我先查一下。",
      scenario: "顾客提出退款，普通员工不越权承诺，先确认订单渠道和经理权限。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "外卖司机取餐",
      sequence: 8,
      english: "I'm picking up order 742 for Jordan.",
      chinese: "我是来取Jordan的742号订单。",
      scenario: "外卖司机到店取餐，员工核对平台和订单号，并要求在应用中确认取餐。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Driver",
      speakerRoleZh: "外卖司机可能会说",
      variants: [
        "I'm picking up order 742 for Jordan."
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
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
          term: "I'm picking",
          chinese: "重点词组",
          pronunciation: "I'm picking",
          note: "这句话里的工作关键词。",
          example: "I'm picking up order 742 for Jordan."
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
      scenarioTitle: "外卖司机取餐",
      sequence: 9,
      english: "Which delivery platform are you with?",
      chinese: "您是哪个外卖平台的司机？",
      scenario: "外卖司机到店取餐，员工核对平台和订单号，并要求在应用中确认取餐。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "外卖司机取餐",
      sequence: 10,
      english: "I'm with DoorDash.",
      chinese: "我是DoorDash的司机。",
      scenario: "外卖司机到店取餐，员工核对平台和订单号，并要求在应用中确认取餐。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Driver",
      speakerRoleZh: "外卖司机可能会说",
      variants: [
        "Please i'm with DoorDash."
      ],
      recommendedResponses: [
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
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
          term: "I'm with",
          chinese: "重点词组",
          pronunciation: "I'm with",
          note: "这句话里的工作关键词。",
          example: "I'm with DoorDash."
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
      scenarioTitle: "外卖司机取餐",
      sequence: 11,
      english: "The order is ready. Please confirm pickup in the app.",
      chinese: "订单好了。请在App里确认取餐。",
      scenario: "交付外卖订单时，按照门店和平台规定核对订单号并完成取餐确认。如门店政策要求，可礼貌请司机出示应用中的确认页面。",
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
        "front_and_back"
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
        "Okay, I’ll confirm it.",
        "Got it.",
        "Thank you."
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
          term: "confirm pickup",
          chinese: "确认取餐",
          pronunciation: "confirm pickup",
          note: "在App里标记已经取走订单。",
          example: "Please confirm pickup."
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
      scenarioTitle: "外卖司机取餐",
      sequence: 12,
      english: "Thank you for calling. Are you placing an order for pickup?",
      chinese: "感谢来电。您是要下一个自取订单吗？",
      scenario: "顾客打电话下单，员工记录姓名、餐品和预计取餐时间。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "外卖司机取餐",
      sequence: 13,
      english: "Yes, I'd like to place an order for pickup.",
      chinese: "是的，我想下一个自取订单。",
      scenario: "顾客打电话下单，员工记录姓名、餐品和预计取餐时间。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Yes, I'd like to place an order for pickup."
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
          term: "Yes, I'd",
          chinese: "重点词组",
          pronunciation: "Yes, I'd",
          note: "这句话里的工作关键词。",
          example: "Yes, I'd like to place an order for pickup."
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
      scenarioTitle: "外卖司机取餐",
      sequence: 14,
      english: "Can I get your name and phone number for the order?",
      chinese: "请告诉我订单姓名和电话号码。",
      scenario: "顾客打电话下单，员工记录姓名、餐品和预计取餐时间。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "外卖司机取餐",
      sequence: 15,
      english: "The name is Linda. I’ll pick it up at six thirty.",
      chinese: "名字是Linda。我六点半来取。",
      scenario: "顾客打电话下单，员工记录姓名、餐品和预计取餐时间。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "外卖司机取餐",
      sequence: 16,
      english: "I need food for about twenty people.",
      chinese: "我需要大约二十个人的餐。",
      scenario: "顾客需要团体餐，员工确认人数、取餐时间和是否需要预付款或经理协助。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "外卖司机取餐",
      sequence: 17,
      english: "When do you need the order?",
      chinese: "您什么时候需要这份订单？",
      scenario: "顾客需要团体餐，员工确认人数、取餐时间和是否需要预付款或经理协助。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "When do you need the order, please?"
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
          term: "When need",
          chinese: "重点词组",
          pronunciation: "When need",
          note: "这句话里的工作关键词。",
          example: "When do you need the order?"
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
      scenarioTitle: "外卖司机取餐",
      sequence: 18,
      english: "Tomorrow at noon.",
      chinese: "明天中午十二点。",
      scenario: "顾客需要团体餐，员工确认人数、取餐时间和是否需要预付款或经理协助。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Please tomorrow at noon."
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
          term: "Tomorrow at",
          chinese: "重点词组",
          pronunciation: "Tomorrow at",
          note: "这句话里的工作关键词。",
          example: "Tomorrow at noon."
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
      scenarioTitle: "外卖司机取餐",
      sequence: 19,
      english: "Can we sit anywhere?",
      chinese: "我们可以随便坐吗？",
      scenario: "顾客点完餐后询问座位和取餐方式，员工指引堂食流程。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Can we sit anywhere, please?"
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
          term: "sit anywhere",
          chinese: "重点词组",
          pronunciation: "sit anywhere",
          note: "这句话里的工作关键词。",
          example: "Can we sit anywhere?"
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
      scenarioTitle: "外卖司机取餐",
      sequence: 20,
      english: "Choose any open table. Please take this table number.",
      chinese: "可以选任何空桌。请拿这个桌号牌。",
      scenario: "顾客点完餐后询问座位和取餐方式，员工指引堂食流程。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "外卖司机取餐",
      sequence: 21,
      english: "Will you bring the food to the table?",
      chinese: "你们会把餐送到桌上吗？",
      scenario: "顾客点完餐后询问座位和取餐方式，员工指引堂食流程。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "外卖司机取餐",
      sequence: 22,
      english: "Yes. We’ll bring the food to your table.",
      chinese: "可以。我们会把餐送到你的桌子。",
      scenario: "顾客点完餐后询问座位和取餐方式，员工指引堂食流程。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "外卖司机取餐",
      sequence: 23,
      english: "The delivery tablet is down, and this order didn't print.",
      chinese: "外卖平板出故障了，这份订单没有打印出来。",
      scenario: "外卖平台平板、POS或厨房打印机出现故障时，前后台使用人工复述和书面记录确认订单，避免漏单或重复制作。",
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
        "pos_outage"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Staff",
      speakerRoleZh: "前台员工要说",
      variants: [
        "The delivery tablet is down, and this order didn't print."
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
          term: "delivery tablet",
          chinese: "重点词组",
          pronunciation: "delivery tablet",
          note: "这句话里的工作关键词。",
          example: "The delivery tablet is down, and this order didn't print."
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
      scenarioTitle: "外卖司机取餐",
      sequence: 24,
      english: "Read the order to me, and I'll write it down.",
      chinese: "把订单念给我听，我把它写下来。",
      scenario: "外卖平台平板、POS或厨房打印机出现故障时，前后台使用人工复述和书面记录确认订单，避免漏单或重复制作。",
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
        "pos_outage"
      ],
      active: true,
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
      scenarioTitle: "外卖司机取餐",
      sequence: 25,
      english: "Order 318 has two chicken sandwiches, one fries, and two drinks.",
      chinese: "318号订单有两个鸡肉三明治、一份薯条和两杯饮料。",
      scenario: "外卖平台平板、POS或厨房打印机出现故障时，前后台使用人工复述和书面记录确认订单，避免漏单或重复制作。",
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
        "pos_outage"
      ],
      active: true,
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
      scenarioTitle: "外卖司机取餐",
      sequence: 26,
      english: "Got it. I'll repeat the order back before we start.",
      chinese: "知道了。开始制作前，我会把订单复述一遍。",
      scenario: "外卖平台平板、POS或厨房打印机出现故障时，前后台使用人工复述和书面记录确认订单，避免漏单或重复制作。",
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
        "pos_outage"
      ],
      active: true,
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
      active: true,
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 28,
      english: "Thank you for calling. How may I help you today?",
      chinese: "感谢您的来电。今天有什么可以帮您？",
      scenario: "客服人员接起电话并主动询问需求。",
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
        "safety"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "Thank you for calling. How may I help you today, please?"
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
          english: "Thank you for calling. How may I help you today?",
          chinese: "感谢您的来电。今天有什么可以帮您？"
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
          example: "Thank you for calling. How may I help you today?"
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 29,
      english: "I need help with my order.",
      chinese: "我的订单需要帮助。",
      scenario: "客户说明来电与订单有关。",
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
        "safety"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      variants: [
        "I need to get help with my order.",
        "I have to get help with my order."
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
          chinese: "重点词组",
          pronunciation: "need help",
          note: "这句话里的工作关键词。",
          example: "I need help with my order."
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 30,
      english: "May I have your order number?",
      chinese: "可以告诉我您的订单号码吗？",
      scenario: "客服人员查询订单前收集必要信息。",
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
        "safety"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "May I have your order number, please?"
      ],
      recommendedResponses: [
        "Let me check your order.",
        "I’m sorry about that.",
        "Let me get my manager."
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
          term: "May have",
          chinese: "重点词组",
          pronunciation: "May have",
          note: "这句话里的工作关键词。",
          example: "May I have your order number?"
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 31,
      english: "I can't find my order number.",
      chinese: "我找不到订单号码。",
      scenario: "客户无法提供订单号码，需要使用其他核验方式。",
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
        "safety"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      variants: [
        "I can't find my order number."
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
          term: "can't find",
          chinese: "重点词组",
          pronunciation: "can't find",
          note: "这句话里的工作关键词。",
          example: "I can't find my order number."
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 32,
      english: "Before accessing the account, I need to verify your identity.",
      chinese: "查看账户前，我需要核验您的身份。",
      scenario: "客服人员访问个人账户前完成规定的身份核验。",
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
        "safety"
      ],
      active: true,
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 33,
      english: "Why do you need to verify my identity?",
      chinese: "为什么需要核验我的身份？",
      scenario: "客户询问身份核验的目的。",
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
        "safety"
      ],
      active: true,
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 34,
      english: "Please do not give me your full password.",
      chinese: "请不要告诉我完整密码。",
      scenario: "避免客服人员或客户泄露完整登录凭据。",
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
        "safety"
      ],
      active: true,
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 35,
      english: "My spouse usually handles this account.",
      chinese: "这个账户通常由我的配偶处理。",
      scenario: "客户代表其他人联系，需要确认授权。",
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
        "safety"
      ],
      active: true,
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 36,
      english: "I cannot disclose account information without proper authorization.",
      chinese: "没有适当授权，我不能透露账户信息。",
      scenario: "客服人员保护账户和个人信息。",
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
        "safety"
      ],
      active: true,
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 37,
      english: "Please tell me what happened in your own words.",
      chinese: "请用您自己的话告诉我发生了什么。",
      scenario: "客服人员让客户完整说明问题。",
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
        "safety"
      ],
      active: true,
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 38,
      english: "Let me make sure I understand correctly.",
      chinese: "我确认一下是否理解正确。",
      scenario: "客服人员通过复述减少误解。",
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
        "safety"
      ],
      active: true,
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 39,
      english: "Yes, that's correct.",
      chinese: "是的，您理解得对。",
      scenario: "客户确认客服复述准确。",
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
        "safety"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "客户可能会说",
      variants: [
        "Please yes, that's correct."
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
          term: "Yes, that's",
          chinese: "重点词组",
          pronunciation: "Yes, that's",
          note: "这句话里的工作关键词。",
          example: "Yes, that's correct."
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 40,
      english: "May I place you on a brief hold while I check?",
      chinese: "我查询时可以请您稍等一下吗？",
      scenario: "客服人员查询资料前征得客户同意。",
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
        "safety"
      ],
      active: true,
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 41,
      english: "Thank you for holding.",
      chinese: "感谢您的等待。",
      scenario: "客服人员返回通话时感谢客户。",
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
        "safety"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Agent",
      speakerRoleZh: "客服人员要说",
      variants: [
        "Please thank you for holding."
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
          term: "Thank for",
          chinese: "重点词组",
          pronunciation: "Thank for",
          note: "这句话里的工作关键词。",
          example: "Thank you for holding."
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 42,
      english: "I'm sorry about the delay. Let me give you an update.",
      chinese: "很抱歉耽误了，我向您说明最新进展。",
      scenario: "客服人员道歉并提供具体进度。",
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
        "safety"
      ],
      active: true,
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 43,
      english: "Would you prefer a callback rather than staying on hold?",
      chinese: "您是否希望我们回电，而不是继续等待？",
      scenario: "问题处理时间较长时提供回电方案。",
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
        "safety"
      ],
      active: true,
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 44,
      english: "What is the best number and time for the callback?",
      chinese: "回电使用哪个号码、什么时间最合适？",
      scenario: "客服人员核对回电号码和时间。",
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
        "safety"
      ],
      active: true,
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 45,
      english: "Let me read the callback number back to you.",
      chinese: "我复述一下回电号码，请您确认。",
      scenario: "避免把账户信息或回电拨向错误号码。",
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
        "safety"
      ],
      active: true,
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 46,
      english: "Where is my order?",
      chinese: "我的订单在哪里？",
      scenario: "客户询问货物配送进度。",
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
        "safety"
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
      id: "delivery_complaints_047",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单和查找订单",
      sequence: 47,
      english: "The latest tracking update shows a carrier delay.",
      chinese: "最新物流信息显示承运商发生延误。",
      scenario: "客服人员依据系统信息说明延误，不擅自保证到达时间。",
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
        "safety"
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 48,
      english: "When will it arrive?",
      chinese: "什么时候能到？",
      scenario: "客户要求具体配送时间。",
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
        "safety"
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
      id: "delivery_complaints_049",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单和查找订单",
      sequence: 49,
      english: "The current estimate is Friday, but I cannot guarantee it.",
      chinese: "目前预计星期五送达，但我不能保证。",
      scenario: "客服人员区分预计时间与保证时间。",
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
        "safety"
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 50,
      english: "The tracking says delivered, but I did not receive it.",
      chinese: "物流显示已送达，但我没有收到。",
      scenario: "客户报告疑似错投或包裹丢失。",
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
        "safety"
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 51,
      english: "Please check the delivery photo and any safe locations first.",
      chinese: "请先查看配送照片，并检查可能的安全放置位置。",
      scenario: "客服引导客户进行安全、合理的初步核查。",
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
        "safety"
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 52,
      english: "The delivery photo is not my house.",
      chinese: "配送照片不是我家。",
      scenario: "客户提供错投线索。",
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
        "safety"
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 53,
      english: "I will document this as a possible wrong delivery.",
      chinese: "我会把这记录为可能的错误投递。",
      scenario: "客服人员启动流程但不提前承诺赔偿。",
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
        "safety"
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 54,
      english: "Can you send a replacement now?",
      chinese: "可以现在补发吗？",
      scenario: "客户要求立即补发。",
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
        "safety"
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 55,
      english: "Let me check whether the order qualifies for replacement or refund.",
      chinese: "我核对一下订单是否符合补发或退款条件。",
      scenario: "客服人员按政策确认权限和资格。",
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
        "safety"
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
      id: "delivery_complaints_056",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单和查找订单",
      sequence: 56,
      english: "I received the wrong item.",
      chinese: "我收到了错误的商品。",
      scenario: "客户收到错误商品。",
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
        "safety"
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 57,
      english: "Please do not share another customer's full label information.",
      chinese: "请不要提供另一位客户标签上的完整信息。",
      scenario: "错误包裹可能暴露其他客户的个人资料。",
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
        "safety"
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 58,
      english: "The item arrived damaged.",
      chinese: "商品送到时已经破损。",
      scenario: "客户报告商品或包装损坏。",
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
        "safety"
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
      id: "delivery_complaints_059",
      moduleId: "delivery_complaints",
      moduleTitle: "外卖、电话、投诉和顾客问题",
      scenarioId: "delivery_complaints_phone_orders",
      scenarioTitle: "电话订单和查找订单",
      sequence: 59,
      english: "Do not use the item if it is leaking, overheating, or otherwise unsafe.",
      chinese: "如果商品漏液、过热或存在其他危险，请不要使用。",
      scenario: "对于可能引发火灾、化学或电气风险的商品，优先安全处理。",
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
        "safety"
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
      scenarioTitle: "电话订单和查找订单",
      sequence: 60,
      english: "The battery is getting hot.",
      chinese: "电池正在变热。",
      scenario: "客户报告锂电池或电子设备异常发热。",
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
        "safety"
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
      isFree: true,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "emergency_safety",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 2,
      english: "Are you still open?",
      chinese: "你们还营业吗？",
      scenario: "顾客在临近关店时进门，员工礼貌说明剩余营业时间、可售餐品和堂食限制。到关店时间后，应按照门店安全流程处理入口，同时确保店内人员能够安全离开，不得阻挡紧急出口。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "Are you still open, please?"
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
          english: "Are you still open?",
          chinese: "你们还营业吗？"
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
          term: "still open",
          chinese: "重点词组",
          pronunciation: "still open",
          note: "这句话里的工作关键词。",
          example: "Are you still open?"
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
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 3,
      english: "Yes, we close in ten minutes. Some items are sold out.",
      chinese: "是的，我们十分钟后关门。有些东西卖完了。",
      scenario: "顾客在临近关店时进门，员工礼貌说明剩余营业时间、可售餐品和堂食限制。到关店时间后，应按照门店安全流程处理入口，同时确保店内人员能够安全离开，不得阻挡紧急出口。",
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
        "front_and_back"
      ],
      active: true,
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
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 4,
      english: "We still have sandwiches and fries. It has to be to go.",
      chinese: "我们还有三明治和薯条。只能外带。",
      scenario: "顾客在临近关店时进门，员工礼貌说明剩余营业时间、可售餐品和堂食限制。到关店时间后，应按照门店安全流程处理入口，同时确保店内人员能够安全离开，不得阻挡紧急出口。",
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
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 2",
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
          term: "has to be",
          chinese: "必须是",
          pronunciation: "has to be",
          note: "表示没有其他选择。",
          example: "It has to be to go."
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
      active: true,
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
      active: true,
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
      active: true,
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
      active: true,
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
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 9,
      english: "How soon do you need this done?",
      chinese: "这项工作需要多快完成？",
      scenario: "员工确认任务的截止时间和紧急程度。",
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
        "employee"
      ],
      active: true,
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
      isFree: true,
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
      active: true,
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
      isFree: true,
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
      active: true,
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
      isFree: true,
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
      active: true,
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
      active: true,
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
      isFree: true,
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
      active: true,
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
      isFree: true,
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
      active: true,
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
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 16,
      english: "I need to leave early today.",
      chinese: "我今天需要提前离开。",
      scenario: "员工因个人原因或紧急情况申请提前离开。",
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
        "employee"
      ],
      active: true,
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
      active: true,
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
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 18,
      english: "The emergency exit is blocked.",
      chinese: "紧急出口被挡住了。",
      scenario: "发现安全通道被堵。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The emergency exit is blocked."
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
          chinese: "重点词组",
          pronunciation: "emergency exit",
          note: "这句话里的工作关键词。",
          example: "The emergency exit is blocked."
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
      active: true,
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
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 20,
      english: "The power went out.",
      chinese: "停电了。",
      scenario: "店里突然断电。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please the power went out."
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
          term: "power went",
          chinese: "重点词组",
          pronunciation: "power went",
          note: "这句话里的工作关键词。",
          example: "The power went out."
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
      active: true,
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
      scenarioTitle: "热物、刀具和厨房通道安全",
      sequence: 22,
      english: "I cut my finger.",
      chinese: "我切到手指了。",
      scenario: "刀伤时报告。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please i cut my finger."
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
          english: "I cut my finger.",
          chinese: "我切到手指了。"
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
          term: "cut my",
          chinese: "重点词组",
          pronunciation: "cut my",
          note: "这句话里的工作关键词。",
          example: "I cut my finger."
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
      scenarioTitle: "热物、刀具和厨房通道安全",
      sequence: 23,
      english: "I burned my hand.",
      chinese: "我烫到手了。",
      scenario: "热锅、热油或烤盘造成烫伤。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please i burned my hand."
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
          term: "burned my",
          chinese: "重点词组",
          pronunciation: "burned my",
          note: "这句话里的工作关键词。",
          example: "I burned my hand."
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
      scenarioTitle: "受伤、急救和事故报告",
      sequence: 24,
      english: "We need the first aid kit.",
      chinese: "我们需要急救包。",
      scenario: "有人受伤需要简单处理。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "We need the first aid kit."
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
          english: "We need the first aid kit.",
          chinese: "我们需要急救包。"
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
          term: "need first",
          chinese: "重点词组",
          pronunciation: "need first",
          note: "这句话里的工作关键词。",
          example: "We need the first aid kit."
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
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 25,
      english: "Call the manager right away.",
      chinese: "马上叫经理。",
      scenario: "紧急情况需要负责人处理。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Call the manager right away."
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
          english: "Call the manager right away.",
          chinese: "马上叫经理。"
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
          term: "Call manager",
          chinese: "重点词组",
          pronunciation: "Call manager",
          note: "这句话里的工作关键词。",
          example: "Call the manager right away."
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
      active: true,
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
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 27,
      english: "There is a gas smell.",
      chinese: "有煤气味。",
      scenario: "闻到疑似燃气味时。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "There is a gas smell."
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
          term: "There gas",
          chinese: "重点词组",
          pronunciation: "There gas",
          note: "这句话里的工作关键词。",
          example: "There is a gas smell."
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
      active: true,
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
      scenarioTitle: "受伤、急救和事故报告",
      sequence: 29,
      english: "The slicer guard is missing.",
      chinese: "切片机防护罩不见了。",
      scenario: "切片机安全部件缺失。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The slicer guard is missing."
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
          english: "The slicer guard is missing.",
          chinese: "切片机防护罩不见了。"
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
          term: "slicer guard",
          chinese: "重点词组",
          pronunciation: "slicer guard",
          note: "这句话里的工作关键词。",
          example: "The slicer guard is missing."
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
      scenarioTitle: "热物、刀具和厨房通道安全",
      sequence: 30,
      english: "The knife is loose.",
      chinese: "这把刀松了。",
      scenario: "刀柄或刀片不牢固。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please the knife is loose."
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
          english: "The knife is loose.",
          chinese: "这把刀松了。"
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
          term: "knife loose",
          chinese: "重点词组",
          pronunciation: "knife loose",
          note: "这句话里的工作关键词。",
          example: "The knife is loose."
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
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 31,
      english: "The shelf is unstable.",
      chinese: "这个架子不稳。",
      scenario: "货架或置物架可能倒。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please the shelf is unstable."
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
          english: "The shelf is unstable.",
          chinese: "这个架子不稳。"
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
          term: "shelf unstable",
          chinese: "重点词组",
          pronunciation: "shelf unstable",
          note: "这句话里的工作关键词。",
          example: "The shelf is unstable."
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
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 32,
      english: "The box is too heavy for me.",
      chinese: "这个箱子对我来说太重了。",
      scenario: "搬重物前说明无法安全搬。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 33,
      english: "Can someone help me lift this?",
      chinese: "有人可以帮我一起抬这个吗？",
      scenario: "需要双人搬运。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can someone help me lift this, please?"
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
          english: "Can someone help me lift this?",
          chinese: "有人可以帮我一起抬这个吗？"
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
          term: "someone help",
          chinese: "重点词组",
          pronunciation: "someone help",
          note: "这句话里的工作关键词。",
          example: "Can someone help me lift this?"
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
      active: true,
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
      active: true,
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
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 36,
      english: "The ladder is not steady.",
      chinese: "梯子不稳。",
      scenario: "使用梯子前发现不安全。",
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
      id: "emergency_safety_037",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 37,
      english: "Do not stand on the bucket.",
      chinese: "不要站在桶上。",
      scenario: "看到不安全取高处物品。",
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
      id: "emergency_safety_038",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 38,
      english: "The fire alarm is going off.",
      chinese: "火警警报响了。",
      scenario: "店内警报响起。",
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
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 44,
      english: "This food may be contaminated.",
      chinese: "这个食物可能被污染了。",
      scenario: "食品接触脏表面或化学品。",
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
      id: "emergency_safety_045",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 45,
      english: "A customer says they have an allergy.",
      chinese: "顾客说他们有过敏。",
      scenario: "过敏需求需要认真处理。",
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
      id: "emergency_safety_046",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_fire_gas_emergency",
      scenarioTitle: "火警、燃气和紧急服务",
      sequence: 46,
      english: "Stop serving that item for now.",
      chinese: "先暂停供应那个产品。",
      scenario: "食品或安全问题未查清前。",
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
      scenarioTitle: "受伤、急救和事故报告",
      sequence: 48,
      english: "I need to fill out an incident report.",
      chinese: "我需要填写事故报告。",
      scenario: "工作中受伤或事故后。",
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
      id: "emergency_safety_049",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_injury_first_aid",
      scenarioTitle: "受伤、急救和事故报告",
      sequence: 49,
      english: "Should we call emergency services?",
      chinese: "我们要叫急救或报警吗？",
      scenario: "严重紧急情况时。",
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
      id: "emergency_safety_050",
      moduleId: "emergency_safety",
      moduleTitle: "安全、受伤和紧急情况",
      scenarioId: "emergency_safety_injury_first_aid",
      scenarioTitle: "受伤、急救和事故报告",
      sequence: 50,
      english: "Do not move the injured person.",
      chinese: "不要移动受伤的人。",
      scenario: "不确定伤情时等待负责人或急救。",
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
      id: "daily_life_001",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_bank_paycheck",
      scenarioTitle: "银行、工资和支票",
      sequence: 1,
      english: "It's still not going through. I'll use a different card.",
      chinese: "还是没有成功，我换一张卡。",
      scenario: "顾客刷卡未通过，员工用中性语言说明并提供再次尝试或其他付款方式。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Customer",
      roleZh: "顾客可能会说",
      audioNormal: "/audio/en-US/daily_life_001-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_001-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "scenario_practice",
        "dialogue",
        "front_and_back"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Customer",
      speakerRoleZh: "顾客可能会说",
      variants: [
        "It's still not going through. I'll use a different card."
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
          english: "It's still not going through. I'll use a different card.",
          chinese: "还是没有成功，我换一张卡。"
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
          term: "It's still",
          chinese: "重点词组",
          pronunciation: "It's still",
          note: "这句话里的工作关键词。",
          example: "It's still not going through. I'll use a different card."
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
      scenarioTitle: "租房、地址和水电费",
      sequence: 2,
      english: "The written instructions are different from what I was told.",
      chinese: "书面说明和我听到的指令不一样。",
      scenario: "员工发现口头指令和书面流程不一致。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The written instructions are different from what I was told."
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
          english: "The written instructions are different from what I was told.",
          chinese: "书面说明和我听到的指令不一样。"
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
          term: "written instructions",
          chinese: "重点词组",
          pronunciation: "written instructions",
          note: "这句话里的工作关键词。",
          example: "The written instructions are different from what I was told."
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
      scenarioTitle: "租房、地址和水电费",
      sequence: 3,
      english: "What should I do differently next time?",
      chinese: "下次我应该怎样改进？",
      scenario: "员工主动询问如何避免重复错误。",
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
        "employee"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "What exactly should I do differently next time?",
        "What should I do differently next time, please?"
      ],
      recommendedResponses: [
        "Yes, I’ll show you.",
        "Sure. Watch me first.",
        "Ask me again if it’s not clear."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "What should I do differently next time?",
          chinese: "下次我应该怎样改进？"
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
          term: "What should",
          chinese: "重点词组",
          pronunciation: "What should",
          note: "这句话里的工作关键词。",
          example: "What should I do differently next time?"
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
      scenarioTitle: "银行、工资和支票",
      sequence: 4,
      english: "The current setup feels unsafe.",
      chinese: "目前这个工作安排让我觉得不安全。",
      scenario: "员工发现工作安排可能存在安全风险。",
      importance: "这是安全相关表达，需要先确认再行动。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_004-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_004-slow.mp3",
      isFree: true,
      safetyLevel: "safety",
      reviewRequired: true,
      tags: [
        "restaurant",
        "daily_life",
        "workplace",
        "supervisor",
        "communication",
        "employee"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The current setup feels unsafe."
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
          term: "current setup",
          chinese: "重点词组",
          pronunciation: "current setup",
          note: "这句话里的工作关键词。",
          example: "The current setup feels unsafe."
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
      scenarioTitle: "公交和通勤",
      sequence: 5,
      english: "Where can I load my transit card?",
      chinese: "我在哪里可以给公交卡充值？",
      scenario: "通勤需要充值公交卡。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Where exactly can I load my transit card?",
        "Where can I load my transit card, please?"
      ],
      recommendedResponses: [
        "Yes, I’ll show you.",
        "Sure. Watch me first.",
        "Ask me again if it’s not clear."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Where can I load my transit card?",
          chinese: "我在哪里可以给公交卡充值？"
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
          term: "Where load",
          chinese: "重点词组",
          pronunciation: "Where load",
          note: "这句话里的工作关键词。",
          example: "Where can I load my transit card?"
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
      scenarioTitle: "公交和通勤",
      sequence: 6,
      english: "How much is the monthly pass?",
      chinese: "月票多少钱？",
      scenario: "询问公交或地铁月票。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "How much is the monthly pass, please?"
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
          term: "How much",
          chinese: "重点词组",
          pronunciation: "How much",
          note: "这句话里的工作关键词。",
          example: "How much is the monthly pass?"
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
      scenarioTitle: "银行、工资和支票",
      sequence: 7,
      english: "I get paid by direct deposit.",
      chinese: "我的工资是直接存进银行账户。",
      scenario: "说明工资到账方式。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_007-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_007-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I get paid by direct deposit."
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
          term: "get paid",
          chinese: "重点词组",
          pronunciation: "get paid",
          note: "这句话里的工作关键词。",
          example: "I get paid by direct deposit."
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
      scenarioTitle: "银行、工资和支票",
      sequence: 8,
      english: "I need to deposit this check.",
      chinese: "我需要存这张支票。",
      scenario: "去银行存工资支票。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_008-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_008-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement"
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
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
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
          chinese: "重点词组",
          pronunciation: "need deposit",
          note: "这句话里的工作关键词。",
          example: "I need to deposit this check."
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
      scenarioTitle: "手机、网络和流量",
      sequence: 9,
      english: "My phone has no service.",
      chinese: "我的手机没有信号。",
      scenario: "手机网络或套餐出问题。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "My phone has no service."
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
          english: "My phone has no service.",
          chinese: "我的手机没有信号。"
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
          term: "My phone",
          chinese: "重点词组",
          pronunciation: "My phone",
          note: "这句话里的工作关键词。",
          example: "My phone has no service."
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
      scenarioTitle: "手机、网络和流量",
      sequence: 10,
      english: "I need more data on my plan.",
      chinese: "我的套餐需要更多流量。",
      scenario: "办理手机网络。",
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
        "supplement"
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
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
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
          term: "need more",
          chinese: "重点词组",
          pronunciation: "need more",
          note: "这句话里的工作关键词。",
          example: "I need more data on my plan."
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
      scenarioTitle: "租房、地址和水电费",
      sequence: 11,
      english: "Is heat included in the rent?",
      chinese: "暖气费包含在房租里吗？",
      scenario: "租房询问费用。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Is this heat included in the rent?"
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
          english: "Is heat included in the rent?",
          chinese: "暖气费包含在房租里吗？"
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
          term: "heat included",
          chinese: "重点词组",
          pronunciation: "heat included",
          note: "这句话里的工作关键词。",
          example: "Is heat included in the rent?"
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
      scenarioTitle: "药店、医生和诊所",
      sequence: 12,
      english: "I need to pick up a prescription.",
      chinese: "我需要取处方药。",
      scenario: "去药店拿药。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "药店、医生和诊所",
      sequence: 13,
      english: "Can I book an appointment?",
      chinese: "我可以预约吗？",
      scenario: "预约医生、诊所或服务。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I book an appointment, please?"
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
          english: "Can I book an appointment?",
          chinese: "我可以预约吗？"
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
          term: "book appointment",
          chinese: "重点词组",
          pronunciation: "book appointment",
          note: "这句话里的工作关键词。",
          example: "Can I book an appointment?"
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
      scenarioTitle: "药店、医生和诊所",
      sequence: 14,
      english: "I need a doctor’s note for work.",
      chinese: "我需要给工作的医生证明。",
      scenario: "请病假后公司要求证明。",
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
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "药店、医生和诊所",
      sequence: 15,
      english: "Where is the nearest walk-in clinic?",
      chinese: "最近的免预约诊所在哪里？",
      scenario: "生病但没有家庭医生。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Where exactly is the nearest walk-in clinic?",
        "Where is the nearest walk-in clinic, please?"
      ],
      recommendedResponses: [
        "Yes, I’ll show you.",
        "Sure. Watch me first.",
        "Ask me again if it’s not clear."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Where is the nearest walk-in clinic?",
          chinese: "最近的免预约诊所在哪里？"
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
          term: "Where nearest",
          chinese: "重点词组",
          pronunciation: "Where nearest",
          note: "这句话里的工作关键词。",
          example: "Where is the nearest walk-in clinic?"
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
      scenarioTitle: "公交、银行、手机、租房、药店、看医生。",
      sequence: 16,
      english: "Can you speak more slowly? English is my second language.",
      chinese: "你可以说慢一点吗？英语不是我的母语。",
      scenario: "生活场景中请求对方放慢速度。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 3",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you speak more slowly? English is my second language.",
        "Can you please speak more slowly? English is my second language."
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
          english: "Can you speak more slowly? English is my second language.",
          chinese: "你可以说慢一点吗？英语不是我的母语。"
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
          term: "speak more",
          chinese: "重点词组",
          pronunciation: "speak more",
          note: "这句话里的工作关键词。",
          example: "Can you speak more slowly? English is my second language."
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
      scenarioTitle: "租房、地址和水电费",
      sequence: 17,
      english: "I am looking for a room to rent.",
      chinese: "我在找一个房间出租。",
      scenario: "租房看房时。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I am looking for a room to rent."
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
          english: "I am looking for a room to rent.",
          chinese: "我在找一个房间出租。"
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
          term: "am looking",
          chinese: "重点词组",
          pronunciation: "am looking",
          note: "这句话里的工作关键词。",
          example: "I am looking for a room to rent."
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
      scenarioTitle: "租房、地址和水电费",
      sequence: 18,
      english: "When is the rent due?",
      chinese: "房租什么时候到期要交？",
      scenario: "确认交租日期。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "When is the rent due, please?"
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
          english: "When is the rent due?",
          chinese: "房租什么时候到期要交？"
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
          term: "When rent",
          chinese: "重点词组",
          pronunciation: "When rent",
          note: "这句话里的工作关键词。",
          example: "When is the rent due?"
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
      scenarioTitle: "公交、银行、手机、租房、药店、看医生。",
      sequence: 19,
      english: "Can I pay by e-transfer?",
      chinese: "我可以用电子转账付款吗？",
      scenario: "加拿大常见付款方式。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I pay by e-transfer, please?"
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
          term: "pay by",
          chinese: "重点词组",
          pronunciation: "pay by",
          note: "这句话里的工作关键词。",
          example: "Can I pay by e-transfer?"
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
      scenarioTitle: "银行、工资和支票",
      sequence: 20,
      english: "I need to change my address.",
      chinese: "我需要更改我的地址。",
      scenario: "银行、手机、工作资料更新地址。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_020-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_020-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement"
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
        "Card, please.",
        "Yes, please.",
        "No, thank you."
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
          term: "need change",
          chinese: "重点词组",
          pronunciation: "need change",
          note: "这句话里的工作关键词。",
          example: "I need to change my address."
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
      scenarioTitle: "表格、打印和收据",
      sequence: 21,
      english: "Can you print this form for me?",
      chinese: "你可以帮我打印这张表吗？",
      scenario: "需要纸质文件。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Could you print this form for me?",
        "Can you please print this form for me?"
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
          english: "Can you print this form for me?",
          chinese: "你可以帮我打印这张表吗？"
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
          term: "print form",
          chinese: "重点词组",
          pronunciation: "print form",
          note: "这句话里的工作关键词。",
          example: "Can you print this form for me?"
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
      scenarioTitle: "工作生活用品",
      sequence: 22,
      english: "Where can I buy work shoes?",
      chinese: "我在哪里可以买工作鞋？",
      scenario: "餐厅或工厂需要防滑鞋。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Where exactly can I buy work shoes?",
        "Where can I buy work shoes, please?"
      ],
      recommendedResponses: [
        "Yes, I’ll show you.",
        "Sure. Watch me first.",
        "Ask me again if it’s not clear."
      ],
      dialogue: [
        {
          speakerRole: "Worker",
          speakerRoleZh: "员工",
          english: "Where can I buy work shoes?",
          chinese: "我在哪里可以买工作鞋？"
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
          term: "Where buy",
          chinese: "重点词组",
          pronunciation: "Where buy",
          note: "这句话里的工作关键词。",
          example: "Where can I buy work shoes?"
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
      scenarioTitle: "工作生活用品",
      sequence: 23,
      english: "I need non-slip shoes for work.",
      chinese: "我工作需要防滑鞋。",
      scenario: "买工作鞋时说明用途。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "I need to get non-slip shoes for work.",
        "I have to get non-slip shoes for work."
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
          chinese: "重点词组",
          pronunciation: "need non-slip",
          note: "这句话里的工作关键词。",
          example: "I need non-slip shoes for work."
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
      scenarioTitle: "表格、打印和收据",
      sequence: 24,
      english: "Can I get a copy of the receipt?",
      chinese: "我可以要一份收据副本吗？",
      scenario: "报销或记录开支。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I get a copy of the receipt, please?"
      ],
      recommendedResponses: [
        "Card, please.",
        "Yes, please.",
        "No, thank you."
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
      scenarioTitle: "租房、地址和水电费",
      sequence: 25,
      english: "Can I get directions to this address?",
      chinese: "你可以告诉我去这个地址怎么走吗？",
      scenario: "去面试或上班地点时问路。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I get directions to this address, please?"
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
          english: "Can I get directions to this address?",
          chinese: "你可以告诉我去这个地址怎么走吗？"
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
          term: "get directions",
          chinese: "重点词组",
          pronunciation: "get directions",
          note: "这句话里的工作关键词。",
          example: "Can I get directions to this address?"
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
      scenarioTitle: "公交和通勤",
      sequence: 26,
      english: "How long does it take by bus?",
      chinese: "坐公交要多久？",
      scenario: "估算通勤时间。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "How long does it take by bus, please?"
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
          english: "How long does it take by bus?",
          chinese: "坐公交要多久？"
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
          term: "How long",
          chinese: "重点词组",
          pronunciation: "How long",
          note: "这句话里的工作关键词。",
          example: "How long does it take by bus?"
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
      scenarioTitle: "公交和通勤",
      sequence: 27,
      english: "Does this bus stop near the restaurant?",
      chinese: "这路公交会停在餐厅附近吗？",
      scenario: "确认公交站点。",
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
        "supplement"
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
          chinese: "重点词组",
          pronunciation: "bus stop",
          note: "这句话里的工作关键词。",
          example: "Does this bus stop near the restaurant?"
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
      scenarioTitle: "公交和通勤",
      sequence: 28,
      english: "I missed my bus.",
      chinese: "我错过公交了。",
      scenario: "可能上班迟到时说明原因。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please i missed my bus."
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
          english: "I missed my bus.",
          chinese: "我错过公交了。"
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
          term: "missed my",
          chinese: "重点词组",
          pronunciation: "missed my",
          note: "这句话里的工作关键词。",
          example: "I missed my bus."
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
      scenarioTitle: "公交和通勤",
      sequence: 29,
      english: "The bus is running late.",
      chinese: "公交晚点了。",
      scenario: "通勤延误。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "The bus is running late."
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
          english: "The bus is running late.",
          chinese: "公交晚点了。"
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
          term: "bus running",
          chinese: "重点词组",
          pronunciation: "bus running",
          note: "这句话里的工作关键词。",
          example: "The bus is running late."
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
      scenarioTitle: "银行、工资和支票",
      sequence: 30,
      english: "Can I cash this check here?",
      chinese: "我可以在这里兑现这张支票吗？",
      scenario: "拿到纸质工资支票。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_030-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_030-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I cash this check here, please?"
      ],
      recommendedResponses: [
        "Card, please.",
        "Yes, please.",
        "No, thank you."
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
          chinese: "重点词组",
          pronunciation: "cash check",
          note: "这句话里的工作关键词。",
          example: "Can I cash this check here?"
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
      scenarioTitle: "银行、工资和支票",
      sequence: 31,
      english: "What ID do I need?",
      chinese: "我需要什么身份证件？",
      scenario: "银行、药店、租房或预约时。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_031-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_031-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement"
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
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
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
          term: "What ID",
          chinese: "重点词组",
          pronunciation: "What ID",
          note: "这句话里的工作关键词。",
          example: "What ID do I need?"
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
      scenarioTitle: "银行、工资和支票",
      sequence: 32,
      english: "I need to update my direct deposit information.",
      chinese: "我需要更新我的工资入账信息。",
      scenario: "换银行账户后。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_032-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_032-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement"
      ],
      active: true,
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
      scenarioTitle: "银行、工资和支票",
      sequence: 33,
      english: "My debit card is not working.",
      chinese: "我的借记卡不能用了。",
      scenario: "付款或银行问题。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_033-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_033-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "My debit card is not working."
      ],
      recommendedResponses: [
        "Card, please.",
        "Yes, please.",
        "No, thank you."
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
          term: "My debit",
          chinese: "重点词组",
          pronunciation: "My debit",
          note: "这句话里的工作关键词。",
          example: "My debit card is not working."
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
      scenarioTitle: "银行、工资和支票",
      sequence: 34,
      english: "Can I set up online banking?",
      chinese: "我可以开通网上银行吗？",
      scenario: "办理银行服务。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_034-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_034-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I set up online banking, please?"
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
          english: "Can I set up online banking?",
          chinese: "我可以开通网上银行吗？"
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
          term: "set up",
          chinese: "重点词组",
          pronunciation: "set up",
          note: "这句话里的工作关键词。",
          example: "Can I set up online banking?"
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
      scenarioTitle: "手机、网络和流量",
      sequence: 35,
      english: "My phone bill is too high.",
      chinese: "我的手机账单太高了。",
      scenario: "咨询手机套餐费用。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "My phone bill is too high."
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
          term: "My phone",
          chinese: "重点词组",
          pronunciation: "My phone",
          note: "这句话里的工作关键词。",
          example: "My phone bill is too high."
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
      scenarioTitle: "手机、网络和流量",
      sequence: 36,
      english: "Can I change to a cheaper plan?",
      chinese: "我可以换成便宜一点的套餐吗？",
      scenario: "降低手机套餐费用。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I change to a cheaper plan, please?"
      ],
      recommendedResponses: [
        "Card, please.",
        "Yes, please.",
        "No, thank you."
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
          term: "change cheaper",
          chinese: "重点词组",
          pronunciation: "change cheaper",
          note: "这句话里的工作关键词。",
          example: "Can I change to a cheaper plan?"
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
      scenarioTitle: "手机、网络和流量",
      sequence: 37,
      english: "I need a SIM card.",
      chinese: "我需要一张手机卡。",
      scenario: "办理手机服务。",
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
        "supplement"
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
        "Card, please.",
        "Yes, please.",
        "No, thank you."
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
          term: "need SIM",
          chinese: "重点词组",
          pronunciation: "need SIM",
          note: "这句话里的工作关键词。",
          example: "I need a SIM card."
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
      scenarioTitle: "手机、网络和流量",
      sequence: 38,
      english: "My internet is not working.",
      chinese: "我的网络不能用了。",
      scenario: "家里网络或手机网络问题。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "My internet is not working."
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
          term: "My internet",
          chinese: "重点词组",
          pronunciation: "My internet",
          note: "这句话里的工作关键词。",
          example: "My internet is not working."
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
      scenarioTitle: "公交和通勤",
      sequence: 39,
      english: "Can you reset my password?",
      chinese: "你可以帮我重置密码吗？",
      scenario: "账号登录问题。",
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
        "supplement"
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
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
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
          term: "reset my",
          chinese: "重点词组",
          pronunciation: "reset my",
          note: "这句话里的工作关键词。",
          example: "Can you reset my password?"
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
      scenarioTitle: "租房、地址和水电费",
      sequence: 40,
      english: "Is laundry included?",
      chinese: "洗衣设施包含吗？",
      scenario: "租房询问配套。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Is this laundry included?"
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
          chinese: "重点词组",
          pronunciation: "laundry included",
          note: "这句话里的工作关键词。",
          example: "Is laundry included?"
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
      scenarioTitle: "租房、地址和水电费",
      sequence: 41,
      english: "Is parking included?",
      chinese: "停车位包含吗？",
      scenario: "租房或看房时询问。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Is this parking included?"
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
          chinese: "重点词组",
          pronunciation: "parking included",
          note: "这句话里的工作关键词。",
          example: "Is parking included?"
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
      scenarioTitle: "租房、地址和水电费",
      sequence: 42,
      english: "Can I see the room today?",
      chinese: "我今天可以看房间吗？",
      scenario: "联系房东看房。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I see the room today, please?"
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
          term: "see room",
          chinese: "重点词组",
          pronunciation: "see room",
          note: "这句话里的工作关键词。",
          example: "Can I see the room today?"
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
      scenarioTitle: "银行、工资和支票",
      sequence: 43,
      english: "How much is the deposit?",
      chinese: "押金是多少？",
      scenario: "租房确认费用。",
      importance: "这些生活表达帮助学习者解决通勤、工资、租房和看病等基本问题。",
      role: "Worker",
      roleZh: "员工要说",
      audioNormal: "/audio/en-US/daily_life_043-normal.mp3",
      audioSlow: "/audio/en-US/daily_life_043-slow.mp3",
      isFree: true,
      safetyLevel: "normal",
      reviewRequired: false,
      tags: [
        "restaurant",
        "daily_life",
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "How much is the deposit, please?"
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
          term: "How much",
          chinese: "重点词组",
          pronunciation: "How much",
          note: "这句话里的工作关键词。",
          example: "How much is the deposit?"
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
      scenarioTitle: "租房、地址和水电费",
      sequence: 44,
      english: "When can I move in?",
      chinese: "我什么时候可以搬进去？",
      scenario: "租房确认入住时间。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "When can I move in, please?"
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
          chinese: "重点词组",
          pronunciation: "When move",
          note: "这句话里的工作关键词。",
          example: "When can I move in?"
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
      scenarioTitle: "药店、医生和诊所",
      sequence: 45,
      english: "I need something for a headache.",
      chinese: "我需要治头痛的药。",
      scenario: "去药店买非处方药。",
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
        "supplement"
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
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
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
          chinese: "重点词组",
          pronunciation: "need something",
          note: "这句话里的工作关键词。",
          example: "I need something for a headache."
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
      scenarioTitle: "药店、医生和诊所",
      sequence: 46,
      english: "I need something for a cough.",
      chinese: "我需要治咳嗽的药。",
      scenario: "去药店买药。",
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
        "supplement"
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
        "Got it.",
        "Let me confirm first.",
        "Thanks for checking."
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
          chinese: "重点词组",
          pronunciation: "need something",
          note: "这句话里的工作关键词。",
          example: "I need something for a cough."
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
      scenarioTitle: "药店、医生和诊所",
      sequence: 47,
      english: "Can I talk to the pharmacist?",
      chinese: "我可以和药剂师说一下吗？",
      scenario: "药店咨询用药。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Can I talk to the pharmacist, please?"
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
          term: "talk pharmacist",
          chinese: "重点词组",
          pronunciation: "talk pharmacist",
          note: "这句话里的工作关键词。",
          example: "Can I talk to the pharmacist?"
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
      scenarioTitle: "药店、医生和诊所",
      sequence: 48,
      english: "How often should I take this?",
      chinese: "这个多久吃一次？",
      scenario: "询问服药频率。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "How often should I take this, please?"
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
          term: "How often",
          chinese: "重点词组",
          pronunciation: "How often",
          note: "这句话里的工作关键词。",
          example: "How often should I take this?"
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
      scenarioTitle: "药店、医生和诊所",
      sequence: 49,
      english: "Should I take it with food?",
      chinese: "这个要和食物一起吃吗？",
      scenario: "询问服药方式。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 2",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Should I take it with food, please?"
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
          term: "Should take",
          chinese: "重点词组",
          pronunciation: "Should take",
          note: "这句话里的工作关键词。",
          example: "Should I take it with food?"
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
      scenarioTitle: "药店、医生和诊所",
      sequence: 50,
      english: "I have a fever.",
      chinese: "我发烧了。",
      scenario: "看医生或请病假。",
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
        "supplement"
      ],
      active: true,
      difficulty: "Level 1",
      speakerRole: "Worker",
      speakerRoleZh: "员工要说",
      variants: [
        "Please i have a fever."
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
          term: "have fever",
          chinese: "重点词组",
          pronunciation: "have fever",
          note: "这句话里的工作关键词。",
          example: "I have a fever."
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
      scenarioTitle: "药店、医生和诊所",
      sequence: 51,
      english: "I have stomach pain.",
      chinese: "我肚子痛。",
      scenario: "看医生或说明身体不舒服。",
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
      id: "daily_life_052",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_pharmacy_doctor",
      scenarioTitle: "药店、医生和诊所",
      sequence: 52,
      english: "I feel dizzy.",
      chinese: "我头晕。",
      scenario: "工作中或看医生时。",
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
      id: "daily_life_053",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_work_life_basics",
      scenarioTitle: "工作生活用品",
      sequence: 53,
      english: "I need to reschedule my appointment.",
      chinese: "我需要改预约时间。",
      scenario: "无法按原时间赴约。",
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
      id: "daily_life_054",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_work_life_basics",
      scenarioTitle: "工作生活用品",
      sequence: 54,
      english: "Can you give me a confirmation number?",
      chinese: "你可以给我一个确认号码吗？",
      scenario: "预约、订单或服务确认。",
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
      id: "daily_life_055",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_forms_receipts",
      scenarioTitle: "表格、打印和收据",
      sequence: 55,
      english: "I need help filling out this form.",
      chinese: "我需要帮忙填写这张表。",
      scenario: "表格看不懂。",
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
      id: "daily_life_056",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_forms_receipts",
      scenarioTitle: "表格、打印和收据",
      sequence: 56,
      english: "Can you email me a copy?",
      chinese: "你可以发一份副本到我邮箱吗？",
      scenario: "需要电子副本。",
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
      id: "daily_life_057",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_bank_paycheck",
      scenarioTitle: "银行、工资和支票",
      sequence: 57,
      english: "I do not understand this letter.",
      chinese: "我看不懂这封信。",
      scenario: "收到政府、银行或房东信件。",
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
      id: "daily_life_058",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_general",
      scenarioTitle: "公交、银行、手机、租房、药店、看医生。",
      sequence: 58,
      english: "Who should I contact about this?",
      chinese: "这件事我应该联系谁？",
      scenario: "不知道找哪个部门。",
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
      id: "daily_life_059",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_phone_internet",
      scenarioTitle: "手机、网络和流量",
      sequence: 59,
      english: "Can I make a payment plan?",
      chinese: "我可以分期付款吗？",
      scenario: "账单或费用太高。",
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
      id: "daily_life_060",
      moduleId: "daily_life",
      moduleTitle: "北美基本生活英语",
      scenarioId: "daily_life_general",
      scenarioTitle: "公交、银行、手机、租房、药店、看医生。",
      sequence: 60,
      english: "Is there a fee for this?",
      chinese: "这个有费用吗？",
      scenario: "办理服务前确认是否收费。",
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
    }
  ]
} as const satisfies {
  id: string; title: string; subtitle: string; priceLabel: string; sourceLanguage: string; targetLanguage: string;
  modules: KitchenCourseModule[]; freeScenarioIds: string[]; stats: KitchenCourseStats; items: KitchenCourseItem[];
};

export const freeKitchenScenarioIds = new Set(kitchenSurvivalCourse.freeScenarioIds);
