# Fig Cafe Backend

카페 '무화과'의 모바일 주문 서비스 백엔드 API 서버

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | NestJS |
| Language | TypeScript |
| Database | PostgreSQL |
| ORM | TypeORM |
| Container | Docker |
| CI/CD | GitHub Actions |
| Cloud | AWS EC2 |
| Registry | Docker Hub |

## 파이프라인

```
main 브랜치 push
       │
       ▼
┌─────────────────────────┐
│    GitHub Actions       │
│  1. Docker 이미지 빌드     │
│  2. Docker Hub 푸시      │
│  3. EC2 SSH 접속         │
│  4. 컨테이너 재시작         │
└─────────────────────────┘
       │
       ▼
   AWS EC2 배포 완료
```