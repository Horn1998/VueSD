<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">测试用例管理</span>
        <h3 class="page-title">测试步骤查看</h3>
      </div>
    </div>
    <d-row>
        <d-col>
            <d-form>
                <d-form-row>
                <d-col md="4" class="form-group">
                    <label for="yonglimingcheng">测试用例名称</label>
                    <d-input id="yonglimingcheng" type="text" />
                </d-col>
                <d-col md="4" class="form-group">
                    <d-button  style="margin-top: 32px;margin-bottom: 16px" theme="warning">查看</d-button>
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
                  <th scope="col" class="border-0">编号</th>
                  <th scope="col" class="border-0">测试步骤</th>
                  <th scope="col" class="border-0">输入</th>
                  <th scope="col" class="border-0">预期结果</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>测试步骤1</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>测试步骤2</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>测试步骤3</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>测试步骤4</td>
                  <td></td>
                  <td></td>
                </tr>
                 <tr>
                  <td>5</td>
                  <td>测试步骤5</td>
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
        <d-button  style="margin: 10px" theme="warning" class="form-group">新增</d-button>
        <d-button  style="margin: 10px" theme="warning" class="form-group">删除</d-button>
        <d-button  style="margin: 10px" theme="warning" class="form-group">修改</d-button>
        <d-button  style="margin: 10px" theme="warning" class="form-group">取消</d-button>
    </div>
  </div>
</template>