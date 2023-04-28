#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 这里是执行打包命令，docs:build是package.json中配置的
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 这里是填写你的github仓库地址，把git@github.com:xxx/xxx.git替换成你的仓库地址
git push -f git@github.com:old-gang/mini-program-docs.git master:gh-pages

cd -
