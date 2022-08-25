
{
    'name': 'Send Report to Printer',
    'version': '1.0.3',
    'summary': """
        This module allow you to send report to printer directly.""",

    'description': """
        This module allow you to send report to printer directly.
        printer1
        send to printer
        print report
        report to printer
        print report directly
        report printer
     """,
    'category': 'Web',
    'author': 'CorTex IT Solutions Ltd.',
    'website': 'https://cortexsolutions.net',
    'license': 'OPL-1',
    'currency': 'EUR',
    'price': 35,
    'depends': [
        'web','base'
    ],
    "data": [
    ],

    'assets': {
        'web.assets_backend': [
            'send_report_to_printer/static/src/js/client_action.js',
        ],
        'web.assets_qweb': [
            'send_report_to_printer/static/src/xml/**/*',
        ],
    },
    'installable': True,
    'auto_install': False,
    'images': ['static/description/main_screenshot.png'],
}
    
