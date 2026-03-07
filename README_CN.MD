<!-- markdownlint-disable -->
<p align="center">
    <img width="800" src="https://raw.githubusercontent.com/antares-sql/antares/master/docs/gh-logo.png">
</p>
<!-- markdownlint-restore -->

# Antares SQL Client

![GitHub package.json version](https://img.shields.io/github/package-json/v/antares-sql/antares) ![GitHub](https://img.shields.io/github/license/antares-sql/antares) ![Test e2e](https://github.com/antares-sql/antares/actions/workflows/test-e2e-win.yml/badge.svg?branch=develop) ![Mastodon Follow](https://img.shields.io/mastodon/follow/%20110860460902482117?domain=https%3A%2F%2Ffosstodon.org&style=social) [![Plant a Tree](https://raw.githubusercontent.com/Fabio286/treedom-badge/master/svg/plant-a-tree.svg)](https://www.treedom.net/en/user/fabio-di-stasio/event/antares-for-the-planet)

[English](README.md) | [简体中文](README_CN.MD)

Antares 是一个基于 [Electron.js](https://github.com/electron/electron) 和 [Vue.js](https://github.com/vuejs/vue) 的 SQL 客户端，目标是成为一款面向开发者的实用工具。  
我们的目标是支持尽可能多的数据库，以及所有主流操作系统。

**目前应用仍处于开发阶段，未来会持续加入更多功能**。当前支持 MySQL/MariaDB、PostgreSQL、SQLite 和 Firebird SQL。  
不过已经具备数据库管理需要的所有核心功能，欢迎体验并向我们反馈。

## 功能介绍

- 同时连接多个数据库。
- 数据库管理（新增/编辑/删除）。
- 完整的数据表管理（含索引与外键）。
- 视图、触发器、存储过程、函数与调度器管理（新增/编辑/删除）。
- 现代且友好的标签页系统，可在工作区中同时打开多种标签页。
- 插入可生成大量随机数据。
- SQL自动补全。
- 查询历史：可检索最近 1000 条查询。
- 可保存查询、笔记或待办事项。
- 支持 SSH 隧道。
- 事务手动/自动提交。
- 支持导入/导出数据库转储文件。
- 自定义快捷键。
- 深色与浅色主题。
- 编辑器主题。

## 设计哲学

在市场上已有许多 SQL 客户端的情况下，我们仍在开发 Antares，核心目标是打造一款**永久免费（无付费高级功能）**、功能完整、尽可能社区驱动、开源跨平台的替代方案，并充分利用 JavaScript 生态。  
应用以极简与易用为导向，摒弃细碎的小按钮、层层嵌套或复杂子菜单；保持简单高效。

## 当前支持

### 数据库

- [x] MySQL/MariaDB
- [x] PostgreSQL
- [x] SQLite
- [x] Firebird SQL
- [ ] DuckDB
- [ ] SQL Server
- [ ] 更多...

### 操作系统

#### x64

- [x] Windows
- [x] Linux
- [x] MacOS

#### ARM

- [ ] Windows
- [x] Linux
- [ ] MacOS
