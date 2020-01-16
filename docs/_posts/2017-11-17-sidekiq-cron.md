---
metaTitle: Amazing's blog | Ruby
date: 2017-11-17
tags:
    - Ruby
author: Amazing
location: Xi'an
summary: Sidekiq-Cron是一个基于Sidekiq的插件（Sidekiq是一个简单高效的Ruby后台处理,使用线程在同一个进程中同时处理多个作业,它不需要Rails，但会与Rails紧密集成），使用这个插件在rails中执行定时任务
---
### 谈一谈Sidekiq-Cron

#### 安装
``` bash
  gem install sidekiq 
  gem install sidekiq-cron
```
#### 新建job
``` ruby
class FirstJob < ApplicationJob
  queue_as :default
  def perform
    Article.create!(title: 'first', text: 'this is a demo')
  end
end
```

*这里写的定时任务基于active job，其余的写法请参考[sidekiq-cron文档](https://github.com/ondrejbartas/sidekiq-cron)*
#### /config中新建schedule.yml

```yaml
FirstJob:
  cron: "0 0 0 20 * *"
  class: FirstJob
```
*上面代码的意思是每个月20号执行定时任务firstjob，关于更多cron的用法，请参考[Cron Format](http://www.nncron.ru/help/EN/working/cron-format.htm)*

#### /config/initializers中新建sidekiq.rb
``` ruby
schedule_file = 'config/scheduler.yml'

if File.exist?(schedule_file) && Sidekiq.server?
  Sidekiq::Cron::Job.load_from_hash YAML.load_file(schedule_file)
end
```


#### 配置
 /config/application.rb文件中添加：
``` ruby
config.active_job.queue_adapter = :sidekiq
```

#### 启动
``` bash
redis-server & sidekiq
```

*由于redis为sidekiq提供数据存储，所以启动sidekiq前必须先启动redis,更多关于redis请参考[redis](https://github.com/antirez/redis)*
