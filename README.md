---
title: EthioLearn AI Platform
emoji: 🎓
colorFrom: green
colorTo: indigo
sdk: docker
app_port: 7860
pinned: false
---

# EthioLearn AI - Ethiopian National Education Platform

Official digital curriculum platform for Grades 9–12 across Ethiopia with AI tutoring, 59 curriculum textbooks, and 73 entrance examinations.

## Web Deployment (Hugging Face Spaces - 16 GB Free RAM)
This repository is configured with Docker for instant zero-cost hosting on Hugging Face Spaces:
- **RAM**: 16 GB RAM (Free CPU Basic Tier)
- **CPU**: 2 vCPUs
- **Disk**: 50 GB free container storage
- **Credit Card / Payment Required**: **Zero ($0 forever, no credit or debit card required)**
- **Public URL**: `https://<hf-username>-ethiolearn.hf.space`

## Local Development
1. `npm install`
2. `npm run dev` (starts on port 3000)

## Production Build
1. `npm run build`
2. `npm start`
