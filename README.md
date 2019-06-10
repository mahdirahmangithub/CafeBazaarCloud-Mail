# Cafe Bazaar Cloud | Mail Template

 
<p align="center">
  <a href=" " target="_blank">
    <img width="250"src="https://raw.githubusercontent.com/mahdirahmangithub/cafebazaarcloud/master/headerLogo.png">

  </a>
</p>

 

---

# Introduction

CAfe Bazaar Cloud mail template made by MJML, a markup language created by [Mailjet](https://www.mailjet.com/) and designed to reduce the pain of coding a responsive email. Its semantic syntax makes it easy and straightforward while its rich standard components library fastens your development time and lightens your email codebase. MJML’s open-source engine takes care of translating the MJML you wrote into responsive HTML.

<p align="center">
  <a href=" " target="_blank">
    <img width="75%" src="https://cloud.githubusercontent.com/assets/6558790/12450760/ee034178-bf85-11e5-9dda-98d0c8f9f8d6.png">
  </a>
</p>


# Installation

You can install MJML with NPM to use it with NodeJS or the Command Line Interface. If you're not sure what those are, head over to <a href="#usage">Usage</a> for other ways to use MJML.

```bash
npm install mjml
```

# Development

To work on MJML, make changes and create merge requests, download and install [yarn](https://yarnpkg.com/lang/en/docs/install/) for easy development.

```bash
git clone https://github.com/mjmlio/mjml.git && cd mjml
yarn
yarn build
```

You can also run `yarn build:watch` to rebuild the package as you code.

# Usage

## Online

Don't want to install anything? Use the free online editor!

<p align="center">
  <a href="http://mjml.io/try-it-live" target="_blank"><img src="https://cloud.githubusercontent.com/assets/6558790/12195421/58a40618-b5f7-11e5-9ed3-80463874ab14.png" alt="try it live" width="75%"></a>
</p>
<br>

## Applications and plugins

MJML comes with an ecosystem of tools and plugins, check out:
- The [MJML App](https://mjmlio.github.io/mjml-app/) (MJML is included)
- [Visual Studio Code plugin](https://github.com/attilabuti/vscode-mjml) (MJML is included)
  
For more tools, check the [Community](https://mjml.io/community) page.

## Command line interface

> Compiles the file and outputs the HTML generated in `output.html`

```bash
mjml input.mjml -o output.html
```

You can pass optional `arguments` to the CLI and combine them.

argument | description | default value
---------|--------|--------------
`mjml -m [input]` | Migrates a v3 MJML file to the v4 syntax | NA
`mjml [input] -o [output]` | Writes the output to [output] | NA
`mjml [input] -s` | Writes the output to `stdout` | NA
`mjml -w [input]` | Watches the changes made to [input] (file or folder) | NA
`mjml [input] --config.beautify` | Beautifies the output (`true` or `false`) | true
`mjml [input] --config.minify` | Minifies the output (`true` or `false`) | false

## Inside Node.js

```javascript
import mjml2html from 'mjml'

/*
  Compile an mjml string
*/
const htmlOutput = mjml2html(`
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text>
            Hello World!
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
`, options)


/*
  Print the responsive HTML generated and MJML errors if any
*/
console.log(htmlOutput)
```

You can pass optional `options` as an object to the `mjml2html` function:

option   | unit   | description  | default value
-------------|--------|--------------|---------------
fonts  | object | Default fonts imported in the HTML rendered by HTML | See in [index.js](https://github.com/mjmlio/mjml/blob/master/packages/mjml-core/src/index.js#L36-L44)
keepComments | boolean | Option to keep comments in the HTML output | true
beautify | boolean | Option to beautify the HTML output | false
minify | boolean | Option to minify the HTML output | false
validationLevel | string | Available values for the [validator](https://github.com/mjmlio/mjml/tree/master/packages/mjml-validator#validating-mjml): 'strict', 'soft', 'skip'  | 'soft'
filePath | string | Path of file, used for relative paths in mj-includes | '.'

 


 <iframe>
 <!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
          .ReadMsgBody { width:100%; }
          .ExternalClass { width:100%; }
          .ExternalClass * { line-height:100%; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }</style><!--[if !mso]><!--><style type="text/css">@media only screen and (max-width:480px) {
            @-ms-viewport { width:320px; }
            @viewport { width:320px; }
          }</style><!--<![endif]--><!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]--><!--[if lte mso 11]>
        <style type="text/css">
          .outlook-group-fix { width:100% !important; }
        </style>
        <![endif]--><style type="text/css">@media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-per-66 { width:66.66666666666666% !important; max-width: 66.66666666666666%; }
.mj-column-per-30 { width:30% !important; max-width: 30%; }
.mj-column-per-33 { width:33.333333333333336% !important; max-width: 33.333333333333336%; }
      }</style><style type="text/css">@media only screen and (max-width:480px) {
      table.full-width-mobile { width: 100% !important; }
      td.full-width-mobile { width: auto !important; }
    }
  

      noinput.mj-menu-checkbox { display:block!important; max-height:none!important; visibility:visible!important; }

      @media only screen and (max-width:480px) {
        .mj-menu-checkbox[type="checkbox"] ~ .mj-inline-links { display:none!important; }
        .mj-menu-checkbox[type="checkbox"]:checked ~ .mj-inline-links,
        .mj-menu-checkbox[type="checkbox"] ~ .mj-menu-trigger { display:block!important; max-width:none!important; max-height:none!important; font-size:inherit!important; }
        .mj-menu-checkbox[type="checkbox"] ~ .mj-inline-links > a { display:block!important; }
        .mj-menu-checkbox[type="checkbox"]:checked ~ .mj-menu-trigger .mj-menu-icon-close { display:block!important; }
        .mj-menu-checkbox[type="checkbox"]:checked ~ .mj-menu-trigger .mj-menu-icon-open { display:none!important; }
      }</style><style type="text/css">@media all and (min-width: 480px) {
        .align div {
          text-align: left !important;
        }
      }</style></head><body style="background-color:#ffffff;"><div style="background-color:#ffffff;"><!-- Image Header --><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:16px 0px 0px 0px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:160px;"><img height="auto" src="https://raw.githubusercontent.com/mahdirahmangithub/cafebazaarcloud/master/headerLogo.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="160"></td></tr></tbody></table></td></tr><tr><td style="font-size:0px;word-break:break-word;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="10" style="vertical-align:top;height:10px;"><![endif]--><div style="height:10px;">&nbsp;</div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><![endif]--><!-- <mj-column width="33.33333333333333%" vertical-align="middle">
        <mj-image src="https://raw.githubusercontent.com/mahdirahmangithub/cafebazaarcloud/master/navLogo.png" alt="cafebazaar | Cloud" padding-bottom="0px" padding-top="0px" padding="20px" width="64px"></mj-image>
      </mj-column> --><!--[if mso | IE]><td class="" style="vertical-align:middle;width:399.99999999999994px;" ><![endif]--><div class="mj-column-per-66 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%"><tr><td align="center" style="font-size:0px;word-break:break-word;"><!--[if !mso><!--> <input type="checkbox" id="23331d751dcc30b9" class="mj-menu-checkbox" style="display:none !important; max-height:0; visibility:hidden;"><!--<![endif]--><div class="mj-menu-trigger" style="display:none;max-height:0px;max-width:0px;font-size:0px;overflow:hidden;"><label for="23331d751dcc30b9" class="mj-menu-label" style="display:block;cursor:pointer;mso-hide:all;-moz-user-select:none;user-select:none;align:center;color:rgba(93,99,125,0.87);font-size:18px;font-family:Helvetica Neue;text-transform:uppercase;text-decoration:none;line-height:30px;padding:0px;"><span class="mj-menu-icon-open" style="mso-hide:all;">&#9776; </span><span class="mj-menu-icon-close" style="display:none;mso-hide:all;">&#215;</span></label></div><div class="mj-inline-links"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center"><tr><td style="padding:15px 10px;" class="" ><![endif]--> <a class="mj-link" href="" target="_blank" style="display:inline-block;color:rgba(93,99,125,0.87);font-family:Helvetica Neue;font-size:12px;font-weight:normal;line-height:22px;text-decoration:none;text-transform:none;padding:15px 10px;">Home </a><!--[if mso | IE]></td><td style="padding:15px 10px;" class="" ><![endif]--> <a class="mj-link" href="" target="_blank" style="display:inline-block;color:rgba(93,99,125,0.87);font-family:Helvetica Neue;font-size:12px;font-weight:normal;line-height:22px;text-decoration:none;text-transform:none;padding:15px 10px;">About </a><!--[if mso | IE]></td><td style="padding:15px 10px;" class="" ><![endif]--> <a class="mj-link" href="" target="_blank" style="display:inline-block;color:rgba(93,99,125,0.87);font-family:Helvetica Neue;font-size:12px;font-weight:normal;line-height:22px;text-decoration:none;text-transform:none;padding:15px 10px;">Contact </a><!--[if mso | IE]></td></tr></table><![endif]--></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;padding-top:0px;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tr><td style="font-size:0px;padding:10px 25px;word-break:break-word;"><p style="border-top:solid 1px rgba(93,99,125,0.24);font-size:1;margin:0px auto;width:60%;"></p><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px rgba(93,99,125,0.24);font-size:1;margin:0px auto;width:310px;" role="presentation" width="310px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]--></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><![endif]--><!-- paragraph --><!--[if mso | IE]><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:12px;font-style:normal;line-height:1;text-align:left;color:rgba(93,99,125,0.56);">02 | May | 2019</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:20px;font-style:normal;font-weight:bold;line-height:1;text-align:left;color:rgba(93,99,125,0.87);">Cafe Bazaar Cloud Services Header</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:32px;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:14px;font-style:normal;line-height:20px;text-align:left;color:rgba(93,99,125,0.56);">CLOUD is a cloud computing service created by Cafe Bazaar for building, testing, deploying, and managing applications and services through Cafe Bazaar data centers. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over two thousands years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:20px;font-style:normal;letter-spacing:16px;line-height:1;text-align:center;color:rgba(93,99,125,0.87);">...</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:14px;font-style:normal;line-height:20px;text-align:left;color:rgba(93,99,125,0.56);">CLOUD is a cloud computing service created by Cafe Bazaar for building, testing, deploying, and managing applications and services through Cafe Bazaar data centers. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over two thousands years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><v:rect style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"><v:fill origin="0.5, 0" position="0.5, 0" src="https://raw.githubusercontent.com/mahdirahmangithub/cafebazaarcloud/master/back.png" type="tile" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><![endif]--><div style="background:url(https://raw.githubusercontent.com/mahdirahmangithub/cafebazaarcloud/master/back.png) top center / cover no-repeat;Margin:0px auto;max-width:600px;"><div style="line-height:0;font-size:0;"><table align="center" background="https://raw.githubusercontent.com/mahdirahmangithub/cafebazaarcloud/master/back.png" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:url(https://raw.githubusercontent.com/mahdirahmangithub/cafebazaarcloud/master/back.png) top center / cover no-repeat;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:middle;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:middle;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-top:45px;padding-bottom:10px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:14px;line-height:1;text-align:center;color:#ffffff;"><span style="font-size: 30px; line-height: 30px;">Future Business Technology</span><br><br>Only on Cafe Bazaar<span style="color: #00e9ff"> CLOUD </span>services</div></td></tr><tr><td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:45px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"><tr><td align="center" bgcolor="#32c5f4" role="presentation" style="border:none;border-radius:4px;cursor:auto;padding:10px 25px;background:#32c5f4;" valign="middle"><a href="" style="background:#32c5f4;color:#ffffff;font-family:Helvetica Neue;font-size:13px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;" target="_blank">SUBSCRIBE</a></td></tr></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div></div><!--[if mso | IE]></v:textbox></v:rect></td></tr></table><![endif]--><!-- Social icons --><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;padding-top:64px;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td style="font-size:0px;padding:10px 25px;word-break:break-word;"><p style="border-top:solid 1px rgba(93,99,125,0.24);font-size:1;margin:0px auto;width:100%;"></p><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px rgba(93,99,125,0.24);font-size:1;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]--></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:32px;padding-top:0px;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:180px;" ><![endif]--><div class="mj-column-per-30 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-top:10px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:80px;"><img alt="cafebazaar | Cloud" height="auto" src="https://raw.githubusercontent.com/mahdirahmangithub/cafebazaarcloud/master/footerLogo.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="80"></td></tr></tbody></table></td></tr><tr><td style="font-size:0px;word-break:break-word;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="4" style="vertical-align:top;height:4px;"><![endif]--><div style="height:4px;">&nbsp;</div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr><tr><td align="center" style="font-size:0px;padding:1px 16px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:10px;font-style:normal;font-weight:normal;letter-spacing:1px;line-height:16px;text-align:center;color:rgba(93,99,125,0.87);"><a href="" style="text-decoration: none; color: inherit;">cafebazaar.cloud</a></div></td></tr><tr><td style="font-size:0px;word-break:break-word;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="4" style="vertical-align:top;height:4px;"><![endif]--><div style="height:4px;">&nbsp;</div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></table></div><!--[if mso | IE]></td><td class="" style="vertical-align:top;width:200px;" ><![endif]--><div class="mj-column-per-33 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" class="align" style="font-size:0px;padding:0px 16px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:14px;font-style:normal;font-weight:bold;letter-spacing:1px;line-height:20px;text-align:center;color:rgba(93,99,125,0.87);">Melina Sheikholghora</div></td></tr><tr><td align="center" class="align" style="font-size:0px;padding:1px 16px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:12px;font-style:normal;font-weight:normal;letter-spacing:1px;line-height:16px;text-align:center;color:rgba(93,99,125,0.87);"><a href="mailto:m.sheikh@cafebazaar.ir" style="text-decoration: none; color: inherit;">m.sheikh@cafebazaar.ir</a></div></td></tr><tr><td style="font-size:0px;word-break:break-word;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="10" style="vertical-align:top;height:10px;"><![endif]--><div style="height:10px;">&nbsp;</div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr><tr><td align="center" class="align" style="font-size:0px;padding:1px 16px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:12px;font-style:normal;font-weight:normal;letter-spacing:1px;line-height:16px;text-align:center;color:rgba(93,99,125,0.87);">Infrastructure</div></td></tr><tr><td align="center" class="align" style="font-size:0px;padding:1px 16px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:12px;font-style:normal;font-weight:normal;letter-spacing:1px;line-height:16px;text-align:center;color:rgba(93,99,125,0.87);">Business Development Manager</div></td></tr><tr><td style="font-size:0px;word-break:break-word;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="10" style="vertical-align:top;height:10px;"><![endif]--><div style="height:10px;">&nbsp;</div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr><tr><td align="center" class="align" style="font-size:0px;padding:1px 16px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:12px;font-style:normal;font-weight:normal;letter-spacing:1px;line-height:16px;text-align:center;color:rgba(93,99,125,0.87);"><a href="tel:+989356338443" style="text-decoration: none; color: inherit;">+98 935 633 8443</a></div></td></tr><tr><td align="center" class="align" style="font-size:0px;padding:1px 16px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:12px;font-style:normal;font-weight:normal;letter-spacing:1px;line-height:16px;text-align:center;color:rgba(93,99,125,0.87);"><a href="tel:+982174314055" style="text-decoration: none; color: inherit;">+98 21 74 31 4055</a></div></td></tr></table></div><!--[if mso | IE]></td><td class="" style="vertical-align:top;width:200px;" ><![endif]--><div class="mj-column-per-33 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tr><td style="font-size:0px;padding:0px;word-break:break-word;"><p style="border-top:solid 1px rgba(93,99,125,0.24);font-size:1;margin:0px auto;width:100%;"></p><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px rgba(93,99,125,0.24);font-size:1;margin:0px auto;width:600px;" role="presentation" width="600px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]--></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>
 </iframe>