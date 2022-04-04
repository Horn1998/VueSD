<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">测试文档管理</span>
        <h3 class="page-title">测试文档查询</h3>
      </div>
    </div>
    <d-row>
        <d-col>
            <d-form>
                <d-form-row>
                <d-col md="4" class="form-group">
                    <label for="yonglimingcheng">测试文档名称</label>
                    <d-input id="yonglimingcheng" type="text" />
                </d-col>
                <d-col md="4" class="form-group">
                    <label for="yonglimingcheng">所属项目</label>
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
                  <th scope="col" class="border-0">编号</th>
                  <th scope="col" class="border-0">文档名称</th>
                  <th scope="col" class="border-0">版本</th>
                  <th scope="col" class="border-0">所属项目</th>
                  <th scope="col" class="border-0">文档类型</th>
                  <th scope="col" class="border-0">描述</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>文档1</td>
                  <td>V1.0</td>
                  <td>项目1</td>
                  <td>测试计划</td>
                  <td>项目1第一轮测试计划</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>文档2</td>
                  <td>V1.0</td>
                  <td>项目1</td>
                  <td>测试用例</td>
                  <td>项目1第一轮测试用例</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>文档3</td>
                  <td>V1.0</td>
                  <td>项目1</td>
                  <td>测试结果</td>
                  <td>项目1第一轮测试结果</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>文档4</td>
                  <td>V1.0</td>
                  <td>项目1</td>
                  <td>测试报告</td>
                  <td>项目1第一轮测试报告</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>文档5</td>
                  <td>V1.0</td>
                  <td>项目1</td>
                  <td>测试分析</td>
                  <td>项目1第一轮测试分析</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div style="display:flex;justify-content: space-between;">
        <div>共5条记录</div>
        <div>
          <span>每页
          <div style="display:inline-block;width:50px">
            <d-select required>
                            <option default>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
            </d-select>
          </div>
          条记录
        </span>
            <d-button  style="margin:5px" theme="warning">首页</d-button>
            <d-button  style="margin:5px" theme="warning">上页</d-button>
            <d-button  style="margin:5px" theme="warning">下页</d-button>
            <d-button  style="margin:5px" theme="warning">末页</d-button>
        </div>
    </div>
  </div>
</template>