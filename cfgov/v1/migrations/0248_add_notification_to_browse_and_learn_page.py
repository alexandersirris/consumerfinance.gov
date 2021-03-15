# Generated by Django 2.2.16 on 2021-03-15 16:30

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('v1', '0247_add_notification_type_option'),
    ]

    operations = [
        migrations.AlterField(
            model_name='abstractfilterpage',
            name='header',
            field=wagtail.core.fields.StreamField([('article_subheader', wagtail.core.blocks.RichTextBlock(icon='form')), ('text_introduction', wagtail.core.blocks.StructBlock([('eyebrow', wagtail.core.blocks.CharBlock(help_text='Optional: Adds an H5 eyebrow above H1 heading text. Only use in conjunction with heading.', label='Pre-heading', required=False)), ('heading', wagtail.core.blocks.CharBlock(required=False)), ('intro', wagtail.core.blocks.RichTextBlock(required=False)), ('body', wagtail.core.blocks.RichTextBlock(required=False)), ('links', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('text', wagtail.core.blocks.CharBlock(required=False)), ('url', wagtail.core.blocks.CharBlock(default='/', required=False))]), required=False)), ('has_rule', wagtail.core.blocks.BooleanBlock(help_text='Check this to add a horizontal rule line to bottom of text introduction.', label='Has bottom rule', required=False))])), ('item_introduction', wagtail.core.blocks.StructBlock([('show_category', wagtail.core.blocks.BooleanBlock(default=True, help_text="Whether to show the category or not (category must be set in 'Configuration').", required=False)), ('heading', wagtail.core.blocks.CharBlock(required=False)), ('paragraph', wagtail.core.blocks.RichTextBlock(required=False)), ('date', wagtail.core.blocks.DateBlock(required=False)), ('has_social', wagtail.core.blocks.BooleanBlock(help_text='Whether to show the share icons or not.', required=False))])), ('notification', wagtail.core.blocks.StructBlock([('type', wagtail.core.blocks.ChoiceBlock(choices=[('default', 'Information'), ('warning', 'Warning')])), ('message', wagtail.core.blocks.CharBlock(help_text='The main notification message to display.', required=True)), ('explanation', wagtail.core.blocks.TextBlock(help_text='Explanation text appears below the message in smaller type.', required=False)), ('links', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('text', wagtail.core.blocks.CharBlock(required=False)), ('url', wagtail.core.blocks.CharBlock(default='/', required=False))]), help_text='Links appear on their own lines below the explanation.', required=False))]))], blank=True),
        ),
        migrations.AlterField(
            model_name='browsepage',
            name='header',
            field=wagtail.core.fields.StreamField([('text_introduction', wagtail.core.blocks.StructBlock([('eyebrow', wagtail.core.blocks.CharBlock(help_text='Optional: Adds an H5 eyebrow above H1 heading text. Only use in conjunction with heading.', label='Pre-heading', required=False)), ('heading', wagtail.core.blocks.CharBlock(required=False)), ('intro', wagtail.core.blocks.RichTextBlock(required=False)), ('body', wagtail.core.blocks.RichTextBlock(required=False)), ('links', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('text', wagtail.core.blocks.CharBlock(required=False)), ('url', wagtail.core.blocks.CharBlock(default='/', required=False))]), required=False)), ('has_rule', wagtail.core.blocks.BooleanBlock(help_text='Check this to add a horizontal rule line to bottom of text introduction.', label='Has bottom rule', required=False))])), ('featured_content', wagtail.core.blocks.StructBlock([('heading', wagtail.core.blocks.CharBlock()), ('body', wagtail.core.blocks.TextBlock(help_text='Line breaks will be ignored.')), ('post', wagtail.core.blocks.PageChooserBlock(required=False)), ('show_post_link', wagtail.core.blocks.BooleanBlock(label='Render post link?', required=False)), ('post_link_text', wagtail.core.blocks.CharBlock(required=False)), ('image', wagtail.core.blocks.StructBlock([('upload', wagtail.images.blocks.ImageChooserBlock(required=False)), ('alt', wagtail.core.blocks.CharBlock(help_text="If the image is decorative (i.e., if a screenreader wouldn't have anything useful to say about it), leave the Alt field blank.", required=False))])), ('links', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('text', wagtail.core.blocks.CharBlock(required=False)), ('url', wagtail.core.blocks.CharBlock(default='/', required=False))]), label='Additional Links')), ('video', wagtail.core.blocks.StructBlock([('video_id', wagtail.core.blocks.RegexBlock(error_messages={'invalid': 'The YouTube video ID is in the wrong format.'}, help_text='Enter the YouTube video ID, which is located at the end of the video URL, after "v=". For example, the video ID for https://www.youtube.com/watch?v=1V0Ax9OIc84 is 1V0Ax9OIc84.', label='YouTube video ID', regex='^[\\w-]{11}$', required=False)), ('thumbnail_image', wagtail.images.blocks.ImageChooserBlock(help_text='Optional thumbnail image to show before and after the video plays. If the thumbnail image is not set here, the video player will default to showing the thumbnail that was set in (or automatically chosen by) YouTube.', required=False))], required=False))])), ('notification', wagtail.core.blocks.StructBlock([('type', wagtail.core.blocks.ChoiceBlock(choices=[('default', 'Information'), ('warning', 'Warning')])), ('message', wagtail.core.blocks.CharBlock(help_text='The main notification message to display.', required=True)), ('explanation', wagtail.core.blocks.TextBlock(help_text='Explanation text appears below the message in smaller type.', required=False)), ('links', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('text', wagtail.core.blocks.CharBlock(required=False)), ('url', wagtail.core.blocks.CharBlock(default='/', required=False))]), help_text='Links appear on their own lines below the explanation.', required=False))]))], blank=True),
        ),
    ]
