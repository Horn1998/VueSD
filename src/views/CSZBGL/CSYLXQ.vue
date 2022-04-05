<template>
  <d-container fluid class="main-content-container px-4 pb-4">
      <d-card class="card-small" style="margin-top: 50px; margin-left: 200px; margin-right: 200px;">

            <!-- Form Example -->
            <d-card-header class="border-bottom">
              <h3 class="m-0">测试用例详情</h3>
            </d-card-header>

            <d-list-group flush style=" padding-left:250px ">
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col>
                    <d-form>
                      <d-form-row>
                        <d-col md="8" class="form-group">
                          <span style="color:red">* </span><label for="feEmailAddress">用例名称</label>
                          <d-input id="feEmailAddress" type="email" placeholder="测试用例1" />
                        </d-col>
                        </d-form-row>
                        <!-- <d-form-row>
                        <d-col md="4" class="form-group">
                          <label for="feInputState">专用数据</label>
                          <d-select id="feInputState">
                            <option>Choose...</option>
                            <option>...</option>
                          </d-select>
                        </d-col>
                        <d-col md="4" class="form-group">
                          <label for="feEmailAddress">版本</label>
                          <d-input id="feEmailAddress" type="email" placeholder="版本" />
                        </d-col>
                      </d-form-row> -->
                        <d-form-row>
                        <d-col md="4" class="form-group">
                          <label for="feEmailAddress">专用数据</label>
                          <d-input id="feEmailAddress" type="email" placeholder="" />
                        </d-col>
                        <d-col md="4" class="form-group">
                          <label for="feEmailAddress">版本</label>
                          <d-input id="feEmailAddress" type="email" placeholder="" />
                        </d-col>
                      </d-form-row>
                      <d-form-row>
                          <d-col md="4" class="form-group">
                        <!-- Custom File Upload -->
                        <strong class="text-muted d-block mb-2">附件</strong>
                        <div class="custom-file mb-3">
                            <input type="file" class="custom-file-input" id="customFile2" />
                            <label class="custom-file-label" for="customFile2">Choose file...</label>
                        </div>
                        </d-col>
                        <d-col md="4" class="form-group">
                          <label for="feEmailAddress">所用工具</label>
                          <d-input id="feEmailAddress" type="email" placeholder="" />
                        </d-col>
                      </d-form-row>
                          <d-form-row>
                        <d-col md="8" class="form-group">
                          <label for="feEmailAddress">前置条件</label>
                          <d-input id="feEmailAddress" type="email" style="height: 120px;"/>
                        </d-col>
                        </d-form-row>
                            <d-form-row>
                        <d-col md="8" class="form-group">
                          <label for="feEmailAddress">预期结果</label>
                          <d-input id="feEmailAddress" type="email"  style="height: 120px;" />
                        </d-col>
                        </d-form-row>
                             <d-form-row>
                        <d-col md="8" class="form-group">
                          <label for="feEmailAddress">备注</label>
                          <d-input id="feEmailAddress" type="email"  style="height: 120px;" />
                        </d-col>
                        </d-form-row>
                      <d-button type="submit" style="margin-top: 20px; width: 200px;">查看测试步骤</d-button>
                      <d-button type="submit" style="margin-left: 40px; margin-top: 20px; width: 100px;">删除用例</d-button>
                      <d-button type="submit" style="margin-left: 40px; margin-top: 20px; width: 100px;">修改用例</d-button>
                      <d-button type="submit" style="margin-left: 40px; margin-top: 20px; width: 100px;">取消</d-button>
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

