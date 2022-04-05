<template>
  <d-container fluid class="main-content-container px-4 pb-4">
      <d-card class="card-small" style="margin-top: 50px; margin-left: 200px; margin-right: 200px;">

            <!-- Form Example -->
            <d-card-header class="border-bottom">
              <h3 class="m-0">测试文档详情</h3>
            </d-card-header>

            <d-list-group flush style=" padding-left:250px ">
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col>
                    <d-form>
                      <d-form-row>
                        <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">文档编号</label>
                        <d-col md="8" class="form-group" >
                          <d-input id="feEmailAddress" type="email" placeholder="指标名称" value="D20210001"/> 
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                        <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">文档名称</label>
                      <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="XX项目测试用例" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                       <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">文档来源</label>

                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="XX项目" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                          <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">所属项目</label>
                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="项目1" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                          <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">文档类型</label>
                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="测试用例" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                          <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">介质类型</label>
                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="电子文档" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                          <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">文档描述</label>
                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="测试用例1" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                          <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">提交人员</label>
                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="张三" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                          <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">提交时间</label>
                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="2021-10-01" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                          <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">存放位置</label>
                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="C:/doc/xx/testcae/" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                          <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">当前状态</label>
                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="可用" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                          <label for="feEmailAddress" style="margin-top:6px; margin-right:50px;">备注</label>
                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="测试用例1" />
                        </d-col>
                        </d-form-row>
                      <d-button type="submit" style="margin-top: 20px; width: 100px;">修改</d-button>
                      <d-button type="submit" style="margin-left: 150px; margin-top: 20px; width: 100px;">删除</d-button>
                      <d-button type="submit" style="margin-left: 150px; margin-top: 20px; width: 100px;">取消</d-button>
                    </d-form>
                  </d-col>
                </d-row>
              </d-list-group-item>
            </d-list-group>

          </d-card>
    
  </d-container>
</template>

<script>
import SidebarActions from '@/components/add-new-post/SidebarActions.vue';
import SidebarCategories from '@/components/add-new-post/SidebarCategories.vue';
import Editor from '@/components/add-new-post/Editor.vue';

import 'quill/dist/quill.snow.css';

export default {
  components: {
    anpEditor: Editor,
    anpSidebarActions: SidebarActions,
    anpSidebarCategories: SidebarCategories,
  },
};
</script>

