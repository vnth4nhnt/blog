---
title: Web Starter 01. Web, kiến thức cơ bản cho hacker
published: 2026-01-31
description: 'HTTP, Auth, Architecture & Security Basics'
image: ''
tags: [web]
category: 'web'
draft: true 
lang: 'vi'
---

## Client-Server model

## Domain Name System

Cơ chế phân giải và các bản ghi (A, CNAME, TXT, MX).

Reconnaissance: Kỹ thuật Subdomain Enumeration và DNS Zone Transfer.

## HTTP - Ngôn ngữ của web

Anatomy của Request/Response.

HTTP Methods & Status Codes: Dấu hiệu nhận biết hành vi của ứng dụng.

## HTTP Headers & security context

Common Headers: Hiểu về Host, User-Agent, Referer, X-Forwarded-For.

Security Headers: Thiết lập "hàng rào" bảo mật với CSP, HSTS, X-Frame-Options và SameSite Cookies.

Information Leakage: Cách Fingerprinting hệ thống thông qua Server và X-Powered-By headers.

## Identity & Access Management (authN & authZ)

Authentication: Session-based vs Token-based (JWT). Các rủi ro về Broken Authentication.

Authorization: Phân quyền ngang và dọc. Tư duy khai thác IDOR (Insecure Direct Object Reference).

Cookie Security: Các Flag quan trọng (HttpOnly, Secure, SameSite).

## Internet Security Controls

SOP & CORS: Hiểu về Same-Origin Policy và cách cấu hình sai CORS mở đường cho kẻ tấn công.

HTTPS/TLS: Tại sao mã hóa dữ liệu là bắt buộc và cơ chế Certificate hoạt động.

Defensive Layers: Vai trò của WAF (Web Application Firewall), Rate Limiting và IPS trong việc chặn đứng Pentester

## Modern Web & Infrastructure Components

Middleware: Cách Load Balancer và Reverse Proxy điều phối lưu lượng (và cách bypass IP filtering).

Architecture: Microservices và sự phức tạp của API Security.

Modern Rendering: Phân biệt SSR (Server-Side) và CSR (Client-Side) để xác định vị trí thực thi mã.

Routing: File-based Routing và rủi ro lộ lọt cấu hình hệ thống.

## Tổng kết 

