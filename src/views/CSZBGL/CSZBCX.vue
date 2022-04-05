<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Test Index Query</span>
        <h3 class="page-title">测试指标查询</h3>
      </div>
    </div>
     <d-list-group flush >
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col>
                    <d-form>
                        <d-form-row>
                        <d-col md="4" class="form-group">
                          <label for="feEmailAddress">指标名称</label>
                          <d-input id="feEmailAddress" type="email" />
                        </d-col>
                        <d-col md="4" class="form-group">
                          <label for="feEmailAddress">版本</label>
                          <d-input id="feEmailAddress" type="email" />
                        </d-col>
                        <d-col md="4" class="form-group">
                           <d-button  style="height:40px; margin-top:26px; width:120px; margin-left:100px; font-size: 18px; font-weight:bold;" theme="warning" class="form-group">查  询</d-button>
                        </d-col>
                      </d-form-row>
                   
                    </d-form>
                  </d-col>
                </d-row>
              </d-list-group-item>
            </d-list-group>
    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Active Users</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">编号</th>
                  <th scope="col" class="border-0">指标名称</th>
                  <th scope="col" class="border-0">版本</th>
                  <th scope="col" class="border-0">周期(天)</th>
                  <th scope="col" class="border-0">测试能力</th>
                  <th scope="col" class="border-0">描述</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                 <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                  <tr>
                  <td>3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                  <tr>
                  <td>4</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                  <tr>
                  <td>5</td>
                  <td></td>
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
  </div>
</template>
