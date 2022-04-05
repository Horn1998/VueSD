<template>
  <d-container fluid class="main-content-container px-4 pb-4">
      <d-card class="card-small" style="margin-top: 50px; margin-left: 200px; margin-right: 200px;">

            <!-- Form Example -->
            <d-card-header class="border-bottom">
              <h3 class="m-0">新增用户</h3>
            </d-card-header>

            <d-list-group flush style=" padding-left:250px ">
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col>
                    <d-form>
                      <d-form-row>
                        <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">用户名称</label>
                        <d-col md="8" class="form-group" >
                          <d-input id="feEmailAddress" type="email" placeholder="指标名称" value="user11"/> 
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                        <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">真实姓名</label>
                      <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="user11" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                       <label for="feEmailAddress" style="margin-top:6px; margin-right:50px;">权限</label>

                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="测试人员" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                          <label for="feEmailAddress" style="margin-top:6px; margin-right:50px;">邮箱</label>
                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="user11@123455.com" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                          <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">联系电话</label>
                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="13301101100" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                          <label for="feEmailAddress" style="margin-top:6px; margin-right:20px;">用户描述</label>
                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" placeholder="测试用户11" />
                        </d-col>
                        </d-form-row>
                    
                        <d-form-row>
                          <label for="feEmailAddress" style="margin-top:6px; margin-right:50px;">备注</label>
                        <d-col md="8" class="form-group">
                          <d-input id="feEmailAddress" type="email" />
                        </d-col>
                        </d-form-row>
                        
                      <d-button type="submit" style="margin-left: 150px; margin-top: 20px; width: 100px;">提交</d-button>
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

