<template>
  <d-container fluid class="main-content-container px-4 pb-4">
      <d-card class="card-small" style="margin-top: 50px; margin-left: 200px; margin-right: 200px;">

            <!-- Form Example -->
            <d-card-header class="border-bottom">
              <h3 class="m-0">修改测试步骤</h3>
            </d-card-header>

            <d-list-group flush style=" padding-left:250px ">
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col>
                    <d-form>
                      <d-form-row>
                        <d-col md="8" class="form-group">
                          <label for="feEmailAddress">测试步骤编号</label>
                          <d-input id="feEmailAddress" type="email"  placeholder="步骤1"/>
                        </d-col>
                        </d-form-row>
                            <d-form-row>
                        <d-col md="8" class="form-group">
                          <label for="feEmailAddress">测试输入</label>
                          <d-input id="feEmailAddress" type="email"  style="height: 120px;" />
                        </d-col>
                        </d-form-row>
                             <d-form-row>
                        <d-col md="8" class="form-group">
                          <label for="feEmailAddress">预期输出</label>
                          <d-input id="feEmailAddress" type="email"  style="height: 120px;" />
                        </d-col>
                        </d-form-row>
                          <d-button type="submit" style="margin-left: 100px; margin-top: 20px; width: 100px;">修改</d-button>
                      <d-button type="submit" style="margin-left: 200px; margin-top: 20px; width: 100px;">取消</d-button>
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

