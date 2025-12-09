/**
 * This demo showcases a comprehensive HR Payroll report, presenting key metrics such as gross and net salaries, deductions, employee demographics, departmental performance, and leave summaries. It enables HR teams to analyze payroll trends and make informed decisions using dynamic visualizations in the ASP.NET Core Bold Report Viewer.
 */
 $(function () {
    $("#container").boldReportViewer({
        // Specifies the report Web API service URL. It is used to process the reports.
        reportServiceUrl: window.Globals.SERVICE_URL,
        // Specifies the path of the RDL report file
        reportPath: 'hr-payroll.rdl',
        toolbarSettings: window.Globals.TOOLBAR_OPTIONS,
        toolBarItemClick: window.Globals.EDIT_REPORT,
        exportItemClick: window.Globals.EXPORT_ITEM_CLICK
    });
});