Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::new(1200, 630)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Background #F4F1EA
$bgBrush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml("#F4F1EA"))
$g.FillRectangle($bgBrush, 0, 0, 1200, 630)

# Editorial Inner Border #E2DCD0
$pen = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml("#E2DCD0"), 2.0)
$g.DrawRectangle($pen, 30, 30, 1140, 570)

# Top badge
$burntBrush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml("#E87545"))
$whiteBrush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml("#FFFFFF"))
$borderPen = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml("#D8D0C0"), 1.0)

$badgeRect = [System.Drawing.Rectangle]::new(80, 80, 330, 38)
$g.FillRectangle($whiteBrush, $badgeRect)
$g.DrawRectangle($borderPen, $badgeRect)

$badgeFont = [System.Drawing.Font]::new("Arial", [float]10, [System.Drawing.FontStyle]::Bold)
$g.DrawString("AVAILABLE FOR OPPORTUNITIES", $badgeFont, $burntBrush, [float]96, [float]92)

# Heading
$titleFont = [System.Drawing.Font]::new("Georgia", [float]38, [System.Drawing.FontStyle]::Bold)
$charcoalBrush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml("#171717"))
$g.DrawString("Gourisha Rathore", $titleFont, $charcoalBrush, [float]76, [float]140)

# Subtitle
$subFont = [System.Drawing.Font]::new("Arial", [float]18, [System.Drawing.FontStyle]::Bold)
$g.DrawString("Frontend Developer | React & MERN Stack", $subFont, $burntBrush, [float]80, [float]215)

# Description
$descFont = [System.Drawing.Font]::new("Arial", [float]13, [System.Drawing.FontStyle]::Regular)
$mutedBrush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml("#6B6358"))
$g.DrawString("Crafting thoughtful, responsive web applications with clean code,", $descFont, $mutedBrush, [float]80, [float]270)
$g.DrawString("modular architecture, and user-focused digital experiences.", $descFont, $mutedBrush, [float]80, [float]298)

# Tag pills
$tagFont = [System.Drawing.Font]::new("Arial", [float]11, [System.Drawing.FontStyle]::Bold)
$tags = @("React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Tailwind CSS")
$tx = 80
foreach ($t in $tags) {
    $size = $g.MeasureString($t, $tagFont)
    $w = [int]$size.Width + 20
    $pillRect = [System.Drawing.Rectangle]::new($tx, 360, $w, 32)
    $g.FillRectangle($whiteBrush, $pillRect)
    $g.DrawRectangle($borderPen, $pillRect)
    $g.DrawString($t, $tagFont, $charcoalBrush, [float]($tx + 10), [float]368)
    $tx += $w + 10
}

# Footer domain
$domainFont = [System.Drawing.Font]::new("Arial", [float]12, [System.Drawing.FontStyle]::Regular)
$g.DrawString("https://myportfolio-seven-gray-12.vercel.app", $domainFont, $mutedBrush, [float]80, [float]520)

# Right: Profile Image Frame
$profImg = [System.Drawing.Image]::FromFile("F:\OneDrive\Desktop\portfolio\myportfolio\public\profile.jpg")
$cardBorderPen = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml("#171717"), 2.0)
$cardRect = [System.Drawing.Rectangle]::new(760, 75, 360, 480)
$shadowRect = [System.Drawing.Rectangle]::new(772, 87, 360, 480)
$shadowBrush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml("#E87545"))
$g.FillRectangle($shadowBrush, $shadowRect)

$g.DrawImage($profImg, $cardRect)
$g.DrawRectangle($cardBorderPen, $cardRect)

$bmp.Save("F:\OneDrive\Desktop\portfolio\myportfolio\public\og-image.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$bmp.Dispose()
$profImg.Dispose()
Write-Host "OG Image created successfully!"
