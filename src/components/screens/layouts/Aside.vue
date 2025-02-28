<template>
    <aside>
        <nav>
            <ul>
                <li><RouterLink to="/"><i class="bi bi-cone-striped"></i> <span>Construction</span></RouterLink></li>
                <li>
                    <a href="#"><i class="bi bi-stickies"></i> <span>Posts</span></a>
                    <ul class="submenu">
                        <li><a href="">List all Posts</a></li>
                        <li><a href="">Add to Posts</a></li>
                    </ul>
                </li>
                <li>
                    <RouterLink to="/collections"><i class="bi bi-collection"></i> <span>Collections</span></RouterLink>
                    <ul class="submenu">
                        <li><a href="">List all Collections</a></li>
                        <li><a href="">Add to Collections</a></li>
                    </ul>
                </li>
                <li><a href="#"><i class="bi bi-people"></i> <span>Users</span></a></li>
                <li><a href="#"><i class="bi bi-gear"></i> <span>Configs</span></a></li>
            </ul>
        </nav>
    </aside>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
aside{
    position: fixed; z-index: 1000;
    left: 0; height: 100%;
    @media (max-width: 991px) {
        .bdino;
        padding-top: 10px;
        width: 30px;
        nav{
            ul{
                .m0; .p0;
                li{
                    position: relative;
                    a{
                        .bl;
                        --bs-gutter-x: 1.5rem;
                        width: 100%;
                        padding: 10px calc(var(--bs-gutter-x)* .3);
                        span {
                            display: none;
                        }
                    }
                    ul.submenu{
                        display: none;
                        .bbone;
                        position: absolute; box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
                        left: 100%; top: 0; width: max-content;
                        li{
                            a{ .p10; }
                        }
                    }
                    &:hover{
                        .bbone;
                        ul.submenu{
                            .bl;
                            li{
                                a:hover{
                                    .brust; .cbone;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    @media (min-width: 992px) {
        padding-top: 20px;
        width: 180px;
        .bbone;
        nav{
            ul{
                .m0; .p0;
                li{
                    position: relative;
                    border-left: solid transparent 3px;
                    a{
                        .bl; .cgrafite; .transition;
                        --bs-gutter-x: 1.5rem;
                        width: 100%;
                        padding: 10px calc(var(--bs-gutter-x)* .5);
                    }
                    ul.submenu{
                        background-color: darken(@bone, 5%); visibility: hidden; opacity: 0;
                        position: absolute; box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
                        left: 100%; top: 0; width: max-content;
                        li{
                            border: none;
                            a{ .p10; }
                        }
                    }
                    &:hover{
                        background-color: darken(@bone, 5%);
                        border-left: solid @rust 3px;
                        ul.submenu{
                            opacity: 1; visibility: visible;
                            li{
                                a:hover{
                                    .brust; .cbone;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>