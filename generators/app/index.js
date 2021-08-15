// 在这个方法中, 调用父类功能实现一些功能, 如: 文件写入

const Generator = require('yeoman-generator');
module.exports = class extends Generator{
    promiting(){
        // Yeoman 在询问用户环节会调用此方法

        // 在此方法中可以调用父类的 prompt() 方法发出对用户的命令行询问

        return this.prompt({
            type:'input',
            name:'name',
            message:'Your project name',
            default:this.appname // appname 为项目生成目录名称

        })
        .then(answers=>{
            // answers => {name: 'user input value'}
            this.answers = answers
        })
    }
    writing(){
       // 把每一个文件都通过模板转换到目标路径
       const templates = [
        '.browserslistrc',
        '.editorconfig',
        '.env.development',
        '.env.production',
        '.eslintrc.js',
        '.gitignore',
        'babel.config.js',
        'package.json',
        'postcss.config.js',
        'README.md',
        'public/favicon.ico',
        'public/index.html',
        'src/App.vue',
        'src/main.js',
        'src/router.js',
        'src/assets/logo.png',
        'src/components/HelloWorld.vue',
        'src/store/actions.js',
        'src/store/getters.js',
        'src/store/index.js',
        'src/store/mutations.js',
        'src/store/state.js',
        'src/utils/request.js',
        'src/views/About.vue',
        'src/views/Home.vue'
      ]
           


      templates.forEach(item=>{
          // item=>每个文件路径
  
  
          // 拷贝模板文件,  映射到输出文件上面
          this.fs.copyTpl(
              this.templatePath(item),
              this.destinationPath(item),
              this.answers
          )

      })


    }
}