# Frontline Language Platform 总体架构 V1.1 AI 原生版

版本：V1.1
日期：2026-07-15
状态：架构基线草案

## 1. 产品定位

Frontline Language Platform 是一个面向移民、国际学生和一线员工的多语言学习平台。

平台的核心不是普通英语学习，也不是单一餐厅英语，而是帮助用户在真实生活和工作场景中：

- 听懂别人会怎么说；
- 知道自己应该怎么回答；
- 通过完整流程练习形成工作反应；
- 在网页、PWA 和未来手机 App 中持续学习；
- 通过课程购买、套餐、会员和机构账号完成商业化。

第一阶段重点是：

- 学习者母语：中文；
- 目标语言：美式英语；
- 终端：响应式网页和 PWA；
- 内容：公共基础、通用工作、一线职业课程；
- 管理：课程后台、CSV 导入、人工审核；
- 商业：免费试听、单课购买、课程包、会员；
- AI：课程辅助生成、翻译辅助、配音、口语练习、短视频素材辅助。

## 2. 核心原则

1. 课程内容必须与程序代码分离。
2. 不允许把课程句子长期硬写在 UI 组件里。
3. 学习者母语和目标语言必须独立建模。
4. 课程和可购买商品必须分开建模。
5. 公共课程只保存一份，由多个商品、职业包或学习路径复用。
6. 网页、PWA 和未来 App 共用账号、课程、进度、购买权限和媒体资源。
7. AI 必须通过内部 AI Gateway 调用，不直接绑定单一模型或供应商。
8. 安全、医疗、法律、移民、儿童、药物和工作事故内容必须人工审核。
9. 发布内容必须有版本、审核状态和审计历史。
10. 所有重大修改通过 Git 分支和 Pull Request 完成。

## 3. 用户与使用场景

### 3.1 主要用户

- 英语不好的新移民；
- 北美一线员工；
- 餐厅、工厂、仓库、清洁、物流、零售、酒店、护理等岗位员工；
- 国际学生兼职人群；
- 想训练工作口语反应的人；
- 培训机构和雇主。

### 3.2 核心场景

- 第一天上班报到；
- 听主管安排任务；
- 顾客点单或投诉；
- 同事交接班；
- 不懂时请求重复或确认；
- 机器、材料、质量、安全问题；
- 打卡、工资、排班、请假；
- 工作中受伤或紧急情况；
- 手机上一分钟学一句；
- 完整情景模拟训练。

## 4. 平台边界

### 4.1 要做

- 多母语学习目标语言；
- 多职业课程；
- 场景化句子学习；
- 类似表达、推荐回答、工作场景、关键词解释；
- 音频播放、慢速播放、重复练习；
- 学习进度、收藏、今日必学；
- 课程购买和权限；
- 内容后台和批量导入；
- AI 辅助内容生产和口语练习；
- PWA 和未来 App 共享后端。

### 4.2 第一阶段暂不做

- 完全自由 AI 聊天替代课程；
- 游戏化排行榜；
- 考试英语；
- 复杂语法系统；
- 每个职业单独建一个网站；
- 未审核的大规模机器翻译直接发布；
- 未经人工确认的安全建议。

## 5. 总体系统架构

```text
Client Apps
  ├─ Responsive Web
  ├─ PWA
  └─ Future iOS / Android

Application Layer
  ├─ Learner App
  ├─ Admin Console
  ├─ Public Marketing Pages
  └─ Internal Review Tools

API Layer
  ├─ Auth API
  ├─ Course API
  ├─ Progress API
  ├─ Commerce API
  ├─ Entitlement API
  ├─ Media API
  ├─ AI Gateway API
  └─ Admin API

Data Layer
  ├─ Relational Database
  ├─ Object Storage / CDN
  ├─ Search Index
  ├─ Queue / Job System
  └─ Analytics Events

External Services
  ├─ Payment Provider
  ├─ Email / SMS Provider
  ├─ AI Providers
  ├─ Speech / TTS Providers
  └─ Video / Media Tools
```

## 6. 推荐技术方向

最终技术栈可以后续确认，但推荐满足以下要求：

- 前端：React / Next.js 或同等级 SSR/SPA 框架；
- 样式：Tailwind CSS 或设计系统变量；
- 后端：Node.js API、Next.js Server Actions/API Routes、或独立服务；
- 数据库：PostgreSQL；
- ORM：Prisma 或 Drizzle；
- 文件存储：S3 兼容存储或托管对象存储；
- CDN：用于音频、图片、短视频；
- 支付：Stripe 为第一阶段首选；
- 登录：邮箱登录、OAuth、未来支持机构账号；
- 队列：用于 AI 生成、TTS、批量导入、视频生成；
- 部署：Vercel、Render、Fly.io、Railway、AWS 或等效平台；
- 监控：错误日志、性能监控、任务日志和审计日志。

## 7. 数据模型总览

平台的核心对象应分成 8 类：

1. 用户与组织；
2. 语言与地区；
3. 课程内容；
4. 媒体资源；
5. 学习进度；
6. 商品与购买；
7. AI 与审核；
8. 运营与分析。

## 8. 用户与组织模型

### 8.1 User

字段建议：

- `id`
- `email`
- `phone`
- `displayName`
- `nativeLanguage`
- `preferredTargetLanguage`
- `country`
- `timezone`
- `role`
- `createdAt`
- `updatedAt`

### 8.2 Organization

用于企业、学校、培训机构。

字段建议：

- `id`
- `name`
- `type`
- `country`
- `billingOwnerId`
- `createdAt`
- `updatedAt`

### 8.3 OrganizationMember

字段建议：

- `id`
- `organizationId`
- `userId`
- `role`
- `status`
- `joinedAt`

## 9. 语言模型

### 9.1 Language

字段建议：

- `code`
- `name`
- `nativeName`
- `direction`
- `enabledAsSource`
- `enabledAsTarget`
- `status`

示例：

- `zh-CN`
- `en-US`
- `es`
- `vi`
- `ar`
- `pt`
- `pa`
- `hi`
- `uk`
- `ko`
- `fr`

### 9.2 Source / Target 设计

任何课程内容都不能假设“中文学英语”是永久结构。

正确结构：

```text
sourceLanguage -> targetLanguage -> course -> module -> lesson/scenario -> sentence -> translation
```

## 10. 课程内容模型

### 10.1 Course

课程是学习内容，不等于商品。

字段建议：

- `id`
- `slug`
- `title`
- `description`
- `sourceLanguage`
- `targetLanguage`
- `industry`
- `level`
- `status`
- `version`
- `createdAt`
- `updatedAt`

### 10.2 Module

字段建议：

- `id`
- `courseId`
- `title`
- `description`
- `sequence`
- `status`

### 10.3 Lesson

用于普通句子学习。

字段建议：

- `id`
- `moduleId`
- `title`
- `learningGoal`
- `sequence`
- `status`

### 10.4 Scenario

用于完整对话流程。

字段建议：

- `id`
- `courseId`
- `moduleId`
- `title`
- `industry`
- `location`
- `learningGoal`
- `sequence`
- `status`

### 10.5 Sentence

字段建议：

- `id`
- `courseId`
- `moduleId`
- `lessonId`
- `scenarioId`
- `sequence`
- `speakerRole`
- `targetText`
- `difficulty`
- `safetyLevel`
- `reviewStatus`
- `active`

推荐 `speakerRole`：

- `Worker`
- `Staff`
- `Supervisor`
- `Customer`
- `Coworker`
- `Manager`
- `Response`

### 10.6 Translation

字段建议：

- `id`
- `sentenceId`
- `languageCode`
- `text`
- `status`
- `reviewedBy`
- `reviewedAt`

### 10.7 Variant

类似表达。

字段建议：

- `id`
- `sentenceId`
- `targetText`
- `translationText`
- `sequence`
- `status`

### 10.8 RecommendedResponse

推荐回答。

字段建议：

- `id`
- `sentenceId`
- `targetText`
- `translationText`
- `sequence`
- `status`

### 10.9 GlossaryTerm

关键词解释。

字段建议：

- `id`
- `targetLanguage`
- `term`
- `partOfSpeech`
- `meaning`
- `example`
- `sourceLanguage`
- `explanation`
- `status`

## 11. 课程层级

推荐内容层级：

```text
Industry
  -> Course
    -> Module
      -> Lesson
        -> Sentence
      -> Scenario
        -> ScenarioTurn / Sentence
```

示例行业：

- Restaurant
- Factory
- Warehouse
- Cleaning
- Retail
- Hotel
- Delivery
- Office
- Call Center
- Auto Service
- Grocery
- Maintenance
- Landscaping
- Security
- Salon
- Moving
- Childcare
- Laundry
- Pet Service
- Farm / Greenhouse
- Eldercare
- Food Processing
- Hospital Nonclinical
- School Cafeteria

## 12. 商品与销售模型

### 12.1 Product

商品是卖给用户的东西，不等于课程。

字段建议：

- `id`
- `slug`
- `name`
- `description`
- `productType`
- `price`
- `currency`
- `status`

`productType` 示例：

- `single_course`
- `course_bundle`
- `subscription`
- `institutional_plan`

### 12.2 ProductCourse

商品和课程的映射。

字段建议：

- `id`
- `productId`
- `courseId`
- `includedFrom`
- `includedUntil`

### 12.3 Purchase

字段建议：

- `id`
- `userId`
- `productId`
- `provider`
- `providerCheckoutId`
- `providerCustomerId`
- `amount`
- `currency`
- `status`
- `purchasedAt`

### 12.4 Entitlement

权限系统必须从购买记录中生成，学习页面通过权限判断是否可访问课程。

字段建议：

- `id`
- `userId`
- `organizationId`
- `courseId`
- `productId`
- `source`
- `startsAt`
- `endsAt`
- `status`

## 13. 学习进度模型

### 13.1 LearningProgress

字段建议：

- `id`
- `userId`
- `courseId`
- `moduleId`
- `lessonId`
- `scenarioId`
- `sentenceId`
- `status`
- `completedAt`
- `lastPracticedAt`
- `repeatCount`

### 13.2 Favorite

字段建议：

- `id`
- `userId`
- `sentenceId`
- `createdAt`

### 13.3 DailyPracticeItem

字段建议：

- `id`
- `userId`
- `sentenceId`
- `date`
- `status`
- `createdAt`

### 13.4 SpeakingAttempt

字段建议：

- `id`
- `userId`
- `sentenceId`
- `audioMediaId`
- `transcript`
- `score`
- `feedback`
- `provider`
- `createdAt`

## 14. 媒体模型

### 14.1 MediaAsset

字段建议：

- `id`
- `type`
- `languageCode`
- `url`
- `storageKey`
- `durationMs`
- `provider`
- `voice`
- `speed`
- `status`
- `createdAt`

`type` 示例：

- `audio_normal`
- `audio_slow`
- `recording`
- `image`
- `video`
- `subtitle`

### 14.2 SentenceMedia

字段建议：

- `id`
- `sentenceId`
- `mediaAssetId`
- `purpose`

## 15. AI 原生架构

AI 不是单独功能，而是平台生产和学习体验的一层能力。

### 15.1 AI Gateway

所有 AI 调用必须经过内部 AI Gateway。

作用：

- 统一模型供应商；
- 记录请求和结果；
- 控制成本；
- 支持重试；
- 支持审核；
- 防止 UI 直接依赖某个模型；
- 方便以后替换 OpenAI、Google、Anthropic 或本地模型。

### 15.2 AIProvider

字段建议：

- `id`
- `name`
- `type`
- `status`
- `defaultModel`
- `costPolicy`

### 15.3 AIJob

字段建议：

- `id`
- `jobType`
- `inputRef`
- `outputRef`
- `provider`
- `model`
- `status`
- `reviewRequired`
- `createdBy`
- `createdAt`
- `completedAt`

`jobType` 示例：

- `course_outline`
- `sentence_generation`
- `translation`
- `tts`
- `speech_to_text`
- `pronunciation_score`
- `video_script`
- `short_video_asset`
- `support_reply`
- `analytics_summary`

### 15.4 AI 使用边界

AI 可以辅助：

- 生成初稿；
- 翻译初稿；
- 生成类似表达；
- 生成推荐回答；
- 生成音频；
- 生成练习反馈；
- 生成短视频脚本；
- 发现课程重复和缺口。

AI 不可以直接发布：

- 工作安全建议；
- 医疗护理建议；
- 儿童照护建议；
- 法律/移民建议；
- 药品相关内容；
- 工伤和紧急情况处理内容；
- 未人工审核的付费课程核心内容。

## 16. 审核与发布流程

每条内容应有状态：

- `draft`
- `ai_translated`
- `human_reviewed`
- `safety_verified`
- `published`
- `archived`

安全等级：

- `normal`
- `caution`
- `safety`
- `emergency`

发布规则：

- `normal` 内容至少 human reviewed；
- `safety` 和 `emergency` 内容必须 safety verified；
- 发布后修改需要产生新版本；
- 旧版本保留审计记录；
- 已购买用户看到的课程版本需要可追踪。

## 17. 管理后台

第一阶段后台需要：

- 课程列表；
- 模块和场景管理；
- 句子管理；
- CSV 导入；
- 导入校验报告；
- 翻译管理；
- 类似表达和推荐回答管理；
- 关键词解释管理；
- 音频生成和绑定；
- 审核状态；
- 发布和下架；
- 版本历史；
- 商品绑定课程；
- 用户购买和权限查看。

后台不应该直接修改生产数据而不留记录。

## 18. CSV 导入规范

导入字段建议：

```text
courseId,
courseTitle,
moduleId,
moduleTitle,
scenarioId,
scenarioTitle,
sequence,
role,
roleZh,
english,
chinese,
variants,
recommendedResponses,
workScenario,
safetyLevel,
reviewRequired,
tags,
active
```

规则：

- `courseId` 必须稳定；
- `sequence` 在 scenario 内连续；
- `role` 必须来自允许列表；
- `safetyLevel` 必须来自允许列表；
- `variants` 用 `|` 分隔；
- `recommendedResponses` 用 `|` 分隔；
- `tags` 用 `|` 分隔；
- 导入前必须 dry-run；
- 导入失败不能部分写入；
- 导入成功必须生成审计报告；
- 原始 CSV 必须归档保存。

## 19. 前端学习体验

核心页面：

- 首页；
- 课程目录；
- 行业分类；
- 课程详情；
- 学习页面；
- 完整情景练习；
- 今日必学；
- 收藏；
- 进度；
- 购买页；
- 登录页；
- 账户页。

学习页面核心能力：

- 主句突出；
- 中文解释；
- 播放；
- 慢速；
- 停止；
- 下一句；
- 1 次 / 3 次 / 5 次重复；
- 连续播放；
- 我要说 / 对方会说；
- 类似表达；
- 推荐回答；
- 工作场景；
- 关键词解释；
- 收藏；
- 今日必学；
- 已完成状态。

## 20. 移动端与 PWA

移动端优先原则：

- 单手可操作；
- 底部固定播放栏；
- 大按钮但不过度占屏；
- 支持 Safari 和 Chrome；
- 安全区适配；
- 字体清晰；
- 网络慢时有加载状态；
- 音频失败时有恢复入口。

PWA 要求：

- `manifest.webmanifest`
- service worker
- 离线缓存策略
- 静态资源版本号
- 音频缓存策略
- 更新提示
- 安装图标
- 启动画面
- iOS Safari 兼容

## 21. 音频与口语练习

音频能力：

- 正常语速；
- 慢速；
- 多口音或多声音；
- 音频路径和课程内容分离；
- 音频生成状态；
- 音频文件可替换；
- CDN 缓存可失效。

录音能力：

- 浏览器麦克风权限；
- 用户录音上传；
- 自动转写；
- 和标准句比较；
- 发音反馈；
- 历史记录；
- 隐私删除。

口语评分不应只给分数，还要给可执行反馈。

## 22. 短视频与营销

短视频不是课程数据的主存储方式，而是课程内容的分发形式。

可生成：

- TikTok 脚本；
- Instagram Reels 脚本；
- YouTube Shorts 脚本；
- 字幕；
- 竖屏视频素材；
- 场景标题；
- 口播稿；
- 课程落地页链接。

短视频生成必须引用已审核课程内容，避免 AI 编造危险工作建议。

## 23. 权限与安全

权限角色：

- `learner`
- `admin`
- `content_editor`
- `reviewer`
- `safety_reviewer`
- `organization_admin`
- `support`

安全要求：

- 不在前端暴露 AI Key；
- 不在前端暴露支付密钥；
- 课程购买权限在服务端校验；
- 管理后台必须登录；
- 敏感操作有审计日志；
- 用户录音可删除；
- 遵守隐私和数据保留策略。

## 24. 部署架构

推荐环境：

- `local`
- `preview`
- `staging`
- `production`

部署要求：

- 每个 PR 有预览环境；
- main 分支部署 staging 或 production 需要明确规则；
- 数据库迁移可回滚；
- 环境变量分环境管理；
- 媒体文件不跟代码仓库绑定；
- 错误日志可追踪；
- 关键路径有健康检查。

## 25. 测试策略

需要测试：

- 单元测试；
- API 测试；
- 数据导入测试；
- 权限测试；
- 购买 webhook 测试；
- 移动端布局测试；
- PWA 缓存测试；
- 音频播放测试；
- AI Gateway mock 测试；
- 内容审核流程测试；
- 回归测试。

重点场景：

- 未购买用户不能访问付费课；
- 已购买用户能访问对应课程；
- 课程导入失败不污染数据库；
- 音频路径失效时页面不崩；
- service worker 更新后能加载新版资源；
- 登录后进度跨设备同步。

## 26. 数据迁移策略

从旧原型迁移时：

1. 先导出课程数据；
2. 清理通用模板内容；
3. 统一课程 ID、模块 ID、场景 ID、句子 ID；
4. 把课程内容放入结构化数据；
5. 把音频路径转成 media asset；
6. 把商品和课程分开；
7. 先导入一门审核课程；
8. 验证前端读取；
9. 再批量导入其他课程；
10. 保留旧原型作为备份，直到新平台稳定。

不建议把旧网页代码整体复制为新平台核心。

## 27. 开发顺序

第一阶段：

1. 完成架构文档；
2. 创建基础项目；
3. 创建数据库 schema；
4. 创建课程内容模型；
5. 创建课程导入工具；
6. 导入一门审核课程；
7. 建立移动端学习页；
8. 建立音频播放；
9. 建立登录；
10. 建立学习进度。

第二阶段：

1. 管理后台；
2. CSV 导入和审核；
3. 商品和购买；
4. 权限系统；
5. PWA；
6. 更多课程导入。

第三阶段：

1. AI Gateway；
2. TTS 自动生成；
3. 口语练习；
4. AI 课程辅助；
5. 短视频生产；
6. 机构账号。

## 28. 必须避免的设计错误

- 把中文写死在 React 组件里；
- 把课程句子写进页面代码；
- 一个职业一个网站；
- 一个语言组合一个代码分支；
- 课程购买后只存在本地存储；
- 用 localStorage 当正式学习进度；
- 用前端判断付费权限；
- 直接从页面调用 OpenAI Key；
- 没有内容审核状态；
- 没有课程版本；
- 没有媒体资源表；
- 没有商品和课程分离；
- 没有迁移脚本和回滚方案。

## 29. MVP 定义

真正可上线的 MVP 至少包括：

- 移动端课程目录；
- 至少 3 个职业方向；
- 每个方向至少 1 门审核课程；
- 登录；
- 学习进度；
- 收藏；
- 音频播放；
- 免费试看；
- 付费权限；
- 后台导入课程；
- 基础 PWA；
- 错误监控；
- 内容审核状态。

不要求 MVP 包含：

- 完整 AI 聊天；
- 高级口语评分；
- 自动生成短视频；
- 企业后台；
- 多目标语言全部开放。

## 30. 结论

Frontline Language Platform 应该被设计为一个长期可扩展的多语言、一线工作场景学习平台，而不是一次性的英语网页。

最关键的地基是：

- 内容和代码分离；
- 语言维度独立；
- 课程和商品分离；
- 用户进度服务端保存；
- 媒体和 AI 通过抽象层管理；
- 安全内容人工审核；
- 所有平台共享同一套后端数据。

只要这些地基正确，后续增加西班牙语、越南语、阿拉伯语、更多职业、手机 App、收费体系、AI 练习和短视频增长都会顺很多。
