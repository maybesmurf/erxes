(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(2),o=t(6),a=(t(0),t(135)),s={id:"docker",title:"Docker"},l={unversionedId:"installation/docker",id:"installation/docker",isDocsHomePage:!1,title:"Docker",description:"This steps explain how to install Erxes on Docker Hub, to do it, follow the instructions.",source:"@site/docs/installation/docker.md",permalink:"/installation/docker",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/installation/docker.md",lastUpdatedBy:"Batnasan Byambasuren",lastUpdatedAt:1597910885,sidebar:"docs",previous:{title:"Ubuntu 18.04",permalink:"/installation/ubuntu"},next:{title:"Heroku",permalink:"/installation/heroku"}},c=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Install docker",id:"install-docker",children:[]},{value:"Install docker compose",id:"install-docker-compose",children:[]}]},{value:"Install erxes",id:"install-erxes",children:[{value:"Default ports",id:"default-ports",children:[]},{value:"docker-compose.yml file",id:"docker-composeyml-file",children:[]}]}],i={rightToc:c};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This steps explain how to install Erxes on Docker Hub, to do it, follow the instructions."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/u/erxes/"}),"erxes on docker hub")),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("h3",{id:"install-docker"},"Install docker"),Object(a.b)("p",null,"(Ubuntu variant)"),Object(a.b)("h4",{id:"uninstall-old-versions"},"Uninstall old versions"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"sudo apt-get remove docker docker-engine docker.io containerd runc")),Object(a.b)("h4",{id:"set-up-the-repository"},"SET UP THE REPOSITORY"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Update the apt package index:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo apt-get update\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Install packages to allow apt to use a repository over HTTPS:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo apt-get install \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg-agent \\\n    software-properties-common\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Add Docker\u2019s official GPG key:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Use the following command to set up the stable repository.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'sudo add-apt-repository \\\n   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   $(lsb_release -cs) \\\n   stable"\n')),Object(a.b)("h4",{id:"install-docker-ce"},"INSTALL DOCKER CE"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Update the ",Object(a.b)("inlineCode",{parentName:"li"},"apt")," package index.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo apt-get update\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Install the ",Object(a.b)("em",{parentName:"li"},"latest version")," of Docker CE and containerd.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo apt-get install docker-ce docker-ce-cli containerd.io\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Verify that Docker CE is installed correctly by running the ",Object(a.b)("inlineCode",{parentName:"li"},"hello-world")," image.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo docker run hello-world\n")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Optional: If you would like to use Docker as a non-root user, you should now consider adding your user to the \u201cdocker\u201d group with something like:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo usermod -aG docker your-user\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Don't forget to restart shell to take effect.")),Object(a.b)("p",null,"Official Docker documentation: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"https://docs.docker.com/install/")),Object(a.b)("h3",{id:"install-docker-compose"},"Install docker compose"),Object(a.b)("p",null,"(Linux variant)"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run this command to download the current stable release of Docker Compose:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n')),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Apply executable permissions to the binary:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo chmod +x /usr/local/bin/docker-compose\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": If the command ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose")," fails after installation, check your path. You can also create a symbolic link to ",Object(a.b)("inlineCode",{parentName:"p"},"/usr/bin")," or any other directory in your path."),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Test the installation.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ docker-compose --version\ndocker-compose version 1.26.2, build 1110ad01\n")),Object(a.b)("p",null,"Official Docker compose documentation: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"https://docs.docker.com/compose/install/")),Object(a.b)("h2",{id:"install-erxes"},"Install erxes"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Go to your desired location")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"  cd 'path_to'\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Save the ",Object(a.b)("inlineCode",{parentName:"li"},"docker-compose.yml")," file."),Object(a.b)("li",{parentName:"ol"},"Run the following command in your shell:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir elasticsearch-data && chown 1000:1000 elasticsearch-data\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"elasticsearch container migth fail to start due to permission")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Run the following to start containers")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up -d\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"To stop the containers:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose down\n")),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},"Run the following")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker exec -it erxes-api yarn initProject\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"this will create default admin account with a random password.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\n(username: admin@erxes.io , password: auto generated password)\n\n")),Object(a.b)("ol",{start:6},Object(a.b)("li",{parentName:"ol"},"Finish up by running")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker exec -it erxes-api yarn loadPermissionData\n")),Object(a.b)("ol",{start:7},Object(a.b)("li",{parentName:"ol"},"Now you may visit ",Object(a.b)("inlineCode",{parentName:"li"},"localhost:3000")," and log in with your admin account.")),Object(a.b)("h3",{id:"default-ports"},"Default ports"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Must be published to host machine network")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"erxes main frontend app will run on port 3000"),Object(a.b)("li",{parentName:"ul"},"erxes-widgets will run on port 3200"),Object(a.b)("li",{parentName:"ul"},"erxes-api will run on port 3300"),Object(a.b)("li",{parentName:"ul"},"erxes-integrations will run on port 3400")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Should not published to host machine network, only used internally")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"erxes-api (cron) will run on port 3600"),Object(a.b)("li",{parentName:"ul"},"erxes-api (worker) will run on port 3700"),Object(a.b)("li",{parentName:"ul"},"erxes-logger will run on port 3800"),Object(a.b)("li",{parentName:"ul"},"redis server will run on port 6379"),Object(a.b)("li",{parentName:"ul"},"mongodb server will run on port 27017"),Object(a.b)("li",{parentName:"ul"},"rabbitmq server will run on port 5672")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"If these ports aren't available for you, you can always change it. But don't forget to change related ENV settings.")),Object(a.b)("h3",{id:"docker-composeyml-file"},"docker-compose.yml file"),Object(a.b)("aside",{class:"notice"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Following ENVs are configured for localhost only.\nAll erxes version have to changed the latest version.\nThe latest version ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/erxes/erxes/releases"}),Object(a.b)("strong",{parentName:"a"},"release"))," source code.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'version: "2.1"\nservices:\n  erxes:\n    image: erxes/erxes:0.16.0\n    container_name: erxes\n    restart: unless-stopped\n    environment:\n      # erxes\n      REACT_APP_CDN_HOST: http://localhost:3200\n      REACT_APP_API_URL: http://localhost:3300\n      REACT_APP_API_SUBSCRIPTION_URL: ws://localhost:3300/subscriptions\n      NGINX_HOST: localhost\n    ports:\n      - "3000:80"\n    networks:\n      - erxes-net\n\n  erxes-api:\n    image: erxes/erxes-api:0.16.2\n    container_name: erxes-api\n    restart: unless-stopped\n    environment:\n      # erxes-api\n      PORT: "3300"\n      NODE_ENV: production\n      DEBUG: "erxes-api:*"\n      JWT_TOKEN_SECRET: token\n      # public urls\n      MAIN_APP_DOMAIN: http://localhost:3000\n      WIDGETS_DOMAIN: http://localhost:3200\n      INTEGRATIONS_API_DOMAIN: http://localhost:3400\n      # non public urls\n      CRONS_API_DOMAIN: http://erxes-crons:3600\n      WORKERS_API_DOMAIN: http://erxes-workers:3700\n      LOGS_API_DOMAIN: http://erxes-logger:3800\n      ENGAGES_API_DOMAIN: http://erxes-engages:3900\n      # MongoDB\n      MONGO_URL: mongodb://mongo/erxes\n      # Redis\n      REDIS_HOST: redis\n      REDIS_PORT: "6379"\n      REDIS_PASSWORD: ""\n      # RabbitMQ\n      RABBITMQ_HOST: "amqp://rabbitmq"\n      # Elasticsearch\n      ELASTICSEARCH_URL: http://elasticsearch\n    ports:\n      - "3300:3300"\n    depends_on:\n      mongo:\n        condition: service_healthy\n      rabbitmq:\n        condition: service_healthy\n      redis:\n        condition: service_healthy\n      elasticsearch:\n        condition: service_healthy\n    networks:\n      - erxes-net\n\n  erxes-crons:\n    image: erxes/erxes-api:0.16.2\n    container_name: erxes-crons\n    entrypoint: ["node", "--max_old_space_size=8192", "dist/cronJobs"]\n    restart: unless-stopped\n    environment:\n      # erxes-crons\n      PORT_CRONS: "3600"\n      NODE_ENV: production\n      PROCESS_NAME: crons\n      DEBUG: "erxes-crons:*"\n      # MongoDB\n      MONGO_URL: mongodb://mongo/erxes\n      # Redis\n      REDIS_HOST: redis\n      REDIS_PORT: "6379"\n      REDIS_PASSWORD: ""\n      # RabbitMQ\n      RABBITMQ_HOST: "amqp://rabbitmq"\n    depends_on:\n      mongo:\n        condition: service_healthy\n      rabbitmq:\n        condition: service_healthy\n      redis:\n        condition: service_healthy\n    networks:\n      - erxes-net\n\n  erxes-workers:\n    image: erxes/erxes-api:0.16.2\n    container_name: erxes-workers\n    entrypoint:\n      [\n        "node",\n        "--max_old_space_size=8192",\n        "--experimental-worker",\n        "dist/workers",\n      ]\n    restart: unless-stopped\n    environment:\n      # erxes-workers\n      PORT_WORKERS: "3700"\n      JWT_TOKEN_SECRET: token\n      NODE_ENV: production\n      DEBUG: "erxes-workers:*"\n      # MongoDB\n      MONGO_URL: mongodb://mongo/erxes\n      # Redis\n      REDIS_HOST: redis\n      REDIS_PORT: "6379"\n      REDIS_PASSWORD: ""\n      # RabbitMQ\n      RABBITMQ_HOST: "amqp://rabbitmq"\n    depends_on:\n      mongo:\n        condition: service_healthy\n      rabbitmq:\n        condition: service_healthy\n      redis:\n        condition: service_healthy\n    networks:\n      - erxes-net\n\n  erxes-widgets:\n    image: erxes/erxes-widgets:0.16.0\n    container_name: erxes-widgets\n    restart: unless-stopped\n    environment:\n      # erxes-widgets\n      PORT: "3200"\n      ROOT_URL: http://localhost:3200\n      API_URL: http://localhost:3300\n      API_SUBSCRIPTIONS_URL: ws://localhost:3300/subscriptions\n    ports:\n      - "3200:3200"\n    networks:\n      - erxes-net\n\n  erxes-logger:\n    image: erxes/erxes-logger:0.16.2\n    container_name: erxes-logger\n    restart: unless-stopped\n    environment:\n      PORT: "3800"\n      DEBUG: "erxes-logs:*"\n      # MongoDB\n      MONGO_URL: mongodb://mongo/erxes_logs\n      # RabbitMQ\n      RABBITMQ_HOST: "amqp://rabbitmq"\n    depends_on:\n      mongo:\n        condition: service_healthy\n      rabbitmq:\n        condition: service_healthy\n    networks:\n      - erxes-net\n\n  erxes-engages:\n    image: erxes/erxes-engages-email-sender:0.16.2\n    container_name: erxes-engages\n    restart: unless-stopped\n    environment:\n      PORT: "3900"\n      NODE_ENV: production\n      DEBUG: "erxes-engages:*"\n      # public urls\n      MAIN_API_DOMAIN: http://localhost:3300\n      # MongoDB\n      MONGO_URL: mongodb://mongo/erxes_engages\n      # RabbitMQ\n      RABBITMQ_HOST: "amqp://rabbitmq"\n      # Redis\n      REDIS_HOST: redis\n      REDIS_PORT: "6379"\n      REDIS_PASSWORD: ""\n    depends_on:\n      mongo:\n        condition: service_healthy\n      rabbitmq:\n        condition: service_healthy\n      redis:\n        condition: service_healthy\n    networks:\n      - erxes-net\n\n  erxes-integrations:\n    image: erxes/erxes-integrations:0.16.0\n    container_name: erxes-integrations\n    restart: unless-stopped\n    environment:\n      PORT: "3400"\n      NODE_ENV: production\n      DEBUG: "erxes-integrations:*"\n      # public urls\n      DOMAIN: http://localhost:3400\n      MAIN_APP_DOMAIN: http://localhost:3000\n      MAIN_API_DOMAIN: http://localhost:3300\n      # non public urls\n      # MongoDB\n      MONGO_URL: mongodb://mongo/erxes_integrations\n      # RabbitMQ\n      RABBITMQ_HOST: "amqp://rabbitmq"\n      # Redis\n      REDIS_HOST: redis\n      REDIS_PORT: "6379"\n      REDIS_PASSWORD: ""\n    ports:\n      - "3400:3400"\n    depends_on:\n      mongo:\n        condition: service_healthy\n      rabbitmq:\n        condition: service_healthy\n      redis:\n        condition: service_healthy\n    networks:\n      - erxes-net\n\n  redis:\n    image: redis:5.0.5\n    container_name: redis\n    restart: unless-stopped\n    command: ["redis-server", "--appendonly", "yes"]\n    healthcheck:\n      timeout: 2s\n      interval: 2s\n      retries: 200\n      test:\n        - "CMD"\n        - "bash"\n        - "-c"\n        - "exec 3<> /dev/tcp/127.0.0.1/6379 && echo PING >&3 && head -1 <&3 | grep PONG"\n    networks:\n      - erxes-net\n    # Redis data will be saved into ./redis-data folder.\n    volumes:\n      - ./redis-data:/data\n\n  mongo:\n    image: mongo:3.6.13\n    container_name: mongo\n    restart: unless-stopped\n    healthcheck:\n      test: echo \'db.stats().ok\' | mongo localhost:27017/test --quiet\n      interval: 2s\n      timeout: 2s\n      retries: 200\n    networks:\n      - erxes-net\n    # MongoDB data will be saved into ./mongo-data folder.\n    volumes:\n      - ./mongo-data:/data/db\n\n  rabbitmq:\n    image: rabbitmq:3.7.17-management\n    container_name: rabbitmq\n    restart: unless-stopped\n    healthcheck:\n      timeout: 2s\n      interval: 2s\n      retries: 200\n      test:\n        - "CMD"\n        - "rabbitmqctl"\n        - "status"\n    networks:\n      - erxes-net\n    # RabbitMQ data will be saved into ./rabbitmq-data folder.\n    volumes:\n      - ./rabbitmq-data:/var/lib/rabbitmq\n\n  elasticsearch:\n    image: docker.elastic.co/elasticsearch/elasticsearch:7.5.2\n    container_name: elasticsearch\n    environment:\n      - bootstrap.memory_lock=true\n      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"\n      - discovery.type=single-node\n    ulimits:\n      memlock:\n        soft: -1\n        hard: -1\n    volumes:\n      - ./elasticsearch-data:/usr/share/elasticsearch/data\n    networks:\n      - erxes-net\n    healthcheck:\n      test: curl -s http://localhost:9200 >/dev/null; if [[ $$? == 52 ]]; then echo 0; else echo 1; fi\n      interval: 30s\n      timeout: 10s\n      retries: 5\n\nnetworks:\n  erxes-net:\n    driver: bridge\n')),Object(a.b)("p",null,"If you have trouble running erxes docker images, feel free to open ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/erxes/erxes/issues"}),"issue"),"."))}b.isMDXComponent=!0},135:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),b=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=b(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=b(t),u=r,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return t?o.a.createElement(m,l(l({ref:n},i),{},{components:t})):o.a.createElement(m,l({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<a;i++)s[i]=t[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);