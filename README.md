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

## CI/CD 파이프라인

main 브랜치에 push하면 자동으로 배포됩니다.

1. **GitHub Actions 트리거** - main 브랜치에 push 감지
2. **Docker 이미지 빌드** - Dockerfile 기반으로 이미지 생성
3. **Docker Hub 업로드** - 빌드된 이미지를 Docker Hub에 push
4. **EC2 SSH 접속** - GitHub Actions가 EC2 서버에 접속
5. **배포 실행** - 기존 컨테이너 종료, 새 이미지 pull, 컨테이너 재시작