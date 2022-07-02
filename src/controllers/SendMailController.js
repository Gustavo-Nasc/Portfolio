const nodemailer = require('nodemailer')

module.exports = {
    async send(req, res) {
        const name = req.body.name
        const email = req.body.email
        const subject = req.body.subject
        const message = req.body.message

        const transport = nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            secureConnection: false,
            port: 587,
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: 'gustavo.ns@outlook.com.br',
                pass: '16Nascgu'
            }
        })

        const messageMailer = {
            from: "Gustavo Nascimento Souza <gustavo.ns@outlook.com.br>",
            to: ["gustavo.ns@outlook.com.br", "gunascsouza@gmail.com", email],
            subject: subject,
            html: `
                <body style="font-family: 'Century Gothic', sans-serif">
                    <p style="font-size: 16px; margin-bottom: 80px">${message}</p>
                    <p style="font-size: 14px">Veja mais projetos de Gustavo Nascimento em:</p>
                    <div style="border-radius: 5px; width: max-content; display: flex; background-color: #211F1F; padding: 16px">
                        <img src="https://avatars.githubusercontent.com/u/78862610?v=4" style="border-radius: 50%; width: 80px; margin-right: 16px" />
                        <a href="https://github.com/Gustavo-Nasc" style="font-size: 20px; color: #fff; margin-top: auto; margin-bottom: auto; text-decoration: none; border-bottom: 1px solid #fff">Gustavo-Nasc's Github</a>
                    </div>
                </body>
            `
        }

        await transport.sendMail(messageMailer, function (err) {
            if (err) {
                res.render('parts/email-not-sent')
            } else {
                res.render('parts/email-sent')
            }
        })
    }
}