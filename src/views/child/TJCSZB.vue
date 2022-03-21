<template>
  <d-container fluid class="main-content-container px-4 pb-4">
      <d-card class="card-small" style="margin-top: 50px; margin-left: 200px; margin-right: 200px;">

            <!-- Form Example -->
            <d-card-header class="border-bottom">
              <h3 class="m-0">添加测试指标</h3>
            </d-card-header>

            <d-list-group flush style=" padding-left:250px ">
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col>
                    <d-form>
                      <d-form-row>
                        <d-col md="8" class="form-group">
                          <label for="feEmailAddress">指标名称</label>
                          <d-input id="feEmailAddress" type="email" placeholder="指标名称" />
                        </d-col>
                        </d-form-row>
                        <d-form-row>
                        <d-col md="4" class="form-group">
                          <label for="feInputState">指标类型</label>
                          <d-select id="feInputState">
                            <option>Choose...</option>
                            <option>...</option>
                          </d-select>
                        </d-col>
                        <d-col md="4" class="form-group">
                          <label for="feEmailAddress">版本</label>
                          <d-input id="feEmailAddress" type="email" placeholder="版本" />
                        </d-col>
                      </d-form-row>
                        <d-form-row>
                        <d-col md="4" class="form-group">
                          <label for="feEmailAddress">测试周期</label>
                          <d-input id="feEmailAddress" type="email" placeholder="测试周期" />
                        </d-col>
                        <d-col md="4" class="form-group">
                          <label for="feEmailAddress">测试试验能力</label>
                          <d-input id="feEmailAddress" type="email" placeholder="测试试验能力" />
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
                          <label for="feEmailAddress">抓弄数据</label>
                          <d-input id="feEmailAddress" type="email" placeholder="抓弄数据" />
                        </d-col>
                      </d-form-row>
                          <d-form-row>
                        <d-col md="8" class="form-group">
                          <label for="feEmailAddress">指标描述</label>
                          <d-input id="feEmailAddress" type="email" style="height: 120px;"/>
                        </d-col>
                        </d-form-row>
                            <d-form-row>
                        <d-col md="8" class="form-group">
                          <label for="feEmailAddress">补充说明</label>
                          <d-input id="feEmailAddress" type="email"  style="height: 120px;" />
                        </d-col>
                        </d-form-row>
                      <d-button type="submit" style="margin-left: 100px; margin-top: 20px; width: 100px;">提交</d-button>
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

