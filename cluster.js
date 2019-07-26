const os = require('os');
const cluster = require('cluster');
const cpuNum = os.cpus.length;

if (cluster.isMaster) {
    //cpu 개수만큼 프로세스 생성
    for (var i=0;i<cpuNum;++i) {
        cluster.fork();
    }
    //클러스터가 죽으면
    cluster.on('exit', (worker, code ,signal) => {
        //클러스터를 다시 생성
        cluster.fork();
    });
} else {
    require('./web');
}
