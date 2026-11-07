---
title: "现货电价上涨，发电收入如何变化？"
summary: "用澳洲 NEM 的现货结算和固定价掉期，拆解电价、出力与对冲如何共同影响发电收入。"
date: "2026-11-07"
label: 栏目样稿
tags:
  - 能源市场
  - 电力对冲
---

澳大利亚国家电力市场（NEM）每五分钟调度发电并形成区域现货价格。AEMO 的公开数据可以用来观察维州各时段的价格变化。要把这条价格曲线换算成一家发电商的收入，还要看它在这些时段实际发了多少电，以及通过合约锁定了多少电价。[AEMO 市场介绍](https://www.aemo.com.au/energy-systems/electricity/national-electricity-market-nem/about-the-national-electricity-market-nem) · [AEMO 市场数据](https://www.aemo.com.au/energy-systems/electricity/national-electricity-market-nem/data-nem/data-dashboard-nem/)

## 用一笔掉期拆开收入

假设某发电商在一个结算时段发电 100 MWh，事先用固定价掉期为其中 60 MWh 锁定 90 澳元/MWh。掉期按同一区域、同一时段的现货价格结算。现货价为 80 澳元/MWh 时，现货收入为 8,000 澳元，发电商从掉期对手方收到 600 澳元，合计 8,600 澳元。[AER 关于现货与对冲市场的说明（图 2）](https://www.aer.gov.au/system/files/2024-04/Enhanced%20Wholesale%20Market%20Monitoring%20and%20Reporting%20Guideline%20-%20Issues%20paper%20for%20stakeholder%20feedback_0.pdf#page=9)

如果同一时段的现货价升至 160 澳元/MWh，且发电量仍为 100 MWh，现货收入升至 16,000 澳元，发电商向掉期对手方支付 4,200 澳元，合计 11,800 澳元。现货价每兆瓦时上涨 80 澳元，两笔结算合计增加 3,200 澳元，相当于 40 MWh 的未对冲电量乘以价格涨幅。

如果高价时段只发了 70 MWh，同一笔掉期仍按 60 MWh 结算。此时合计为 70 × 160 − 4,200 = 7,000 澳元，低于低价情形的 8,600 澳元。算例中的金额为假设值，只计算现货与掉期的合计收入。实际发电项目还要考虑网络损耗、燃料和运行成本等因素。

## 从区域价格到企业业绩

区域电价预测回答的是价格可能何时变化。分析单家企业时，还要看高价时段能发多少电、套保覆盖哪些时段、合约参考哪个区域，以及发电的边际成本。预测和企业分析可以共用一条现货价格曲线，但后者需要把价格与机组出力和合约逐时对应起来。

延伸阅读：[维州批发电价预测项目](../../projects/vic1-price-forecast/)。
