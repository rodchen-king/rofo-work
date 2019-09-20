###### 1. 功能开发前拉取最新的develop代码
```bash
git pull origin develop
```
<br />

###### 2. 基于最新的develop代码创建新分支
```bash
# feature id存在的情况下使用featureId，不存在的时候描述功能（英文）
git checkout -b feat-****

# bug id存在的情况下使用bugId，不存在的时候描述功能（英文）
git checkout -b fix-****
```
<br />

###### 3. 代码完成自行本地环境进行测试，功能测试完成

<br />

###### 4. 拉取最新的代码，然后再次进行本地环境测试，测试完成走下一步

<br />

###### 5. 提交代码前，自己review自己当前的修改，了解自己的代码修改了多少，思考是否存在regression【相关】问题，自己review code完毕之后，加上代码详细说明，提交
```bash
git add .
git commit -m'1. 完成商品中心功能  2. 添加公共组件ShowTable 列表组件 3. 商品中心组件修改成公共组件ShowTable'
git push origin ******
```
<br />

###### 6. 寻求同事进行代码review，目前就由陈子龙进行review

<br />

###### 7. code reivew之后，在gitlab创建merge request，然后发出merge request给陈子龙

<br />

###### 8. 代码merge之后，会自动发布测试环境【当前业务运营平台开发还是初期，具体的测试环境另行告知】

