#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

ls ./build/auto-tools/dist
#拷贝到tools文件夹
cp ./build/auto-tools/dist  ./build/auto-docs/docs/.vuepress/dist/tools
cd ./build/auto-docs/docs/.vuepress/dist # 进入DOC
# deploy to github
echo 'auto.ankio.net' > CNAME
#mv docs/.vuepress/dist ../docs
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
