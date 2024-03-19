---
author: Amazing Chen
pubDatetime: 2017-11-17
title: 谈一谈Sidekiq-Cron
draft: false
description: ruby中的定时任务
tags:
  - ruby
---

## 安装

```bash
  gem install sidekiq
  gem install sidekiq-cron
```

## 新建job

```ruby
class FirstJob < ApplicationJob
  queue_as :default
  def perform
    Article.create!(title: 'first', text: 'this is a demo')
  end
end
```

_这里写的定时任务基于active job，其余的写法请查看<a href="https://github.com/ondrejbartas/sidekiq-cron" target="_blank">sidekiq-cron</a>_

## /config中新建schedule.yml

```yaml
FirstJob:
  cron: "0 0 0 20 * *"
  class: FirstJob
```

_上面代码的意思是每个月20号执行定时任务firstjob，关于更多cron的用法，请查看<a href="http://www.nncron.ru/help/EN/working/cron-format.htm" target="_blank">Cron Format</a>_

## /config/initializers中新建sidekiq.rb

```ruby
schedule_file = 'config/scheduler.yml'

if File.exist?(schedule_file) && Sidekiq.server?
  Sidekiq::Cron::Job.load_from_hash YAML.load_file(schedule_file)
end
```

## 配置

/config/application.rb文件中添加：

```ruby
config.active_job.queue_adapter = :sidekiq
```

## 启动

```bash
redis-server & sidekiq
```

_由于redis为sidekiq提供数据存储，所以启动sidekiq前必须先启动redis,更多请查看<a href="https://github.com/antirez/redis" target="_blank">redis</a>_
