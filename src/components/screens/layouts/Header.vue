<template>
    <header>
        <div class="container-fluid">
            <div class="d-flex align-items-center gap-3 justify-content-between">
                <div class="d-flex align-items-center gap-3">
                    <img width="40" src="@/assets/img/logo.png">
                    <h1>REX PANEL</h1>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <span>Mário,</span>
                    <a class="btn btn-sm btn-leaf">Logout</a>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="less">
body{ padding-top: 48px; }
header{
    .bjungle; position: fixed; top: 0; left: 0; z-index: 1000;
    padding: 5px 0; width: 100%;
    .d-flex{
        height: 38px;
        h1{
            .cbone;
            font-size: 18px;
            font-weight: 700;
            margin: 0;
            padding: 0;
        }
        span{ .cbone; }
    }
}
</style>