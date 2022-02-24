#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github
echo 'auto.ankio.net' > CNAME
if [ -z "$ANKIO" ]; then
  msg='deploy'
  githubUrl=git@github.com:dreamncn/AutoResource.git
else
  msg='来自github action的自动部署'
  githubUrl=https://dreamncn:${ANKIO}@github.com/dreamncn/AutoResource.git
  git config --global user.name "ankio"
  git config --global user.email "dream@dreamn.cn"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

cd -
rm -rf docs/.vuepress/dist
