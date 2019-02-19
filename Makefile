DATA-GOVERNANCE-UI-IMAGE := $(shell docker images -q data-governance-ui:latest)

stop:
	@docker-compose stop
	@docker-compose rm -f

start:
	@npm run build
ifneq ($(strip $(DATA-GOVERNANCE-UI-IMAGE)),)
	@docker rmi $(DATA-GOVERNANCE-UI-IMAGE)
endif
	@docker-compose up -d --build

logs:
	@docker-compose logs -f --tail=200
