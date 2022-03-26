<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">测试指标管理</span>
        <h3 class="page-title">测试指标关联测试用例</h3>
      </div>
    </div>
    <d-row>
        <d-col>
            <d-form>
                <d-form-row>
                <d-col md="4" class="form-group">
                    <label for="yonglimingcheng">用例名称</label>
                    <d-input id="yonglimingcheng" type="text" />
                </d-col>
                <d-col md="4" class="form-group">
                    <d-button  style="margin-top: 32px;margin-bottom: 16px" theme="warning">查询</d-button>
                </d-col>
                </d-form-row>   
            </d-form>
        </d-col>
    </d-row>
    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0" style="width: 50px"></th>
                  <th scope="col" class="border-0">用例名称</th>
                  <th scope="col" class="border-0">版本</th>
                  <th scope="col" class="border-0">专有数据</th>
                  <th scope="col" class="border-0">前置条件</th>
                  <th scope="col" class="border-0">预期结果</th>
                  <th scope="col" class="border-0">备注</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><d-checkbox checked /></td>
                  <td>修改IP分组……</td>
                  <td>V2.0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                 <tr>
                  <td><d-checkbox checked /></td>
                  <td>获取对象……</td>
                  <td>V2.0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><d-checkbox /></td>
                  <td>获取heartbit</td>
                  <td>V2.0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><d-checkbox /></td>
                  <td>设置heartbit</td>
                  <td>V2.0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><d-checkbox /></td>
                  <td>添加对象</td>
                  <td>V2.0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                <tr>
                  <td><d-checkbox /></td>
                  <td>删除对象</td>
                  <td>V2.0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                <tr>
                  <td><d-checkbox /></td>
                  <td>查询对象</td>
                  <td>V2.0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align:center">
        <d-button  style="margin: 10px" theme="warning" class="form-group">关联测试用例</d-button>
        <d-button  style="margin: 10px" theme="warning" class="form-group">取消</d-button>
    </div>
  </div>
</template>